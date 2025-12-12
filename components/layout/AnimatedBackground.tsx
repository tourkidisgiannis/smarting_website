import Image from "next/image";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 opacity-70 pointer-events-none">
      <Image
        src="/animated-bg.svg"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
        priority={false}
        quality={100}
      />
    </div>
  );
}
