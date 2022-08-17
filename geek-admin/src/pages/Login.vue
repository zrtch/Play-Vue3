<!--
 * @Descripttion: 
 * @Date: 2022-08-17 10:24:23
-->
<template>
    <div class="login">
        <el-input v-model="input" placeholder="Please input" />
        <el-button @click="submit">提交</el-button>
        <el-button @click="remove">删除</el-button>
    </div>
    <div ref="chartRef" class="chart"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, onUnmounted } from 'vue'
const input = ref('')
let chartRef = ref()
let myChart
onUnmounted(() => {
    myChart.dispose()
    myChart = null
})
onMounted(() => {
    myChart = echarts.init(chartRef.value)
    const option = {
        tooltip: {
            trigger: 'item',
        },
        series: [
            {
                name: 'Vue',
                type: 'pie',
                radius: '70%',
                data: [
                    {
                        value: 4123,
                        name: 'vue1',
                    },
                    {
                        value: 4123,
                        name: 'vue2',
                    },
                    {
                        value: 4123,
                        name: 'vue3',
                    },
                ],
            },
        ],
    }
    myChart.setOption(option)
})
function submit() {
    localStorage.setItem('token', input.value)
}
function remove() {
    localStorage.removeItem('token')
}
</script>

<style scoped>
.login {
    width: 300px;
}
.chart {
    height: 400px;
    width: 400px;
}
</style>
