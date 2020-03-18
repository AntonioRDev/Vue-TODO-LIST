<template>
  <div>
    <div class="form-todo form-group">
      <p>
        <input placeholder="Título" type="text" name="title" class="form-control" v-model="title" />
      </p>
      <p>
        <textarea
          placeholder="Descrição"
          name="description"
          class="form-control"
          v-model="description"
        ></textarea>
      </p>
      <p>
        <input
          placeholder="Pontos"
          type="number"
          name="points"
          class="form-control"
          v-model="points"
        />
      </p>
      <button v-on:click="addItem" type="submit" class="btn btn-primary">Adicionar</button>
    </div>

    <hr />

    <List v-bind:orderedTodos="orderedTodos" />
  </div>
</template>

<script>
import List from "./List";
// import _ from "lodash";
import { calculateDays } from "../util/helper";

export default {
  data() {
    return {
      title: "",
      description: "",
      poits: "",
      todos: [],
      orderedTodos: {}
    };
  },
  components: {
    List
  },
  methods: {
    addItem() {
      // Adiciona TODO
      this.todos.push({
        id: this.todos.length,
        title: this.title,
        description: this.description,
        points: Number(this.points)
      });

      this.orderedTodos = calculateDays([...this.todos]);

      this.title = "";
      this.description = "";
      this.points = "";
    }
  }
};
</script>

<style scoped>
</style>