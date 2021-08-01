import { useQueryClient, useMutation } from "react-query";
import { addTodo } from "../Api";

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation((todoDescription: string) => addTodo(todoDescription), {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
};