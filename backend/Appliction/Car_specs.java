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
    }
}
