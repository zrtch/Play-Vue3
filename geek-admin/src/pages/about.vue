<template>
    <div>其他</div>
</template>

<script>
// --- Vue2
// let getDouble = (n) => n * 2
// let obj = {}
// let count = 1
// let double = getDouble(obj.count)
// Object.defineProperty(obj, 'count', {
//     get() {
//         return count
//     },
//     set(val) {
//         count = val
//         double = getDouble(val)
//     },
// })
// console.log(double) // 2
// obj.count = 2
// console.log(double) // 4

//---Vue3

let getDouble = (n) => n * 2
let obj = {
    count: 1,
}
let double = getDouble(obj.count)
let proxy = new Proxy(obj, {
    get: function (target, prop) {
        return target[prop]
    },
    set: function (target, prop, value) {
        target[prop] = value
        if (prop == 'count') {
            double = getDouble(value)
        }
    },
    deleteProperty(target, prop) {
        delete target[prop]
        if (prop == 'count') {
            double = NaN
        }
    },
})
console.log(obj.count, double) // 1 2
obj.count = 6
console.log(obj.count, double) // 5 2
delete obj.count
console.log(obj.count, double) // undefined 2
</script>
