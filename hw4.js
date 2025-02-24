function min(){
    let a = prompt("Enter a number")
    let b = prompt("Enter another number")
    if (a>b){
        alert(b)
    }else{
        alert(a)
    }
}

function biggerThan3(){
    let a = prompt("Enter a string")

    let lenA = a.length

    if (lenA>3){
        return 1
    }
}

function fourbiggerThan3(){
    let a = biggerThan3()
    let b = biggerThan3()
    let c = biggerThan3()
    let d = biggerThan3()
    return a+b+c+d
}

function returnsA(){
    let text = prompt("Insert text")

    if (text.includes(A)){
        return text.replace("A","a")
    }else{
        return text
    }
}

function isPoseven(){
    let a = prompt("Enter a number")
    let isEven = !(a%2)
    let isPositive = a>=0
    
    if  (a==0){
        alert("Number is 0")
    }
    alert(`Number is ${isPositive? "Positive":"Negative"}`)

    alert(`Number is ${isEven? "even": "odd"}`)
}

function isSamefirstnlast(){
    let text = prompt("Enter your text")
    const newLen = text.length-1

    if (text.charAt(0) == text.charAt(newLen)){
        text = str.substring(1,newLen)
    }
    return text
}

function newString(){
    let text = prompt("Enter your text")

    if (text.includes("*")){
        text = text.replace("*","")
    }else if (text.includes("@")){
        text = text.padStart(1,"*")
        text = text.padEnd(1,"*")
        return text
    }else if (text.includes("₪")){
        return "new shekel"
    }
}