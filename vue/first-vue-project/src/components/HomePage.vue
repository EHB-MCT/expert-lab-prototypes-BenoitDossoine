<script>
  import anime from 'animejs/lib/anime.es.js'
    export default {
        methods:{
            bounce(){
                anime(
                    {
                        targets:'.square',
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
                    targets:'.square',
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
        }
    }
</script>

<template>
    <div class="container homepageContainer">
        <div class="squareContainer">
            <div class="square" @mouseover="bounce"></div>
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
            <span class="letter">s</span>
            <span class="letter">q</span>
            <span class="letter">u</span>
            <span class="letter">a</span>
            <span class="letter">r</span>
            <span class="letter">e</span>
            <span class="letter">.</span>
        </p>
        <p class="happyText">Square is happy!</p>
        </div>
        
    </div>
</template>

<style>
    .container{
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 10vw;
    }

    .square{
        width: 200px;
        height: 200px;
        background-color: red;
        opacity: 0;
        box-shadow: 0 0 2px 5px red;
    }

    .text{
        margin: 0;
    }

    .happyText{
        opacity: 0;
    }

    .letter{
        display: inline-block;
    }


</style>