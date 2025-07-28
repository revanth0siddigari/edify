package Backend.lms_t4_crm;

import java.util.Scanner;

public class Student_details {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the Student ID: ");
         int Student_ID = sc.nextInt();

        System.out.print("Enter the Student Name: ");
         String Student_Name = sc.next();
        
        System.out.print("Enter the Student Attendance: ");
         double Student_Attendance = sc.nextDouble();
        
        int total_score = 0;
        int No_subjects = 0;

        char validation_check = 'y';
        while(validation_check == 'y' || validation_check == 'Y'){
            No_subjects++;
            System.out.print("Enter Score of Subject "+No_subjects+": ");
             int subject_score = sc.nextInt();
             total_score+=subject_score;
            
            System.out.print("Do you Want Add 1 More Subject Score (y/n): ");
            validation_check = sc.next().charAt(0);
            
        }

        sc.close();
        
        double Average_Score = total_score/No_subjects;
        
        System.out.println("Student ID: "+Student_ID);
        System.out.println("Student Name: "+Student_Name);
        System.out.println("Student Average Score: "+Average_Score);
         if(Average_Score >= 85){
            System.out.println("Student Performace Level: Excellent");
         }
         else if(Average_Score >=70 && Average_Score <=84){
            System.out.println("Student Performace Level: Good");
         }
         else if(Average_Score >=50 && Average_Score <=69){
            System.out.println("Student Performace Level: Average");
         }
         else{
            System.out.println("Student Performace Level: Needs Improvement");
         }
        System.out.println("Student Attendance: "+Student_Attendance);
        if(Student_Attendance<75){
            System.out.println("!Warning Student Attendance is less than 75");
        }
        
    }
    
}
