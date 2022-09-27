<script>
    export default{
        props: {
            message: String
        },
        emits: ['response'],
        created(){
            this.$emit('response', 'hello from child!');
        }
    }
    
</script>
<template>
    <h1>{{this.message}}</h1>
    <slot>This is fallback content</slot>
</template>