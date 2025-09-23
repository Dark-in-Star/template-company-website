
"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const onThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Avoid rendering the toggle until the theme state is mounted on the client
  if (!isMounted) {
    return null
  }

  return (
    <div className="day-night-toggle-container">
      <input 
        id="day-night-toggle" 
        type="checkbox" 
        className="day-night-toggle-input" 
        checked={theme === 'dark'}
        onChange={onThemeChange} 
      />
      <label htmlFor="day-night-toggle" className="day-night-toggle-label">
        <i className="day-night-toggle-icon"></i>
      </label>
    </div>
  )
}
