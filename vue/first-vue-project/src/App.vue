<script>
  import HomePage from './components/HomePage.vue'
  import ShapePage from './components/ShapePage.vue'
  import ChangeShape from './components/ChangeShape.vue'
  import LabPageVue from './components/LabPage.vue';
  export default {
    data(){
      return{
        inMove:false,
        inMoveDelay:1000,
        activeSection:0,
        offsets:[],
        shapeColor: '#ff3914',
        shape: 'square'
      }
    },

    components:{
      HomePage,
      ShapePage,
      ChangeShape,
      LabPageVue
    },
    methods:{
      calculateSectionOffset(){
        let sections = document.getElementsByClassName('fullpage');
        for(let i = 0; i<sections.length; i++ ){
          this.offsets.push(sections[i].offsetTop)
        }
      },
      scrollTo(id, force = false) {
        if (this.inMove && !force) return false;
        this.activeSection = id;
        this.inMove = true;
        document.getElementsByTagName('section')[id].scrollIntoView({
            behavior: 'smooth'
        });
        setTimeout(() => {
            this.inMove = false;
        }, this.inMoveDelay);
      },
      moveDown() {
        this.inMove = true;
        this.activeSection--;
        this.scrollTo(this.activeSection, true);
      },
      moveUp() {
        this.inMove = true;
        this.activeSection++;
        this.scrollTo(this.activeSection, true);
      }
    },

    mounted(){
      this.calculateSectionOffset();
      window.addEventListener('wheel',(e)=>{
        let delta = e.wheelDelta;
        if(delta>100 && !this.inMove && this.activeSection>0){
          this.moveDown();
        } else if(delta<-100 && !this.inMove && this.activeSection<this.offsets.length-1){
          this.moveUp();
        }
        e.preventDefault();
        return false;
      },{passive:false})
    },
    destroyed(){
      window.removeEventListener('wheel');
    }
  };
  
  </script>
  
  <template>
    <main>
      <section class="fullpage">
        <HomePage :shapeColor="shapeColor" :shape="shape"/>
      </section>
      <section class="fullpage">
        <ShapePage :shapeColor="shapeColor" :shape="shape" @response="(color)=>shapeColor=color"/>
      </section>
      <section class="fullpage">
        <ChangeShape :shapeColor="shapeColor" :shape="shape" @response="(shapeChange)=>shape=shapeChange"/>
      </section>
      <section class="fullpage">
        <LabPageVue :shapeColor="shapeColor" :shape="shape"></LabPageVue>
      </section>
    </main>
  </template>

  <style>
    body{
      margin: 0;
      background-color: #121212;
      color: white;
      font-family: 'Noto Sans Mono', monospace;
    }

    ::-webkit-scrollbar {
      display: none;
    }

    .container{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0 10vw;
    }

    .text{
      font-size: 2em;
      margin:0;
    }

    .square{
        width: 200px;
        height: 200px;
    }
    
    .rectangle{
      width: 200px;
      height: 240px;
    }

    .circle{
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }

    .fullpage{
      width: 100vw;
      height: 100vh;
      max-width: 100%;
      margin: 0;
    }

  </style>