"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface SidebarLink {
  href: string
  label: string
  icon: LucideIcon
}

interface SidebarProps {
  links: SidebarLink[]
  title: string
}

export function Sidebar({ links, title }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="hidden w-60 shrink-0 border-r border-border bg-sidebar lg:block">
      <div className="flex h-full flex-col px-4 py-6">
        <h2 className="mb-6 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h2>
        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-sidebar-accent text-sidebar-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
              )}
            >
              <link.icon className="size-4" />
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
