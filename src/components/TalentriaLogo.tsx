/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  theme?: 'light' | 'dark' | 'neon';
  showTagline?: boolean;
}

export default function TalentriaLogo({
  className = '',
  size = 'md',
  showText = true,
  theme = 'light',
  showTagline = true,
}: LogoProps) {
  const sizeClasses = {
    sm: { svg: 'w-9 h-9', text: 'text-xl', subtitle: 'text-[7.5px]' },
    md: { svg: 'w-11 h-11', text: 'text-2xl', subtitle: 'text-[9.5px]' },
    lg: { svg: 'w-16 h-16', text: 'text-3xl', subtitle: 'text-[12px]' },
    xl: { svg: 'w-24 h-24', text: 'text-5xl', subtitle: 'text-[16px]' },
  };

  const selectedSize = sizeClasses[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* High-Fidelity SVG of the exact Talentria Human-Ascend Arrow Logo */}
      <svg
        className={`${selectedSize.svg} shrink-0`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Head Sphere turquoise-to-blue gradient */}
          <linearGradient id="talentria-head-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00dfa2" />
            <stop offset="100%" stopColor="#0288d1" />
          </linearGradient>

          {/* Left Arch blue-to-green gradient */}
          <linearGradient id="talentria-left-grad" x1="0%" y1="100%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#3d30a2" />
            <stop offset="40%" stopColor="#0072ff" />
            <stop offset="75%" stopColor="#0dccd6" />
            <stop offset="100%" stopColor="#41e27a" />
          </linearGradient>

          {/* Right Ascending Arrow purple-violet gradient */}
          <linearGradient id="talentria-right-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00dfa2" />
            <stop offset="25%" stopColor="#0072ff" />
            <stop offset="65%" stopColor="#7b2cbf" />
            <stop offset="100%" stopColor="#b800ca" />
          </linearGradient>
        </defs>

        {/* Human Head Sphere */}
        <circle
          cx="27"
          cx-attr="head"
          cy="24"
          r="7.5"
          fill="url(#talentria-head-grad)"
        />

        {/* Human Arch Body (Left Wave) */}
        <path
          d="M 17 64 C 18 47, 21 40, 27 40 C 33 40, 36 47, 37 64 C 38 72, 42 75, 47 71 C 51 68, 55 60, 59 52"
          stroke="url(#talentria-left-grad)"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ascending Arrow Stream (Right Wave & Arrowhead) */}
        <path
          d="M 43 71 C 47 74, 52 70, 56 61 L 70 42"
          stroke="url(#talentria-right-grad)"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Precise modern polygonal arrowhead aligned with 45 degree ascent */}
        <polygon
          points="58,34 81,27 76,52 69,45"
          fill="url(#talentria-right-grad)"
        />
      </svg>

      {showText && (
        <div className="flex flex-col justify-center leading-none text-left">
          <span
            className={`${selectedSize.text} font-black tracking-wider text-slate-950 dark:text-white font-sans`}
          >
            TALENTRIA
          </span>
          {showTagline && (
            <span
              className={`${selectedSize.subtitle} font-medium text-slate-500 dark:text-slate-400 mt-0.5 tracking-tight font-sans`}
            >
              Potenciamos personas, transformamos organizaciones
            </span>
          )}
        </div>
      )}
    </div>
  );
}
