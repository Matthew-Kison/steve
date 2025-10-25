import { Link } from "@tanstack/react-router";
import { ThemeToggleButton } from "@features/theme-toggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-[rgb(18,19,20)] shadow-sm dark:border-b dark:border-[rgb(38,39,40)] z-50">
      <nav className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Steve
          </Link>

          {/* Navigation Menu & Theme Toggle */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
              activeProps={{
                className: "text-indigo-600 dark:text-indigo-400 font-semibold",
              }}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
              activeProps={{
                className: "text-indigo-600 dark:text-indigo-400 font-semibold",
              }}
            >
              Blog
            </Link>

            {/* Theme Toggle Button */}
            <ThemeToggleButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
