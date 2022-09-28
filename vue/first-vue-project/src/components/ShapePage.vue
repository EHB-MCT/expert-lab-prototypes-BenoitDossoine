<script>
    import anime from 'animejs';
    export default{
        data(){
            return{
                currentColor: '#ff3914', 
            }
        },
        props:{shapeColor:String,shape:String},
        emits: ['response'],
        methods:{
            changeColor(e){
                let targetColor = e.target.getAttribute('data-color');
                anime(
                    {
                    targets:'.squareColor',
                    rotate: '+=720',
                    duration: 2000,
                    background: [this.shapeColor,this.shapeColor,targetColor],
                    scale: [1,0,1]
                    }
                )
                this.currentColor = targetColor;
                this.$emit('response',targetColor);
            }
        },
        computed:{
            cssProps(){
                return{
                    '--shapeColor': this.shapeColor
                }
            }
        }
    }
</script>
<template>
    <div class="container">
        <div class="text">
            <span v-if="shape=='square'">Square</span>
            <span v-else-if="shape=='rectangle'">Rectangle</span>
            <span v-else-if="shape=='circle'">Circle</span>
             likes to change color!</div>
        <div class="squareContainer" :style="cssProps">
            <div class="squareColor" :class="shape"></div>
        </div>
        <div class="btnsContainer">
            <button id="blueBtn" data-color="#04d9ff" @click="changeColor">Blue</button>
            <button id="greenBtn" data-color="#39ff14" @click="changeColor">Green</button>
            <button id="redBtn" data-color="#ff3914" @click="changeColor">Red</button>
        </div>
    </div>
</template>

<style scoped>
    .container{
        flex-direction: column;
        gap: 75px 0;
    }

    .btnsContainer{
        display: flex;
        gap: 50px;
    }

    .btnsContainer button{
        background-color: transparent;
        border-style: solid;
        border-width: 2px;
        box-shadow: 0 0 2px 2px;

        padding: 0.5em 0.5em;
        min-width: 100px;

        text-transform: uppercase;
        font-family: 'Noto Sans Mono', monospace;
    }

    #greenBtn{
        color: #39ff14;
        border-color: #39ff14; 
    }

    #blueBtn{
        color: #04d9ff;
        border-color: #04d9ff;
    }

    #redBtn{
        color: #ff3914;
        border-color: #ff3914;
    }

    .square{
        background-color: var(--shapeColor);
    }

    .rectangle{
        width: 200px;
        height: 240px;
        background-color: var(--shapeColor)
    }
    
    .circle{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: var(--shapeColor)
    }
</style>