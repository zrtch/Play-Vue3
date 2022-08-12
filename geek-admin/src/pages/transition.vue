<template>
    <!-- transition动画 -->
    <div class="box" :style="{ width: width + 'px' }"></div>
    <button @click="add">click</button>

    <!-- animation和keyframe组合动画 -->
    <div class="box1"></div>

    <!-- 内置的transition组件来控制组件的动画，设置了name为fade -->
    <button @click="toggle">显隐</button>
    <transition name="fade">
        <h3 v-if="showTitle">看见我了</h3>
    </transition>

    <!-- 列表动画，也就是列表过渡 -->
    <button @click="hanldeAdd">添加</button>
    <ul>
        <transition-group name="list" tag="ul">
            <li v-for="item in list" :key="item.name">
                <span>{{ item.name }}</span>
            </li>
        </transition-group>
    </ul>
</template>

<script setup>
import { ref, reactive } from 'vue'
let width = ref(100)
let showTitle = ref(true)
let list = ref([{ name: '1' }, { name: '2' }])
function add() {
    width.value += 100
}
function toggle() {
    showTitle.value = !showTitle.value
}
function hanldeAdd() {
    list.value.push({
        name: '3',
    })
}
</script>

<style>
.box {
    margin: 10px;
    background: red;
    height: 100px;
    /* transition配置了三个参数，就是div的width 属性需要过渡，过渡时间是1秒，并且过渡方式是线性过渡 */
    transition: width 1s linear;
}
/* animation和keyframe组合动画 */
.box1 {
    height: 40px;
    width: 40px;
    margin-bottom: 10px;
    background: green;
    position: relative;
    /* 给标签设置 move 动画，持续时间为两秒，线性变化并且无限循环。*/
    animation: move 2s linear infinite;
}
/* 然后使用@keyframes 定制 move动画，内部定义了动画0%、50%和100%的位置，最终实现了一个方块循环移动的效果。 */
@keyframes move {
    0% {
        left: 0px;
    }
    50% {
        left: 200px;
    }
    100% {
        left: 0px;
    }
}

/* 进入和离开 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s linear;
}
/* 进入的开始和结束  */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.list-move {
    transition: transfrom 0.8s ease;
}
.list-enter-active,
.list-leave-active {
    transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(100px);
}
</style>
