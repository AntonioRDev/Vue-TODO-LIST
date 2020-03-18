<template>
  <div class="list-container">
    <div class="day-container" v-for="(todo, index) in orderedTodos" v-bind:key="index">
      <div class="d-flex justify-content-center day">Dia {{index}}</div>
      <div class="item" v-for="td in todo" v-bind:key="td.id">
        <ListItem v-bind:todo="td" />
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem";

export default {
  props: ["orderedTodos"],
  components: {
    ListItem
  }
};
</script>

<style scoped>
.list-container {
  margin-right: 15rem;
  margin-left: 15rem;
}

.day {
  font-weight: bold;
  font-size: 20px;
  color: white;
  background-color: rgb(113, 89, 193);
  padding-bottom: 1rem;
  padding-top: 1rem;
  border-radius: 10px 10px 0 0;
  margin-right: 5px;
}

.day-container {
  margin-bottom: 2rem;
}

.item {
  margin-right: 5px;
  margin-bottom: 5px;
  min-width: 329px;
}
</style>