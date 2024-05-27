import { cn } from "@/utilities/cn";
import { IconCircleFilled } from "@tabler/icons-react";

interface TimelinePros {
  className?: string;
  nodes: {
    title: string;
    subtitle: string;
    description: string;
    side: "left" | "right";
  }[];
}
export default function Timeline({ nodes, className }: TimelinePros) {
  return (
    <ul
      className={cn(
        "relative flex flex-col max-w-lg md:max-w-5xl mx-auto gap-y-10",
        className,
      )}
    >
      <span className="border absolute h-full md:left-1/2"></span>
      {nodes.map((node) => (
        <li
          key={node.title}
          className={cn(
            "relative md:w-1/2",
            node.side === "right"
              ? "pl-10 md:translate-x-full"
              : "pl-10 md:pl-0 pr-10",
          )}
        >
          <h3 className="text-lg">{node.title}</h3>
          <h4 className="text-sm  italic">{node.subtitle}</h4>
          <p className="mt-4 text-black/70">{node.description}</p>
          <IconCircleFilled
            className={cn(
              "absolute w-3 -translate-x-[40%] h-3 top-2",
              node.side === "right" ? "left-0" : "left-0  md:left-full ",
            )}
          />
        </li>
      ))}
    </ul>
  );
}
