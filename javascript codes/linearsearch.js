let arr=[];

function addele()
{
    let a=document.getElementById("n1");
    arr.push(a.value);
    a.value="";

}
function checkele()
{
    let x=document.getElementById("h1").value;
    let i=0;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==x)
        {
            break;
        }
    }
    let y=document.getElementById("x1");
    if(i==arr.length)
    {
        y.innerText=-1;
    }
    else
    {
        y.innerText=i;
    }
}