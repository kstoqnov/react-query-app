import { useQuery } from "react-query";
import { getTodos } from "../Api";

export const useGetTodos = () => useQuery("todos", getTodos);