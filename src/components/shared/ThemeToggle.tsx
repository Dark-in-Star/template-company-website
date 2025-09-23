
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

  const onThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light")
  }

  // Avoid rendering until mounted on client
  if (!isMounted) {
    return <div className="theme-switch-placeholder" />;
  }

  return (
    <div className="flex items-center justify-center">
        <input 
            id="theme-toggle-input" 
            type="checkbox" 
            className="theme-toggle-input"
            checked={theme === 'dark'}
            onChange={onThemeChange}
        />
        <label htmlFor="theme-toggle-input" className={cn("theme-switch", theme === 'dark' && 'is-dark')}>
            <div id="circle"></div>
            <div id="contentwrapper">
                <div id="stars">
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </div>
                <div id="shtngstarwrapper">
                    <div id="shootingstar"></div>
                </div>
                <div className="cloud">
                    <div className="cloudpart"></div>
                    <div className="cloudpart"></div>
                    <div className="cloudpart"></div>
                </div>
                <div className="cloud">
                    <div className="cloudpart"></div>
                    <div className="cloudpart"></div>
                </div>
                <div className="cloud">
                    <div className="cloudpart"></div>
                    <div className="cloudpart"></div>
                    <div className="cloudpart"></div>
                </div>
            </div>
        </label>
    </div>
  )
}
