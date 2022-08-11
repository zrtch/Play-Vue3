<!--
 * @Descripttion: 
 * @Date: 2022-08-10 10:25:28
-->
<template>
    <div class="container">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/rate">评分</router-link>
        <router-link to="/transition">动画</router-link>
    </div>
    <router-view> </router-view>
</template>

<script setup></script>

<style>
.container {
    width: 200px;
    display: flex;
    justify-content: space-between;
}
</style>
