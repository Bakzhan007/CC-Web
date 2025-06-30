import React from 'react'

const TelegramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.802 6.196l-1.49 14.012c-.111 1.036-.862 1.284-1.741.799l-4.799-3.533-2.314 2.228c-.255.255-.471.471-.964.471l.344-4.868 8.866-8.021c.389-.344-.084-.535-.604-.191L4.37 12.741l15.432-6.545c.847-.319 1.587.191 1.308 1.503z" />
  </svg>
)

export default TelegramIcon