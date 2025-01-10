import type { Metadata } from "next";

import TodoApp from "@/features/todo-app";
import { getTitle } from "@/lib/meta";

export const metadata: Metadata = {
  title: getTitle("Home"),
};

export default function Home() {
  return <TodoApp />;
}
