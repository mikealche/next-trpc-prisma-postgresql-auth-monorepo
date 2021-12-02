import { Context, protectedRoute } from "../Context";
import * as trpc from "@trpc/server";
import * as Yup from "yup";
import db from "../db";

const TodosController = trpc.router<Context>().merge(
  "",
  protectedRoute
    .query("own", {
      resolve: async ({ ctx }) => {
        const todos = db.todo.findMany({
          where: {
            userId: ctx.user?.id!,
          },
        });
        return todos;
      },
    })
    .mutation("complete", {
      input: Yup.object({
        todoId: Yup.number(),
      }),
      resolve: async ({ ctx, input }) => {
        return await db.todo.update({
          where: {
            id: input.todoId,
          },
          data: {
            status: "FINISHED",
          },
        });
      },
    })
    .mutation("create", {
      input: Yup.object({
        text: Yup.string().required(),
      }),
      resolve: async ({ ctx, input }) => {
        return await db.todo.create({
          data: {
            status: "PENDING",
            text: input.text,
            userId: ctx.user!.id,
          },
        });
      },
    })
    .mutation("delete", {
      input: Yup.object({
        todoId: Yup.number().required(),
      }),
      resolve: async ({ ctx, input }) => {
        await db.todo.delete({
          where: {
            id: input.todoId,
          },
        });
      },
    })
);

export default TodosController;
