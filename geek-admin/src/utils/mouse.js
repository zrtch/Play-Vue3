/*
 * @Descripttion: 
 * @Date: 2022-08-10 11:12:47
 */
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse () {
    const x = ref(0)
    const y = ref(0)
    function update (e) {
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', update)
    })

    onUnmounted(() => {
        window.addEventListener('mousemove', update)

    })
    return { x, y }
}