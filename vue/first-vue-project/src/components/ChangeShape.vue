<script>
    import anime from 'animejs';
    export default {
        props:{shapeColor:String,shape:String},
        emits: ['response'],
        methods:{
            morphShape(targetShape){
                if(targetShape == 'circle'){
                    anime({
                        targets: ['.morphShape'],
                        borderRadius: '50%',
                        scaleY:1,
                        easing: 'easeInOutExpo',
                        elasticity:1.2
                    })
                    this.$emit('response',targetShape);
                } else if(targetShape == 'square'){
                    anime({
                        targets: ['.morphShape'],
                        borderRadius: '0%',
                        scaleY:1,
                        easing: 'easeInOutElastic',
                        elasticity: 1.2
                    })
                    this.$emit('response',targetShape);
                } else if(targetShape=='rectangle'){
                    anime({
                        targets: ['.morphShape'],
                        borderRadius: '0%',
                        scaleY: 1.5, 
                        easing: 'easeOutElastic',
                        elasticity: 1.2
                    })
                    this.$emit('response',targetShape);
                }
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
    <div class="container" :style="cssProps">
        <p class="text">
            <span v-if="shape=='square'">Square</span>
            <span v-if="shape=='rectangle'">Rectangle</span>
            <span v-if="shape=='circle'">Circle</span> 
            even likes to change shapes sometimes!
        </p>
        <div class="row">
            <div class="circleBtn shapeBtn"><button @click="morphShape('circle')"></button></div>
            <div class="morphShape"></div>
            <div class="squareBtn shapeBtn"><button @click="morphShape('square')"></button></div>
        </div>
        <div class="row">
            <div class="rectangleBtn shapeBtn"><button @click="morphShape('rectangle')"></button></div>
        </div>
    </div>
</template>

<style scoped>
    
    .container{
        display:flex;
        flex-direction: column;
        gap: 100px;
    }

    .row{
        display: flex;
        gap: 100px;
        align-items: center;
        justify-content: center;
    }

    .morphShape{
        height: 200px;
        width: 200px;
        background-color: var(--shapeColor);
    }

    .shapeBtn{
        border: solid 2px var(--shapeColor);
        box-shadow: 0 0 2px 2px var(--shapeColor);

    }

    .squareBtn{
        width: 50px;
        height: 50px;
    }

    .rectangleBtn{
        width: 75px;
        height: 50px;
    }

    .circleBtn{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    button{
        background-color: transparent;
        border: none;
        width: 100%;
        height: 100%;
    }

    
</style>