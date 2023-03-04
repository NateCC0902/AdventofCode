import * as fs from 'fs'
const file = fs.readFileSync('day1.txt', 'utf8')

const lines = file.split('\n')
console.log(lines)

function q1(){
    let biggest = 0;
    let sum = 0;
    for (let ind in lines) {
        let num = lines[ind]
        if(num != ''){
            sum += Number(num);
        }else{
            sum = 0
        }
        if(sum > biggest){
            biggest = sum
        }
    }
    return biggest;
}

function q2(){
    let arr:number[] = [0,0,0]
    
    let sum = 0;

    for(let ind in lines){
        let num = lines[ind]
        if(num!= ''){
            sum += Number(num)
        }else{
            h(sum,arr)
            sum = 0
        }


    }
    

    return arr
}

function h(sum:number, arr:number[]){
        for(let k in arr){
            let x = arr[k]
            if(x < sum){
                arr[k] = sum; 
                arr.sort((n1,n2) => n1-n2);
                break;
            }
        }
}

console.log("the biggest is : "+q1())
let arr = q2()
console.log("the three biggest is : "+q2())
console.log(arr[0]+arr[1]+arr[2])
