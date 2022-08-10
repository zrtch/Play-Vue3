<!--
 * @Descripttion: 
 * @Date: 2022-08-10 11:02:38
-->
<template>
    <div>
        <h1 @click="add">{{ count }}</h1>
    </div>
    <!-- <div>{{ x }}</div>
    <div>{{ y }}</div> -->
</template>

<script setup>
import { ref } from 'vue'
import { useMouse } from '../utils/mouse'
let count = ref(1)
let color = ref('red')
let { x, y } = useMouse()
function add() {
    count.value++
    color.value = Math.random() > 0.5 ? 'red' : 'blue'
}
</script>

<style scoped>
h1 {
    color: v-bind(color);
}
</style>
