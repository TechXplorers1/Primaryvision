'use server';

/**
 * @fileOverview AI-powered threat prioritization flow.
 *
 * This file defines a Genkit flow that uses AI to prioritize detected threats based on their severity and potential impact.
 * It takes in threat data and outputs a prioritized list of threats with justifications.
 *
 * @interface ThreatPrioritizationInput - Defines the input schema for the threat prioritization flow.
 * @interface ThreatPrioritizationOutput - Defines the output schema for the threat prioritization flow.
 * @function prioritizeThreats - The main function to call to prioritize threats.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for threat prioritization
const ThreatSchema = z.object({
  id: z.string().describe('Unique identifier for the threat.'),
  name: z.string().describe('Name of the threat.'),
  description: z.string().describe('Detailed description of the threat.'),
  severity: z.enum(['low', 'medium', 'high', 'critical']).describe('Severity level of the threat.'),
  potentialImpact: z.string().describe('Potential impact of the threat if exploited.'),
  vulnerabilityReferences: z.array(z.string()).describe('List of external vulnerability references (e.g., CVE IDs).'),
});

const ThreatPrioritizationInputSchema = z.object({
  threats: z.array(ThreatSchema).describe('Array of detected threats to prioritize.'),
});
export type ThreatPrioritizationInput = z.infer<typeof ThreatPrioritizationInputSchema>;

// Define the output schema for threat prioritization
const PrioritizedThreatSchema = ThreatSchema.extend({
  priorityScore: z.number().describe('A score indicating the priority of the threat (higher is more critical).'),
  justification: z.string().describe('Explanation for the assigned priority score.'),
});

const ThreatPrioritizationOutputSchema = z.object({
  prioritizedThreats: z.array(PrioritizedThreatSchema).describe('Prioritized list of threats.'),
});
export type ThreatPrioritizationOutput = z.infer<typeof ThreatPrioritizationOutputSchema>;

// Define the tool to fetch vulnerability details from external databases
const getVulnerabilityDetails = ai.defineTool(
  {
    name: 'getVulnerabilityDetails',
    description: 'Fetches details about a vulnerability from external databases using vulnerability references like CVE IDs.',
    inputSchema: z.object({
      vulnerabilityReference: z.string().describe('The vulnerability reference ID (e.g., CVE ID).'),
    }),
    outputSchema: z.object({
      description: z.string().describe('Detailed description of the vulnerability.'),
      cvssScore: z.number().describe('CVSS score indicating the severity of the vulnerability.'),
      affectedSystems: z.string().describe('List of systems affected by the vulnerability.'),
    }),
  },
  async (input) => {
    // Placeholder implementation: Replace with actual API calls to vulnerability databases
    console.log(`Fetching vulnerability details for ${input.vulnerabilityReference}`);
    await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate network latency
    return {
      description: `Detailed description for ${input.vulnerabilityReference} (simulated).`,
      cvssScore: Math.random() * 10, // Simulate CVSS score
      affectedSystems: 'Example System (simulated)',
    };
  }
);

// Define the prompt for threat prioritization
const prioritizeThreatsPrompt = ai.definePrompt({
  name: 'prioritizeThreatsPrompt',
  input: {schema: ThreatPrioritizationInputSchema},
  output: {schema: ThreatPrioritizationOutputSchema},
  tools: [getVulnerabilityDetails],
  prompt: `You are an AI-powered threat prioritization expert. Analyze the following threats and prioritize them based on their severity, potential impact, and any available vulnerability details.

Threats:
{{#each threats}}
  - ID: {{this.id}}
    Name: {{this.name}}
    Description: {{this.description}}
    Severity: {{this.severity}}
    Potential Impact: {{this.potentialImpact}}
    Vulnerability References: {{this.vulnerabilityReferences}}
{{/each}}

For each threat, consider the following factors to determine the priority score:
- Severity level (critical, high, medium, low)
- Potential impact description
- Vulnerability details fetched using the getVulnerabilityDetails tool (if available)

Provide a priority score (1-10, 10 being the most critical) and a justification for each threat.

Output the prioritized list of threats in the specified JSON format.
`,
});

// Define the Genkit flow for threat prioritization
const prioritizeThreatsFlow = ai.defineFlow(
  {
    name: 'prioritizeThreatsFlow',
    inputSchema: ThreatPrioritizationInputSchema,
    outputSchema: ThreatPrioritizationOutputSchema,
  },
  async (input) => {
    const { output } = await prioritizeThreatsPrompt(input);
    if (!output) {
      throw new Error('The AI model did not return a valid output.');
    }
    return output;
  }
);

/**
 * Prioritizes a list of detected threats using AI.
 * @param input - The input containing the list of threats to prioritize.
 * @returns A promise that resolves to the prioritized list of threats.
 */
export async function prioritizeThreats(input: ThreatPrioritizationInput): Promise<ThreatPrioritizationOutput> {
  return prioritizeThreatsFlow(input);
}
