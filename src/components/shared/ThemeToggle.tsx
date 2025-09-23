
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const onThemeChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light")
  }

  // Avoid rendering until mounted on client
  if (!isMounted) {
    // Render a placeholder to avoid layout shift
    return <div className="w-[74px] h-10" />
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-5 w-5" />
      <Switch
        id="theme-switch"
        checked={theme === 'dark'}
        onCheckedChange={onThemeChange}
        aria-label="Theme toggle"
      />
      <Moon className="h-5 w-5" />
    </div>
  )
}
