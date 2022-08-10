<!--
 * @Descripttion: 
 * @Date: 2022-08-10 17:02:37
-->
<template>
    <p @click="toggle">点击我</p>
</template>

<script setup>
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, enter, exit, toggle } = useFullscreen()
</script>

<style></style>
