<template>
  <div class="item-container">
    <label>{{todo.title}}</label>
    <p class="description">{{todo.description}}</p>
    <p class="points">{{todo.points}} Pontos</p>
  </div>
</template>

<script>
export default {
  props: ["todo"]
};
</script>

<style scoped>
.item-container {
  border: 1px solid rgb(113, 89, 193);
  padding: 1.5rem;
}

label {
  color: #42b983;
  font-weight: bold;
  display: flex;
  justify-content: center;
}

.description {
  display: flex;
  justify-content: center;
}

.points {
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 1rem;
}
</style>