package Backend.Appliction;

public class tuition_fee_discount {
    public static void main(String[] args) {
        byte Student_grade_level = 10;
         System.out.println("Student Grade level: "+Student_grade_level);

        double base_tuition_fee = 200000;
         System.out.println("Base Tuition Fee: "+base_tuition_fee);

        boolean academic_topper_status = true;
         System.out.println("Academic Topper Status: "+academic_topper_status);

        double discount = 0;
         System.out.println("Initial Discount: "+discount+"%");

        if(Student_grade_level>=9 && Student_grade_level<=12){
            if (academic_topper_status) {
                discount+= 20;
                 System.out.println("Academic Topper discount: "+discount+"%");
            }
            else{
                discount+= 10;
                 System.out.println("Academic Topper discount: "+discount+"%");
            }
        }
        else if (Student_grade_level>=6 && Student_grade_level<=8) {
            if (academic_topper_status) {
                discount+= 5;
                 System.out.println("Academic Topper discount: "+discount+"%");
            }
            else{
                discount+= 10;
                 System.out.println("Academic Topper discount: "+discount+"%");
            }
        }
        if (Student_grade_level==10) {
            double additional_discount = 3;
             System.out.println("Academic Topper discount: "+discount+"%"+" + Additional Discount: "+additional_discount+"%");
             discount+=additional_discount;
        }
        if (Student_grade_level==12) {
            double additional_discount = 5;
             System.out.println("Academic Topper discount: "+discount+"%"+" + Additional Discount: "+additional_discount+"%");
             discount+=additional_discount;
        }

        double final_tuition_fee = base_tuition_fee-(base_tuition_fee * (discount/100));
        System.out.println("Final Tuition Fee: "+final_tuition_fee);
        
    }
}
