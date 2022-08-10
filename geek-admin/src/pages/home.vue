<!--
 * @Descripttion: 
 * @Date: 2022-08-10 10:45:59
-->
<template>
    <div>首页</div>
    <TodoList />
    <Core />
</template>

<script setup>
import TodoList from '../components/Todolist.vue'
import Core from '../components/core.vue'
import { reactive, computed, watchEffect } from 'vue'

let obj = reactive({
    count: 1,
})
let double = computed(() => obj.count * 2)
obj.count = 2

watchEffect(() => {
    console.log('数据被修改了', obj.count, double.value) //数据被修改了 2 4
})
</script>
