//fake data
const todos: string[] = ["Go to the store", "Write", "Code"];

//simulate api calls with delay requests
const  wait = (timeInMS: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMS);
  });
}

export const getTodos = async () => {
  await wait(300);
  return [...todos];
}

export const addTodo = async(todoDescription: string) => {
  await wait(300);
  todos.push(todoDescription);
}

export const removeTodo = async (index: number) => {
  await wait(300);
  todos.splice(index, 1);
}