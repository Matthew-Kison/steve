import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./route-tree.gen";

// 라우터 인스턴스 생성
export const router = createRouter({ routeTree });

// TypeScript를 위한 타입 선언
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
