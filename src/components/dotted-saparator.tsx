import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
  className?: string;
  color?: string;
  height?: string; // thickness for horizontal, width for vertical
  dotSize?: string;
  gapSize?: string;
  direction?: "horizontal" | "vertical";
}

export const DottedSaparator = ({
  className,
  color = "#d4d4d8",
  height = "2px",
  dotSize = "2px",
  gapSize = "6px",
  direction = "horizontal",
}: DottedSeparatorProps) => {
  const isHorizontal = direction === "horizontal";

  // Extract numbers for background-size calc
  const dotPx = parseInt(dotSize, 10);
  const gapPx = parseInt(gapSize, 10);

  return (
    <div
      className={cn(
        isHorizontal
          ? "w-full flex items-center"
          : "h-full flex flex-col items-center",
        className
      )}
    >
      <div
        className={isHorizontal ? "flex-grow" : "flex-grow-0"}
        style={{
          width: isHorizontal ? "100%" : height,
          height: isHorizontal ? height : "100%",
          backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 26%)`,
          backgroundSize: isHorizontal
            ? `${dotPx + gapPx}px ${height}`
            : `${height} ${dotPx + gapPx}px`,
          backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};
