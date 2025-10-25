import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@pages/home";

// "/" 경로를 HomePage 컴포넌트에 연결
export const Route = createFileRoute("/")({
  component: HomePage,
});
