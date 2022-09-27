<script>
  import ChildComponent from './components/ChildComponent.vue'
  export default {
    components:{
      ChildComponent
    },
    data(){
      return {
        greeting:"hello there!",
        childMsg: "no child message yet!",
        msg: 'from the parent'
      }
    }
  }
  </script>
  
  <template>
    <input type="text" v-model="greeting">
    <ChildComponent :message="greeting" @response="(msg)=>childMsg=msg">{{msg}}</ChildComponent>
    <p>{{childMsg}}</p>
  </template>