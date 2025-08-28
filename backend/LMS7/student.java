package Backend.LMS7;
import java.util.Scanner;
public class student {

    int studentID; 
    String student_name;
    int studentAge;
    long studentnum;
    int student_attendance;
    int student_performance_score;
    int trainer_ratings;
    int attendance_credits;
    int performance_credits;
    int total_credits;
    int totalSessionsAttended;

    public student(){
         
        this.studentAge=10000;
        this.studentnum=100000;
       


    }

    public student(int studentID,String student_name){
        this(103, "John",  22,8090809);
        this.studentID =studentID;
        this.student_name=student_name;
        

    }
    public student(int studentID,String student_name,int studentAge,long studentnum){
         this.studentID =studentID;
        this.student_name=student_name;
        this.studentAge=studentAge;
        this.studentnum=studentnum;

    }
    
    Scanner sc = new Scanner(System.in);

    public void Student_info(){
        // System.out.print("Enter student ID: ");
        // studentID = sc.nextInt();
        // System.out.print("Enter student Name: ");
        // student_name = sc.next();
        System.out.println("======Student Details======");
        System.out.println("Student ID: "+studentID);
        System.out.println("Student Name: "+student_name);
        
        

    }
    public void Student_fullinfo(){
        // System.out.print("Enter student ID: ");
        // studentID = sc.nextInt();
        // System.out.print("Enter student Name: ");
        // student_name = sc.next();
        System.out.println("======Student Details======");
        System.out.println("Student ID: "+studentID);
        System.out.println("Student Name: "+student_name);
        System.out.println("Student Attendance: "+student_attendance);
        System.out.println("Student age: "+studentAge);
        System.out.println("Student num: "+studentnum);
        
        

    }
    public int Attendancecredits(){
        System.out.print("Enter student Attendance: ");
        student_attendance = sc.nextInt();
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
