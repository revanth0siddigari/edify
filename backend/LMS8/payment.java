package Backend.LMS8;

import six_class_obj_met.Student;

import java.util.Scanner;

public class payment {
    public static void main(String[] args) {

        

        // student s1 = new student();
        

        student s1 = new student(7,"revanth");
        s1.Student_info();

        student s2 = new student(7,"revanth",20,123456788);
        s2.Student_fullinfo();

        s2.final_achievement();

        

        trainer t1 = new trainer();

        t1.trainer_info();

        t1.session_payment();
    }
}
