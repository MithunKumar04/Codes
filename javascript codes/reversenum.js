function reversenum()
{
    let a= document.getElementById('n1');
    let b= a.value;
    let c= b.split("").reverse().join("");
    let x= document.getElementById('x1');
    x.innerText=c;
}