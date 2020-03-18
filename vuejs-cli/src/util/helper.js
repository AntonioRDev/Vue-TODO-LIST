export const calculateDays = todos => {
  // ordena decrescente
  const orderedTodos = todos.sort((a, b) => a.points - b.points);

  const days = {};

  let counter = 0;
  while (orderedTodos.length !== 0) {
    if (days[counter + 1]) {
      for (let i = 0; i < orderedTodos.length; i++) {
        const todo = orderedTodos[i];
        const sum = sumArray(days[counter + 1]);

        if (sum <= 13 && sum + todo.points < 13) {
          days[counter + 1].push(todo);
          orderedTodos.splice(i, 1);
          break;
        } else {
          counter++;
          break;
        }
      }
    } else {
      days[counter + 1] = [];
    }
  }

  return days;
};

const sumArray = arry => {
  let sum = 0;

  for (let i = 0; i < arry.length; i++) sum = sum + arry[i].points;

  return sum;
};
