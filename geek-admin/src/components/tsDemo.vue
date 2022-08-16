<!--
 * @Descripttion: 
 * @Date: 2022-08-16 14:36:11
-->
<template>
    <div>ts-demo</div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from '@vue/runtime-core';
interface 极客时间课程 {
    name: string
    price: number
}

const msg = ref('')
const course = reactive<极客时间课程>({ name: '玩转vue', price: 129 })

const msg2 = computed(() => '')
const course2 = computed<极客时间课程>(() => {
    return {
        name: '玩转犹豫',
        price: '11',
    }
})
</script>

<style></style>
