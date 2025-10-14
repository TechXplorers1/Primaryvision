'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, CheckCircle, RotateCcw, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const questions = [
  {
    id: 'q1',
    text: 'Do you use a password manager to store unique, complex passwords?',
    weight: 30,
  },
  {
    id: 'q2',
    text: 'Is Multi-Factor Authentication (MFA) enabled on your critical accounts (email, banking)?',
    weight: 30,
  },
  {
    id: 'q3',
    text: 'Do you regularly update your software and operating systems?',
    weight: 20,
  },
  {
    id: 'q4',
    text: 'Are you cautious about clicking links or opening attachments from unknown sources?',
    weight: 20,
  },
];

type Answers = { [key: string]: string };

export default function SecurityAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [score, setScore] = useState<number | null>(null);

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    const totalScore = questions.reduce((acc, q) => {
      if (answers[q.id] === 'yes') {
        return acc + q.weight;
      }
      return acc;
    }, 0);
    setScore(totalScore);
  };
  
  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setScore(null);
  };

  const progress = (currentStep / questions.length) * 100;
  
  const isNextDisabled = !answers[questions[currentStep]?.id];

  return (
    <section id="assessment" className="py-20 sm:py-32">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Interactive Security Assessment</h2>
          <p className="mt-4 text-lg text-muted-foreground">Answer a few questions to get your personalized security score.</p>
        </div>
        <div className="flex justify-center">
          <Card className="w-full max-w-2xl glassmorphic">
            {score === null ? (
              <>
                <CardHeader>
                  <Progress value={progress} className="mb-4 h-2" />
                  <CardTitle>Question {currentStep + 1} of {questions.length}</CardTitle>
                  <CardDescription>{questions[currentStep].text}</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup onValueChange={(value) => handleAnswer(questions[currentStep].id, value)} value={answers[questions[currentStep].id]}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no">No</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
                <CardFooter>
                  <Button onClick={nextStep} disabled={isNextDisabled} className="w-full">
                    {currentStep < questions.length - 1 ? 'Next Question' : 'Calculate Score'}
                    <motion.div
                      animate={{ translateX: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.div>
                  </Button>
                </CardFooter>
              </>
            ) : (
              <>
                <CardHeader className="items-center text-center">
                   {score > 70 ? <CheckCircle className="h-16 w-16 text-green-500 mb-4" /> : <ShieldAlert className="h-16 w-16 text-destructive mb-4" />}
                  <CardTitle className="text-2xl">Your Security Score</CardTitle>
                  <p className="text-7xl font-bold text-primary text-glow">{score}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    {score > 80 ? "Excellent! Your security posture is strong. Keep up the great work." :
                     score > 50 ? "Good, but there's room for improvement. Focus on the recommendations below." :
                     "Your security posture is at risk. We highly recommend taking action."
                    }
                  </p>
                </CardContent>
                <CardFooter>
                   <Button onClick={restart} variant="outline" className="w-full">
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Take Again
                    </Button>
                </CardFooter>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
