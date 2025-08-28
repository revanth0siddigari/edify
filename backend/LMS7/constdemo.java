package Backend.LMS7;

public class constdemo {
    public constdemo(){
        System.out.println("explicit");
        x=100;
        y=200;
    }
    public constdemo(int x,int y){
        this.x=x;
        this.y=y;
    }
    public int addi(){
        return x+y;
    }
    int x,y;
    public static void main(String[] args) {
        constdemo obj = new constdemo();
        System.out.println(obj.addi());
        constdemo objn = new constdemo(100, 200);
        System.out.println(objn.addi());
    }
}
