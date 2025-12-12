export function CircuitBoard() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full opacity-60"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static Traces - subtle background grid feel */}
        <g className="stroke-white/30 stroke-[1.5] fill-none">
          {/* Vertical Lines */}
          <path d="M 100 0 V 1000" />
          <path d="M 300 0 V 1000" />
          <path d="M 500 0 V 1000" />
          <path d="M 700 0 V 1000" />
          <path d="M 900 0 V 1000" />

          {/* Horizontal Lines */}
          <path d="M 0 200 H 1000" />
          <path d="M 0 400 H 1000" />
          <path d="M 0 600 H 1000" />
          <path d="M 0 800 H 1000" />

           {/* Complex Tech Decoration Top Left */}
           <path d="M 50 50 H 150 L 200 100 V 250" />
           <circle cx="200" cy="250" r="4" className="fill-white/40" />

           {/* Complex Tech Decoration Bottom Right */}
           <path d="M 950 950 H 850 L 800 900 V 750" />
           <circle cx="800" cy="750" r="4" className="fill-white/40" />

           {/* Center feature around text area */}
           <path d="M 300 300 L 350 350 H 650 L 700 300" />
           <path d="M 300 700 L 350 650 H 650 L 700 700" />
        </g>

        {/* Animated Pulses */}
        <g className="stroke-[3] fill-none" style={{ filter: "url(#glow)" }}>
           {/* Pulse 1: Top Left to Center */}
           <path d="M 0 100 H 150 L 250 200 V 350" stroke="url(#trace-gradient)" className="animate-circuit-flow-1" strokeDasharray="100 1000" strokeLinecap="round" />

           {/* Pulse 2: Bottom Right to Center */}
           <path d="M 1000 900 H 850 L 750 800 V 650" stroke="url(#trace-gradient)" className="animate-circuit-flow-2" strokeDasharray="100 1000" strokeLinecap="round" />

           {/* Pulse 3: Vertical rapid */}
           <path d="M 500 0 V 1000" stroke="url(#trace-gradient)" className="animate-circuit-flow-3" strokeDasharray="200 800" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
