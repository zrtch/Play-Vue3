<template>
    <h2>课程得分：{{ score }}</h2>
    <Rate v-model="score">课程评分:</Rate>
    <Rate v-model="score" theme="green">课程评分:</Rate>

    <Heading :level="3">HELLO WORLD</Heading>
    <Todo></Todo>

    
</template>

<script setup>
import { ref } from 'vue'
import Rate from '../components/rate.vue'
import Heading from '../components/Heading.jsx'
import Todo from '../components/Todo.jsx'
const score = ref(2)
</script>
