package Backend.LMS9;
import java.util.Scanner;
public class student {

    int studentID; 
    String student_name;
    int studentAge;
    long studentnum;
    String desc;
    int coursefee;
    int student_attendance;
    int student_performance_score;
    int trainer_ratings;
    int attendance_credits;
    int performance_credits;
    int total_credits;
    int totalSessionsAttended;
    int subscore[];

    public student(){ }
    public student(int studentID,String student_name,int studentAge,long studentnum,String desc,int coursefee){
         this.studentID =studentID;
        this.student_name=student_name;
        this.studentAge=studentAge;
        this.studentnum=studentnum;
        this.desc=desc;
        this.coursefee=coursefee;

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
        System.out.println("======Student full Details======");
        System.out.println("Student ID: "+studentID);
        System.out.println("Student Name: "+student_name);
        System.out.println("Student Attendance: "+student_attendance);
        System.out.println("Student age: "+studentAge);
        System.out.println("Student num: "+studentnum);
        
        

    }
    public void courseFee(){
        double discount =0;
        String descp=desc.toLowerCase();
        String d="";

        if(descp.contains("reference")){
            d+="reference";
            discount+=5000;
        }
        if(descp.contains("promo")){
            d+="promo";
            discount+=3000;
        }
        if(descp.contains("scholarship")){
            d+="scholarship";
            discount+=7000;
        }

        double fee = coursefee-discount;
        System.out.println("Original Fee: "+coursefee);
        System.out.println("Discount Applied for having "+d+": "+discount);
        System.out.println("Fee After Discount: "+fee);

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
    
    public int avgScore(){
        System.out.println("Enter number subjects you want: ");
        int nsub = sc.nextInt();
        subscore =new int[nsub];
        
        int sum = 0;

        for(int i=0;i<subscore.length;i++){
            System.out.println("enter subject "+i+"score: ");
            subscore[i]=sc.nextInt();
            sum+=subscore[i];
        }
        int avgscore = sum/subscore.length;

        return avgscore;
    }

    public int Performancecredits(int avgscore){

        if (avgscore>=85){
            return performance_credits+=5;
        }
        else if(avgscore>=60 && avgscore<=84){
            return performance_credits+=3;
        }
        else{
            return 0;
        }
    
    }

    public void final_achievement(){
        
        total_credits = Attendancecredits()+Performancecredits(avgScore());
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
