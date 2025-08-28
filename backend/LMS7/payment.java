package Backend.LMS7;

import six_class_obj_met.Student;

import java.util.Scanner;

public class payment {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        student s1 = new student();
        
        s1.Student_info();

        s1.final_achievement();

        trainer t1 = new trainer();

        t1.trainer_info();

        t1.session_payment();
    }
}
