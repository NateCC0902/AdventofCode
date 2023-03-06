import * as fs from 'fs'
const file = fs.readFileSync('day2.txt', 'utf8')

const lines = file.split('\n')
console.log(lines[0])

let s = lines[0].split('')
console.log(s)

function q1(){
    let res = 0
    for(let elem of lines){
        let spl = elem.split('')
        res += checkVal(spl[0],spl[2])
    }
    return res
}


function q2(){
    let res = 0
    for(let elem of lines){
        let spl = elem.split('')
        res += checkVal2(spl[0],spl[2])
    }
    return res
}



function checkVal(a:string, b:string):number{
    let res = 0;
    if(a == 'A'){
        if(b == 'X'){
            res += 1;
            res += 3;
        }else if(b == 'Y'){
            res += 2;
            res += 6;
        }else if(b == 'Z'){
            res += 3;
            res += 0;
        }
    }

     if(a == 'B'){
        if(b == 'X'){
            res += 1;
            res += 0;
        }else if(b == 'Y'){
            res += 2;
            res += 3;
        }else if(b == 'Z'){
            res += 3;
            res += 6;
        }
    }

    if(a == 'C'){
        if(b == 'X'){
            res += 1;
            res += 6;
        }else if(b == 'Y'){
            res += 2;
            res += 0;
        }else if(b == 'Z'){
            res += 3;
            res += 3;
        }
    }

    

    return res;
}

function checkVal2(a:string, b:string):number{
    let res = 0;
    if(a == 'A'){
        if(b == 'X'){
            res += 3;
            res += 0;
        }else if(b == 'Y'){
            res += 1;
            res += 3;
        }else if(b == 'Z'){
            res += 2;
            res += 6;
        }
    }

     if(a == 'B'){
        if(b == 'X'){
            res += 1;
            res += 0;
        }else if(b == 'Y'){
            res += 2;
            res += 3;
        }else if(b == 'Z'){
            res += 3;
            res += 6;
        }
    }
    //Scissors
    if(a == 'C'){
        if(b == 'X'){
            res += 2;
            res += 0;
        }else if(b == 'Y'){
            res += 3;
            res += 3;
        }else if(b == 'Z'){
            res += 1;
            res += 6;
        }
    }

    

    return res;
}

console.log("q1: "+q1())
console.log("q2: "+q2())
