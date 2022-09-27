<script>
  import HomePage from './components/HomePage.vue'
  export default {
    components:{
      HomePage
    }
  }
  </script>
  
  <template>
    <main>
      <HomePage/>
    </main>
  </template>

  <style>
    body{
      margin: 0;
      background-color: #121212;
      color: white;
      font-family: 'Noto Sans Mono', monospace;
    }

    .text{
      font-size: 2em;
    }

  </style>