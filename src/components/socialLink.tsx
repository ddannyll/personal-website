import { cn } from "@/utilities/cn";
import Link, { LinkProps } from "next/link";

interface SocialLinkProps extends LinkProps {
  label: string;
  className?: string;
  children: React.ReactNode;
}
export default function SocialLink({
  className,
  label,
  children,
  ...props
}: SocialLinkProps) {
  return (
    <Link
      target="_blank"
      className={cn("flex items-center gap-2 group p-3", className)}
      {...props}
    >
      <span className="group-hover:opacity-100 opacity-0 transition translate-x-4 group-hover:translate-x-0 grow">
        {label}
      </span>
      {children}
    </Link>
  );
}
