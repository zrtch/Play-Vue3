/*
 * @Descripttion: 清单应用jsx版本
 * @Date: 2022-08-16 09:40:47
 */
import { defineComponent,ref } from 'vue'

export default defineComponent({
    setup(props){
        let title = ref('')
        let todos = ref([
            {title:"吃饭",done:true},
            {title:"睡觉",done:false},
        ])
        function addTodo(){
            todos.value.push({
                title:title.value
            })
            title.value = ''
        }
        return()=><div>
            <input type="text" vModel={title.value} />
            <button onClick={addTodo}>click</button>
            <ul>
                {
                    todos.value.length ? todos.value.map(todo=>{
                        return <li>{todo.title}</li>
                    }):<li>no data</li>
                }
            </ul>
        </div>
    }
})