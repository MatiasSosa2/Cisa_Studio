"use client";

type Props = {
  className?: string;
  fill?: string;
};

// Spotlight minimal inspirado en Aceternity UI: luz cenital suave
export function Spotlight({ className = "", fill = "white" }: Props) {
  return (
    <div
      className={[
        "pointer-events-none absolute",
        "h-[40rem] w-[40rem]",
        "opacity-60 blur-3xl",
        className,
      ].join(" ")}
      style={{
        backgroundImage: `radial-gradient(closest-side, ${fill} 0%, transparent 60%)`,
      }}
      aria-hidden
    />
  );
}
