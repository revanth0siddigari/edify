package Backend.LMS6;
import java.util.Scanner;
public class student {

    int StudentID; 
    String Student_Name;
    int Student_Attendance;
    int Student_Performance_Score;
    int Trainer_Ratings;
    int attendance_credits;
    int performance_credits;
    int total_credits;
    int totalSessionsAttended;

    Scanner sc = new Scanner(System.in);

    public void Student_info(){
        System.out.print("Enter student ID: ");
        StudentID = sc.nextInt();
        System.out.print("Enter student Name: ");
        Student_Name = sc.next();
        System.out.print("Enter student Attendance: ");
        Student_Attendance = sc.nextInt();
        System.out.println("======Student Details======");
        System.out.println("Student ID: "+StudentID);
        System.out.println("Student Name: "+Student_Name);
        System.out.println("Student Attendance: "+Student_Attendance);
    }
    public int Attendancecredits(){
        System.out.println("=======Session details=======");
        System.out.print("Enter the number of sessions attended:");
        totalSessionsAttended = sc.nextInt();
        if (totalSessionsAttended>=30) {
            return attendance_credits+=5;
        }
        else if(totalSessionsAttended>=20 && totalSessionsAttended<=29){
            return attendance_credits+=3;
        }
        else{
            return 0;
        }

    }

    public int Performancecredits(){
        System.out.print("Enter the Score of student: ");
        int score = sc.nextInt();
        if (score>=85){
            return performance_credits+=5;
        }
        else if(score>=60 && score<=84){
            return performance_credits+=3;
        }
        else{
            return 0;
        }
    
    }

    public void final_achievement(){
        
        total_credits = Attendancecredits()+Performancecredits();
        System.out.println("=======Achivment======");
        if (total_credits>=10) {
            System.out.println("GOLD");;
        }
        else if(total_credits>=8 && total_credits<=9){
            System.out.println("SILVER");
        }
        else{
            System.out.println("You Need To IMPROVE");
        }
    }


    public int trainer_rating(){
        System.out.println("========Trainer Rating========");
        System.out.print("Enter  rating for trainer (1-5): ");
        int Rating = sc.nextInt();
        if (Rating==5) {
            return 5000;
        } else {
            return 0;
        }
    }


}
