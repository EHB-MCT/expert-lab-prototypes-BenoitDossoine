<script>
  import anime from 'animejs/lib/anime.es.js'
    export default {
        props:{shapeColor:String,shape:String},
        methods:{
            bounce(){
                anime(
                    {
                        targets:'.bouncing',
                        translateY: -50,
                        duration: 300,
                        direction: 'alternate',
                        loop: true,
                        easing: 'easeInCubic',
                        scaleX: {
                            value: 1.05,
                            duration: 100,
                            delay: 268
                        }
                    }
                );
                anime(
                    {
                        targets:'.happyText',
                        opacity: [0,1],

                    }
                )
            }
        },
        mounted(){
            let timeline = anime.timeline();
            timeline.add(
                {
                    targets:'.bouncing',
                    opacity: [0,1],
                    duration: 2000,
                }
            )
            .add(
                {
                    targets:'.letter',
                    translateY:[-100,0],
                    opacity: [0,1],
                    duration: 500,
                    easing: "easeOutExpo",
                    delay:(el,i)=>100*i,
                },'-=1000')
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
    <div class="container homepageContainer">
        <div class="squareContainer" :style="cssProps">
            <div class="bouncing" :class="shape" @mouseover.once="bounce"></div>
        </div>
        <div class="textContainer">
            <p class="text" id="introText">
            <span class="letter">T</span>
            <span class="letter">h</span>
            <span class="letter">i</span>
            <span class="letter">s </span> 
            <span class="letter">&nbsp;</span>
            <span class="letter">i</span>
            <span class="letter">s </span> 
            <span class="letter">&nbsp;</span>
            <p v-if="shape=='square'">
                <span class="letter">S</span>
                <span class="letter">q</span>
                <span class="letter">u</span>
                <span class="letter">a</span>
                <span class="letter">r</span>
                <span class="letter">e</span>
                <span class="letter">.</span>
            </p>
            <p v-else-if="shape=='circle'">
                <span class="letter">C</span>
                <span class="letter">i</span>
                <span class="letter">r</span>
                <span class="letter">c</span>
                <span class="letter">l</span>
                <span class="letter">e</span>
                <span class="letter">.</span>
            </p>
            <p v-else-if="shape=='rectangle'">
                <span class="letter">R</span>
                <span class="letter">e</span>
                <span class="letter">c</span>
                <span class="letter">t</span>
                <span class="letter">a</span>
                <span class="letter">n</span>
                <span class="letter">g</span>
                <span class="letter">l</span>
                <span class="letter">e</span>
                <span class="letter">.</span>
            </p>
        </p>
        <p class="happyText">
            <span v-if="shape=='square'">Square</span>
            <span v-if="shape=='circle'">Circle</span>
            <span v-if="shape=='rectangle'">Rectangle</span>
            is happy!</p>
        </div>
        
    </div>
</template>

<style scoped>
    .square{
        opacity: 0;
        background-color: var(--shapeColor)
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

    #introText>p{
        display: inline-block;
        margin: 0;
    }

    .happyText{
        opacity: 0;
    }

    .letter{
        display: inline-block;
    }


</style>