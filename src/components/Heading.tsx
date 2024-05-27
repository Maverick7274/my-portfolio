import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight",
        size === "xl" && "sm:text-7xl md:text-9xl text-3xl",
        size === "lg" && "sm:text-6xl md:text-8xl text-2xl",
        size === "md" && "sm:text-5xl md:text-6xl text-xl",
        size === "sm" && "sm:text-3xl md:text-4xl text-md",
        className,
      )}
    >
      {children}
    </Comp>
  );
}