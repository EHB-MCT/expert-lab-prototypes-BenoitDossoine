<script>
import { RouterLink, RouterView } from "vue-router";
let id = 0;
  export default{
    data(){
      return {
        newTodo:'',
        todos:[
          {id:id++,text:'Learn Vue'},
          {id:id++,text:'Learn anime.js'},
        ]
      }
    },
    methods: {
      addNewTodo(){
        this.todos.push({id:id++, text:this.newTodo});
        this.newTodo = '';
      },
      removeTodo(todo){
        this.todos = this.todos.filter((t)=>t !==todo)
      }
    }
  }
</script>

<template>
  <form @submit.prevent="addNewTodo">
    <input type="text" v-model="newTodo">
    <button>Add task</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{todo.text}}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

<style>
   
</style>
