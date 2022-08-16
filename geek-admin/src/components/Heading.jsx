/*
 * @Descripttion: 手写h函数
 * @Date: 2022-08-16 09:24:45
 */
import { defineComponent, h }from 'vue'

export default defineComponent({
    props:{
        level:{
            type:Number,
            required:true
        }
    },
    setup(props,{slots}){
        //手写h函数
        // return () => h (
        //     'h' + props.level, //标签名
        //     {}, // prop或attribute
        //     slots.default() //子节点
        // )
        //jsx
        const tag = 'h' + props.level
        return () => <tag>{slots.default()}</tag>
    }
})