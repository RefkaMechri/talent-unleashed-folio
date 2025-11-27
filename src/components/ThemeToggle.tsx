import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    // Add smooth transition effect
    document.documentElement.style.setProperty('--theme-transition', '0.5s');
    document.documentElement.classList.toggle("light", newTheme === "light");
    
    // Remove transition property after animation completes
    setTimeout(() => {
      document.documentElement.style.removeProperty('--theme-transition');
    }, 500);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden border-primary/50 hover:bg-primary/10 hover:shadow-glow transition-all duration-300 hover:scale-110"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-accent" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-primary" />
      <span className="sr-only">Toggle theme</span>
      
      {/* Ripple effect on click */}
      <span className="absolute inset-0 rounded-md bg-primary/20 scale-0 group-active:scale-100 transition-transform duration-300" />
    </Button>
  );
};
