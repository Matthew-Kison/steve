import { createFileRoute } from "@tanstack/react-router";
import { BlogListPage } from "@pages/blog-list";

// "/blog" 경로를 BlogListPage 컴포넌트에 연결
export const Route = createFileRoute("/blog/")({
  component: BlogListPage,
});
