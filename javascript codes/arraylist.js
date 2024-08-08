let arr=[];

function addele()
{
    let a=document.getElementById("n1");
    arr.push(a.value);
    a.value="";

}
function getele()
{
    let a="<ul>\n"
    {
        for(let i=0;i<arr.length;i++)
        {
            a=a+"<li>"+arr[i]+"<li>\n"
        }
    }
    a=a+"<ul>";
    let x=document.getElementById("x1");
    x.innerText=a;
}