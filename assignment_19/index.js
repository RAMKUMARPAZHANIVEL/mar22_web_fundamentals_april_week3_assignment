
function divby2(num){
    let a =num/2

    return a

}
/**const re = divby2(10)
 console.log(re)**/
function divarrby2(arr){
   let b=[]

    for (let i=0; i< arr.length; i++){
        const res = divby2(arr[i])

        /**console.log(res)*/

        b.push(res)
    }
       return b
   

}
const x=[11,21,31,41,51]
const y=[1,2,3,4,5]
const z=[8,7,6,5,3]

const xresult = divarrby2(x)
console.log('answer for x is -', xresult)

const yresult = divarrby2(y)
console.log('answer for y is -', yresult)

const zresult = divarrby2(z)
console.log('answer for z is -', zresult)

// const h1 = document.querySelector('h1')

// for (let i=0; i< xresult.length; i++){
//     const firstelement = xresult[i]

//     const element = document.createElement('p')



//     element.innerText = firstelement
//     console.log(element)
//     console.log(yresult)
    
    
//     h1.appendChild(element)
// }
