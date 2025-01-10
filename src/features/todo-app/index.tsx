import Header from "@/features/todo-app/header";
import { TodoList } from "@/features/todo-app/todo-list";

export default function TodoApp() {
  return (
    <>
      <Header />
      <div className="mx-auto mt-4 max-w-2xl rounded-md border p-4">
        <h1 className="mb-4 text-2xl font-bold text-white">Create a to-do list</h1>
        <TodoList />
      </div>
    </>
  );
}
