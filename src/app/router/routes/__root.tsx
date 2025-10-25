import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";

export const Route = createRootRoute({
  component: () => (
    <div>
      {/* Header - 고정 위치 */}
      <Header />

      {/* Main Content - Header 높이만큼 padding-top (64px), 최소 100vh */}
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>

      {/* Footer - 스크롤 후 표시 */}
      <Footer />

      {/* 개발 환경에서만 보이는 라우터 디버깅 도구 */}
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </div>
  ),
});
