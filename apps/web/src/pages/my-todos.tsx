import { useQueryClient } from "react-query";

import { trpc } from "../api/APIProvider";
import AddTodoForm from "../components/AddTodoForm";
import { useAuth } from "../contexts/auth";
import { useErrorNotificationToast } from "../hooks/useErrorNotificationToast";
import useRequiresAuth from "../hooks/useRequiresAuth";
import MainLayout, { Card } from "../layouts/MainLayout";

import type { NextPage } from "next";
const Home: NextPage = () => {
  const { user, isAuthenticated } = useAuth();
  const { data: ownTodos, refetch } = trpc.useQuery(["todos/own"], {
    enabled: isAuthenticated,
  });

  useRequiresAuth();

  const queryClient = useQueryClient();
  const completeTodoMutation = trpc.useMutation("todos/complete", {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos/own"], { exact: false });
    },
  });
  useErrorNotificationToast(completeTodoMutation.error?.message);

  const deleteTodoMutation = trpc.useMutation("todos/delete", {
    onSuccess: () => {
      queryClient.invalidateQueries(["todos/own"], { exact: false });
    },
  });
  useErrorNotificationToast(deleteTodoMutation.error?.message);

  return (
    <MainLayout>
      <Card>
        <>
          <h1 className="font-black text-3xl mb-10">My Todos</h1>
          <div className="max-w-xl">
            {ownTodos?.map((todo) => (
              <div className="flex justify-between mb-5">
                <p
                  key={todo.id}
                  className={
                    todo.status === "FINISHED"
                      ? "line-through text-green-400"
                      : ""
                  }
                >
                  {todo.text}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      completeTodoMutation.mutateAsync({ todoId: todo.id })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() =>
                      deleteTodoMutation.mutateAsync({ todoId: todo.id })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-sm">
            <AddTodoForm />
          </div>
        </>
      </Card>
    </MainLayout>
  );
};

export default Home;
