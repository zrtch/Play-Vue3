<!--
 * @Descripttion: 
 * @Date: 2022-08-12 15:43:00
-->
<template>
    <div @click="add">{{ count }} * 2 = {{ double }}</div>
    <button @click="asyncAdd">async add</button>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
let store = useStore()
let count = computed(() => store.state.count)
let double = computed(() => store.getters.double)
function asyncAdd() {
    store.dispatch('asyncAdd')
}

function add() {
    store.commit('add')
}
</script>

<style></style>
