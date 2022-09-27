<script>
  import HomePage from './components/HomePage.vue'
  export default {
    data(){
      return{
        inMove:false,
        inMoveDelay:400,
        activeSection:0,
        offsets:[],
        touchStartY:0
      }
    },
    components:{
      HomePage
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
        console.log(delta);
        if(delta>100 && !this.inMove){
          this.moveUp();
          console.log("up")
        } else if(delta<-100 && !this.inMove){
          console.log("down")
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
        <HomePage/>
      </section>
      <section class="fullpage">
        <FriendPage/>
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

    .text{
      font-size: 2em;
    }

    .fullpage{
      width: 100vw;
      height: 100vh;
      max-width: 100%;
      margin: 0;
    }

  </style>