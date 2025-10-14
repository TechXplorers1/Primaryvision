import * as React from "react"

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 40"
    width="240"
    height="40"
    {...props}
  >
    <g fill="hsl(var(--primary))">
      <path d="M 0,0 L 40,0 L 0,40 L 0,0 Z" />
      <path d="M 10,0 L 50,0 L 10,40 L 10,0 Z" opacity="0.6" />
    </g>
    <text
      x="60"
      y="28"
      fontFamily="Inter, sans-serif"
      fontSize="24"
      fontWeight="bold"
      fill="hsl(var(--foreground))"
    >
      Primary Vision
    </text>
  </svg>
)
