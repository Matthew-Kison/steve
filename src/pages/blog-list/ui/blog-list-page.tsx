import { Link } from "@tanstack/react-router";

export function BlogListPage() {
  // 임시 데이터
  const posts = [
    {
      id: 1,
      title: "TanStack Router 시작하기",
      excerpt: "타입 안전한 라우팅을 제공하는 TanStack Router에 대해 알아봅니다.",
      date: "2024-10-23",
    },
    {
      id: 2,
      title: "FSD 아키텍처 적용기",
      date: "2024-10-20",
      excerpt: "Feature-Sliced Design을 실제 프로젝트에 적용한 경험을 공유합니다.",
    },
    {
      id: 3,
      title: "React 19의 새로운 기능",
      excerpt: "React 19에서 추가된 새로운 기능들을 살펴봅니다.",
      date: "2024-10-15",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[rgb(8,9,10)]">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">개발 관련 글과 경험을 공유합니다.</p>
          </div>

          {/* Blog Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-[rgb(18,19,20)] rounded-xl shadow-md dark:shadow-none dark:border dark:border-[rgb(38,39,40)] p-8 hover:shadow-xl dark:hover:border-gray-700 transition-all cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-sm text-gray-500 dark:text-gray-500">{post.date}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{post.excerpt}</p>
                <div className="mt-4">
                  <span className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300">읽기 →</span>
                </div>
              </article>
            ))}
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              ← 홈으로
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
