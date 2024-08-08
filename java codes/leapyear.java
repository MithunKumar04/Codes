import java.util.Scanner;
class main
{
    public static void main(String args[])
    {
        Scanner sc= new Scanner(System.in);
        int num= sc.nextInt();
        if(num%4==0)
        {
            if(num%100==0)
            {
                if(num%400==0)
                {
                    System.out.println("The year is a leap year");
                }
                else
                {
                    System.out.println("The year is not a leap year");
                }
                
            }
            else
            {
                System.out.println("The year is a leap year");
            }
        }
        else
        {
            System.out.println("The year is not a leap year");
        }
    }