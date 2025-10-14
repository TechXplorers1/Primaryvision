import * as React from "react"

export const VisionProtectionLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 40"
    width="240"
    height="40"
    {...props}
  >
    <g>
        <path d="M 20 0 C 9 0, 0 9, 0 20 s 9 20, 20 20 s 20 -9, 20 -20 S 31 0, 20 0 Z M 20 32 C 13.4 32, 8 26.6, 8 20 s 5.4 -12, 12 -12 s 12 5.4, 12 12 S 26.6 32, 20 32 Z" fill="hsl(var(--primary))" />
        <path d="M 28.5,14 C 26,11.5, 23,10, 20,10 c -1.4,0 -2.8,0.4 -4,1 l 5.7,5.7 C 22.2,16.2, 22,15.1, 21.5,14 Z" fill="hsl(var(--primary))" opacity="0.7" />
        <path d="M 14,11.5 C 11.5,14, 10,17, 10,20 c 0,1.4, 0.4,2.8, 1,4 l 5.7,-5.7 C 16.2,17.8, 15.1,18, 14,18.5 Z" fill="hsl(var(--primary))" opacity="0.7" />
    </g>
    <text
      x="50"
      y="28"
      fontFamily="Inter, sans-serif"
      fontSize="20"
      fontWeight="bold"
      fill="hsl(var(--foreground))"
    >
      VisionProtection
    </text>
  </svg>
)
