// 关于Object.assign()
/*
* Object.assign(): 只能拷贝目标对象的属性，但是无法拷贝目标对象的get和set方法
* 解决方法： 结合Object.getOwnPropertyDescriptors()
* 涉及api的MDN地址:
*                   Object.defineProperties():https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
*                   Object.getOwnPropertyDescriptors():https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
*/

let obj = {
    id: 1,
    name: 'test',
    get gender() {
        console.log('gender')
    }
}
Object.assign(obj);

/*输出结果为：
{
    gender: undefined,
    id: 1,
    name: 'test'
}
*/

let obj = {
    id: 1,
    name: 'test',
    get gender() {
        console.log('gender')
    }
}
let obj1 = {}
Object.defineProperties(obj1, Object.getOwnPropertyDescriptors(obj))
Object.getOwnPropertyDescriptors(obj1);

/*输出结果为：
{
    gender: {
        configurable: true,
            enumerable: true,
            get: f gender(),
            set: undefined
    },
    id: {
        configurable: true,
            enumerable: true,
            value: 1,
            writable: true
    },
    name: {
        configurable: true,
            enumerable: true,
            value: 'test',
            writable: true
    }
}
*/