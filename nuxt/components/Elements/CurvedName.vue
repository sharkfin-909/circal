<template>
    
    <div class= "flex gap-1">
        <span :style = "`transform: translate(0,${translateY}px)rotate(${leftRotate}deg)`">{{chars[0]}}</span>
        <span >{{chars[1]}}</span>
        <span :style = "`transform: translate(0,${translateY}px)rotate(${rightRotate}deg)`">{{chars[2]}}</span>

    </div>
</template>

<script setup>
   const props =  defineProps({
        month: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    })

    const chars = props.month.split("")
    let leftRotate,rightRotate,translateY
    if (props.index > 3 && props.index < 9){
        leftRotate = 10;
        rightRotate = -10;
        translateY = -1;
    } else {
        leftRotate = -10;
        rightRotate = 10
        translateY = 1 
    }
</script>
<style scoped>
span {
    display: inline-block;
    transform-origin: center;
}
</style>