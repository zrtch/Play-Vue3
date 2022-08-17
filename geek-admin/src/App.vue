<!--
 * @Descripttion: 
 * @Date: 2022-08-10 10:25:28
-->
<template>
    <el-container>
        <el-header>Header </el-header>
        <el-container>
            <el-aside width="200px">
                <div>
                    <router-link to="/">Home</router-link>
                </div>
                <div>
                    <router-link to="/login">Login</router-link>
                </div>
                <div>
                    <router-link to="/about">About</router-link>
                </div>
                <div>
                    <router-link to="/rate">评分</router-link>
                </div>
                <div>
                    <router-link to="/transition">动画</router-link>
                </div>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view> </router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
    <!-- <div class="container">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/rate">评分</router-link>
        <router-link to="/transition">动画</router-link>
    </div>
    <router-view> </router-view> -->
</template>

<script setup></script>

<style>
.el-header,
.el-footer {
    background: #b3c0d1;
    color: #333;
    text-align: center;
}
.el-aside {
    background: #d3dce6;
    color: #333;
}
.el-main {
    background: #e9eef3;
    color: #333;
}
body > .el-container {
    margin-bottom: 40px;
}
</style>
