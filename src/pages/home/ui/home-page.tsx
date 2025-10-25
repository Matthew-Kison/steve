import { Link } from "@tanstack/react-router";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-[rgb(8,9,10)] dark:to-[rgb(18,19,20)]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">Hi, I'm Steve</h1>
            <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">개발자 / 블로거</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                GitHub
              </a>
              <Link
                to="/blog"
                className="px-6 py-3 bg-white dark:bg-[rgb(38,39,40)] text-gray-900 dark:text-white rounded-lg border-2 border-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[rgb(48,49,50)] transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white dark:bg-[rgb(18,19,20)] rounded-2xl shadow-xl dark:shadow-none dark:border dark:border-[rgb(38,39,40)] p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              안녕하세요! 저는 웹 개발을 사랑하는 개발자입니다.
              <br />
              React, TypeScript를 주로 사용하며, 사용자 경험을 중시하는 개발을 추구합니다.
            </p>
          </div>

          {/* Skills Section */}
          <div className="bg-white dark:bg-[rgb(18,19,20)] rounded-2xl shadow-xl dark:shadow-none dark:border dark:border-[rgb(38,39,40)] p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React", "TypeScript", "Node.js", "Tailwind CSS"].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 dark:bg-[rgb(38,39,40)] rounded-lg px-4 py-3 text-center font-medium text-gray-700 dark:text-gray-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
