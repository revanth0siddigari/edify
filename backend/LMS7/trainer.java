package Backend.LMS7;
import java.util.Scanner;

import six_class_obj_met.Student;
public class trainer {

    Scanner sc = new Scanner(System.in);

    int trainer_id;
    String trainer_name;
    int sessions;
    int sessionspayemnt;
    int totalPayment;


    public void trainer_info(){
        System.out.println("======Trainer Details======");
        System.out.print("Enter trainer ID: ");
        trainer_id = sc.nextInt();
        System.out.print("Enter trainer Name: ");
        trainer_name = sc.next();
        System.out.println("======Trainer info=======");
        System.out.println("Trainer ID: "+trainer_id);
        System.out.println("Trainer Name: "+trainer_name);

    }


    public void session_payment(){
        System.out.println("=====Trainer session=====");
        System.out.print("Enter number of session taken: ");
        sessions = sc.nextInt();
        sessionspayemnt = sessions*1500;
        student studentobj = new student();
        totalPayment = sessionspayemnt+studentobj.trainer_rating();
        System.out.println("The Total Payment: "+totalPayment);


    }

    
    
}
