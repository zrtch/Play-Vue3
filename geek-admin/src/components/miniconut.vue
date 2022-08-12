<!--
 * @Descripttion: 
 * @Date: 2022-08-12 15:43:00
-->
<template>
    <div @click="add">
        {{ count }}
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '../store/gvuex'
let store = useStore()
console.log('🤩 ~ store', store)
let count = computed(() => store.state().count)

function add() {
    store.commit('add')
}
</script>

<style></style>
