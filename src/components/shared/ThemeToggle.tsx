
"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    // Render a placeholder to avoid layout shift and hydration mismatch
    return <div className="theme-toggle-placeholder" />
  }

  const isDark = theme === "dark"

  const onThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light")
  }

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="theme-switch-toggle" className={cn("theme-switch", isDark && "dark")}>
        <input
          id="theme-switch-toggle"
          type="checkbox"
          checked={isDark}
          onChange={onThemeChange}
        />
        <div className="sun-moon">
          <div className="dots"></div>
        </div>
        <div className="background">
          <div className="stars"></div>
          <div className="stars2"></div>
        </div>
      </label>
    </div>
  )
}
