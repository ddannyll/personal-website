import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

interface HeaderProps {
  canGoBack: boolean;
  pageTitle: string;
}
export default function Header({ canGoBack, pageTitle }: HeaderProps) {
  return (
    <div className="grid grid-cols-3 justify-between tracking-tighter font-light">
      {canGoBack && (
        <Link href={"/"} className="flex items-center gap-2">
          <IconArrowLeft size={20} strokeWidth={1}></IconArrowLeft>
          back to home
        </Link>
      )}
      <h2 className="text-center col-start-2">ddannyll</h2>
      <h2 className="text-end">{pageTitle}</h2>
    </div>
  );
}
