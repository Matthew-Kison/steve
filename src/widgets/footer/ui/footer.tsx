export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-[rgb(18,19,20)] text-white dark:border-t dark:border-[rgb(38,39,40)]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-gray-400">© {new Date().getFullYear()} Steve. All rights reserved.</div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="mailto:steve@example.com" className="text-gray-400 hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
