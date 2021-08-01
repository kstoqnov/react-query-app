import { useMutation, useQueryClient } from "react-query";
import { removeTodo } from "../Api";

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((index: number) => removeTodo(index), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};