"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

import { ChevronDownIcon } from "@/components/shared/icons/icons";
import { cn } from "@/lib/ui/cn";

type DropdownAlign = "start" | "end";

type DropdownMenuProps = {
  triggerLabel: string;
  triggerContent: (open: boolean) => ReactNode;
  triggerClassName?: string;
  showChevron?: boolean;
  menuLabel: string;
  menuClassName?: string;
  align?: DropdownAlign;
  children: (close: () => void) => ReactNode;
};

export function DropdownMenu({
  triggerLabel,
  triggerContent,
  triggerClassName,
  showChevron = true,
  menuLabel,
  menuClassName,
  align = "end",
  children,
}: Readonly<DropdownMenuProps>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef: RefObject<HTMLButtonElement | null> =
    useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={triggerLabel}
        className={cn(
          "inline-flex h-11 items-center gap-2 rounded-md border border-border-default bg-surface px-2.5 text-sm font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-foreground focus-visible:border-border-strong",
          triggerClassName,
        )}
      >
        {triggerContent(open)}
        {showChevron ? (
          <ChevronDownIcon
            className={cn(
              "h-3.5 w-3.5 text-text-muted transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        ) : null}
      </button>

      {open ? (
        <ul
          id={menuId}
          role="menu"
          aria-label={menuLabel}
          data-align={align}
          className={cn(
            "dropdown-menu absolute top-full z-50 mt-2 min-w-[12rem] overflow-hidden rounded-lg border border-border-default bg-surface p-1 shadow-[var(--shadow-md)]",
            align === "end" ? "right-0" : "left-0",
            menuClassName,
          )}
        >
          {children(close)}
        </ul>
      ) : null}
    </div>
  );
}

type DropdownItemProps = {
  active?: boolean;
  onSelect?: () => void;
  children: ReactNode;
  className?: string;
  href?: string;
};

export function DropdownItem({
  active = false,
  onSelect,
  children,
  className,
}: Readonly<DropdownItemProps>) {
  return (
    <li role="none">
      <button
        type="button"
        role="menuitem"
        onClick={onSelect}
        aria-current={active ? "true" : undefined}
        className={cn(
          "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors text-left",
          active
            ? "bg-surface-elevated text-foreground"
            : "text-text-secondary hover:bg-surface-elevated hover:text-foreground",
          className,
        )}
      >
        {children}
      </button>
    </li>
  );
}
