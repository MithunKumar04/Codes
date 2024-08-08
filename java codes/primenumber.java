import java.util.Scanner;
class main
{
    public static void main(String args[])
    {
        Scanner sc= new Scanner(System.in);
        int num= sc.nextInt();
        int flag=0;
        for(int i=2;i<num/2;i++)
        {
            if(num%i==0)
            {
                flag+=1;
            }
        }
        if(flag==0)
        {
            System.out.println("The number is prime number");
        }
        else
        {
            System.out.println("The number is not a prime number");
        }
    }
}