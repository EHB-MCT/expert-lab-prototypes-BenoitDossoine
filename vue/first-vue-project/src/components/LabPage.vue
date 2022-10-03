<script>
import anime from 'animejs';

    export default{
        props:{shapeColor:String,shape:String},
        data(){
            return{
                currentColor: this.shapeColor,
                sizeValue: 100,
            }
        },
        methods:{
            changeSize(){
                anime({
                    targets:['.labShape'],
                    height: [this.sizeValue],
                    width: [this.sizeValue]
                })
            },

            changeColor(){
                anime({
                    targets:['.labShape'],
                    backgroundColor: [this.currentColor],
                    easing: 'easeInOutCubic',  
                })
            
            }
        },
        computed:{
            cssProps(){
                return{
                    '--initialColor':this.shapeColor
                }
            }
        }
    }
</script>

<template>
    <div class="labContainer">
        <div class="labControls">
            <div class="control">
                <input type="range" min="0" max="250" v-model="sizeValue" @change="changeSize">
                <p class="text">{{sizeValue}}</p>
            </div>
            <div class="control">
                <input type="color" v-model="currentColor" @change="changeColor" >
                <p class="text">{{currentColor}}</p>
            </div>
        </div>
        <div class="labShape" :class="shape" :style="cssProps"></div>
    </div>
</template>

<style>
    .labContainer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 75px;
        height: 100vh;
    }

    .labControls{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10vw;
    }

    .control{
        text-align: center;
    }

    .labShape{
        background-color: var(--initialColor);
    }
        
    .rectangle{
        width: 200px;
    }
    
    .circle{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
</style>

