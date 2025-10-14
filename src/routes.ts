import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("grimwild", "./books/core/About.tsx"),
  route("grimwild/chapter-1", "./books/core/Chapter01.tsx"),
  route("grimwild/chapter-2", "./books/core/Chapter02.tsx"),
  route("grimwild/chapter-3", "./books/core/Chapter03.tsx"),
  route("grimwild/chapter-4", "./books/core/Chapter04.tsx"),
  route("grimwild/chapter-5", "./books/core/Chapter05.tsx"),
  route("grimwild/chapter-7", "./books/core/Chapter07.tsx")
] satisfies RouteConfig;
