/*
 * @Descripttion: 
 * @Date: 2022-08-22 16:41:09
 */
let number: number = 12;
let str: string = 'hello';
number = '12' //类型报错
let isBoolean: boolean = true;
let sales: undefined
let timer: null = null
let me:[string,number]= ['world',123]
me[0] = 12 //类型报错

// let say: any = 'hello'

enum numList {好,很好,非常好}
console.log(numList[0]) //好
console.log(numList['非常好']) //2

let course: string | number = 'vue'
course = 1
course = 'react'

type course1 = '好' | '很好' | '非常好'
let course2: course1 = '好'
let course3: course1 = '一般' //报错

interface 极客时间{
    课程名字: string
    课程价格: number
    课程科目: string[]
    讲师头像: string | number
    readonly 课程地址: string
}
let exam: 极客时间 = {
    课程名字: 'vue',
    课程价格:1,
    课程科目: ['vue','123'],
    讲师头像: 'http://www.baidu.com',
    课程地址:'http://www.baidu.com'
}
exam.课程地址 = 'weibo.com' //报错

function add(x: number,y: number):number{
    return x + y
}
console.log(add(1,4)); //5

interface addType{
    (a:number,b:number):number
}
let add1: addType = function(x: number,y: number): number{
    return x + y
}
console.log(add1(2,4)); // 6

let w:Window = window
let ele:HTMLElement = document.createElement('div')
let addDiv:NodeList = document.querySelectorAll("div")

ele.addEventListener('click',function(e:MouseEvent){
    const args:IArguments = arguments
    w.alert(1)
    console.log(args)
},false)

//泛型
function identity0(arg: any):any {
    return arg
}
//相当于type T = arg的类型
function identity<T>(arg: T): T{
    return arg
}
identity<number>('1') //这样就会报错
identity<string>('玩转Vue') //这个T就是string,所以返回值必须是string

interface VueCourse{
    name: string,
    price: number
}
type CourseProps = keyof VueCourse
let k: CourseProps = 'name'
let k1: CourseProps = 'p'  //p会报错 改成price即可

type ExtendsType<T> = T extends boolean ? '你好': '不好'
type ExtendsType1 = ExtendsType<boolean> //type ExtendsType1='你好'
type ExtendsType2 = ExtendsType<string> //type ExtendsType1='不好'

type Course2 = '游泳' | '羽毛球'
type Course3 = {
    [k in Course2]:number //遍历Course2类型作为key
}
//上面的代码等于下面的定义
type Course3 = {
    游泳: number,
    羽毛球: number
}

function getProperty<T, K extends keyof T>(o: T, name: K): T[K]{
    return o[name]
}
const coursePrice:Course3 = {
    '游泳':11,
    '羽毛球':12
}
getProperty(coursePrice,'游泳')
getProperty(coursePrice,'不学前端') // 类型“"不学前端"”的参数不能赋给类型“Course2”的参数。

type Foo = ()=> Course3
//如果T是一个函数，并且函数返回类型是P就返回P
type ReturnType1<T> = T extends()=> infer P ? P : never
type Foo1 = ReturnType1<Foo>

interface Todo{
    title: string,
    desc: string,
    done: boolean
}
type Partial1<T> = {
    //使用K in keyofT遍历所有T的属性后，使用？标记为可选属性
    [K in keyof T]?:T[K]
}
//这样鼠标移到partTodo变量也能可以看到和Todo一样的
type partTodo = Partial1<Todo>