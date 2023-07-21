<template>
  <div class="container">
    <AddToDo />
    <FilterTodo />
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/ToDo.vue";
import AddToDo from "./components/AddToDo.vue";
import FilterTodo from "./components/FilterTodo.vue";

export default {
  name: "App",
  components: {
    Todo,
    AddToDo,
    FilterTodo,
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
