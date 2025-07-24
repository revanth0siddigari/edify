package Backend.Appliction;

public class Car_specs {
    public static void main(String[] args) {
        String Engine_Type = "mHAWK 4 Cylinder";
        String Displacement = "2184 cc";
        String Max_Power = "130bhp@3750rpm";
        String Max_Torque = "300Nm@1600-2800rpm";
        byte No_of_Cylinders = 4;
        byte Valves_Per_Cylinder = 4;
        String Fuel_Supply_System = "CRDi";
        Boolean Turbo_Charger = true;
        String Transmission_Type = "Manual";
        String Gearbox = "6-Speed";
        String Drive_Type = "RWD";

        System.out.println("Engine Type: " + Engine_Type);
        System.out.println("Displacement: " + Displacement);
        System.out.println("Max Power: " + Max_Power);
        System.out.println("Max Torque: " + Max_Torque);
        System.out.println("Number of Cylinders: " + No_of_Cylinders);
        System.out.println("Valves Per Cylinder: " + Valves_Per_Cylinder);
        System.out.println("Fuel Supply System: " + Fuel_Supply_System);
        System.out.println("Turbo Charger: " + (Turbo_Charger ? "Yes" : "No"));
        System.out.println("Transmission Type: " + Transmission_Type);
        System.out.println("Gearbox: " + Gearbox);
        System.out.println("Drive Type: " + Drive_Type);
        System.out.println();
        System.out.println();


        String variant = "S11(Diesel) 21.9 Lakh*";
        String On_road_location = "New Delhi";
        int On_road_price = 2190887;
        int down_payment = 380000;
        double bank_intrest_rate = 9.50;
        double intrest_rate_month = bank_intrest_rate / (12 * 100);
        byte loan_period_Years = 4;
        int total_loan_amount = On_road_price-down_payment;
        int loan_period_months=loan_period_Years*12;
        double emi_per_month = (total_loan_amount * intrest_rate_month * Math.pow(1 + intrest_rate_month, loan_period_months))/(Math.pow(1 + intrest_rate_month, loan_period_months) - 1);
        double payable_amount = emi_per_month*loan_period_months;
        System.out.println("Variant: " + variant);
        System.out.println("On-Road Location: " + On_road_location);
        System.out.println("On-Road Price: " + On_road_price);
        System.out.println("Down Payment: " + down_payment);
        System.out.println("Total Loan Amount: " + total_loan_amount);
        System.out.println("Loan Period (Year): " + loan_period_Years );
        System.out.println("Loan Period (Months)"+loan_period_months);
        System.out.println("Bank Interest Rate (Annual): " + bank_intrest_rate + "%");
        System.out.println("Monthly EMI: " + (int)emi_per_month);
        System.out.println("Total Payable Amount: " + (int)payable_amount);

    }
}
