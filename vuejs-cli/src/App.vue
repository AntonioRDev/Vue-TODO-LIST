<template>
  <div class="p-5">
    <div class="d-flex justify-content-center align-items-center mt-3 mb-3">
      <img class="mr-3" src="./assets/todo.svg" alt="Icone Todo" height="28" />
      <h2>Todo List</h2>
    </div>

    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo";

export default {
  name: "App",
  components: {
    Todo
  }
};
</script>

<style scoped>
h2 {
  margin: 0;
}
</style>
