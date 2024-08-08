import java.util.Scanner;
class main
{
    public static void main(String args[])
    {
        Scanner sc= new Scanner(System.in);
        int num= sc.nextInt();
        int temp=num;
        int sum=0;
        while(temp!=0)
        {
            int rem=temp%10;
            sum=sum+rem*rem*rem;
            temp=temp/10;
        }
        if(num==sum)
        {
            System.out.println("The number is an amstrong number");
        }
        else
        {
            System.out.println("The number is not an amstrong number");
        }
    }
}