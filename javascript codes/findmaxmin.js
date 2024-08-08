let arr=[];

function addele()
{
    let y=document.getElementById("n1");
    let b=String(y.value);
    arr.push(b);
    y.value="";

}
function findminmax()
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<i+1;j++)
        {
            if(arr[i]<arr[j])
            {
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    let a="Min="+arr[0]+"  Max="+arr[arr.length-1];
    let x=document.getElementById("x1");
    x.innerText=a;
}