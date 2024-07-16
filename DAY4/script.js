for(let i=1; i<=10;i++){
    console.log(i)
}

for(let i=1; i<=10; i++){
    console.log("5" ,"X", i,"=",i*5)
}


let sum=0;
let i=1;
while (i<=10) {
    sum+=i;
    i++;
}

console.log(sum)


let num=1;
while (num<=10) {
    console.log(num);
    num++;
    
}

for (let i = 1; i <= 5; i++) {
    let row = ''; 
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}

for(let number = 1; number <= 10; number++) {
    if(number===5) continue;
    console.log(number)
}

for(let num=1;num<=10;num++){
    if(num==7){
        break;
    }
    console.log(num)
}