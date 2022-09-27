<script>
  import HomePage from './components/HomePage.vue'
  import ShapePage from './components/ShapePage.vue'
  export default {
    data(){
      return{
        inMove:false,
        inMoveDelay:400,
        activeSection:0,
        offsets:[],
        shapeColor: '#ff3914',
      }
    },

    components:{
      HomePage,
      ShapePage
    },
    methods:{
      calculateSectionOffset(){
      let sections = document.getElementsByClassName('fullpage');
      let numberOfSections = sections.length;

      for(let i = 0; i<numberOfSections; i++ ){
        this.offsets.push(sections[i].offsetTop)
      }
      },
      scrollToSection(id, force = false) {
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
        if (this.activeSection < 0) this.activeSection = this.offsets.length - 1;
        this.scrollToSection(this.activeSection, true);
      },
      moveUp() {
        this.inMove = true;
        this.activeSection++;
        if (this.activeSection > this.offsets.length - 1) this.activeSection = 0;
        this.scrollToSection(this.activeSection, true);
      }
    },

    mounted(){
      this.calculateSectionOffset();
      window.addEventListener('mousewheel',(e)=>{
        let delta = e.wheelDelta;
        if(delta>100 && !this.inMove){
          this.moveUp();
        } else if(delta<-100 && !this.inMove){
          this.moveDown();
        }
        e.preventDefault();
        return false;
      },{passive:false})
    },
    destroyed(){
      window.removeEventListener('mousewheel',this.handleMouseWheel,{passive:false});
    }
  };
  
  </script>
  
  <template>
    <main>
      <section class="fullpage">
        <HomePage :shapeColor="shapeColor"/>
      </section>
      <section class="fullpage">
        <ShapePage :shapeColor="shapeColor" @response="(color)=>shapeColor=color"/>
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
        /* background-color: red; */
        /* box-shadow: 0 0 2px 2px red; */
    }

    .fullpage{
      width: 100vw;
      height: 100vh;
      max-width: 100%;
      margin: 0;
    }

  </style>