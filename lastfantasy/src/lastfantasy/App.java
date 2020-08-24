package lastfantasy;

import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

public class App {
    public static void main(String[] args) throws Exception{
            Monster M1 = new Monster();
            M1.setHp(10);
            M1.setAtk(1);
            M1.setName("Slime");
            
            Monster M2 = (Monster)M1.clone();
            Scanner input;
            input = new Scanner();
            
            
            
            Character.getInstance().setName("rew");
            Character.getInstance().setHp(100);
            Character.getInstance().setAtk(10);
            System.out.println(Character.getInstance().getName());
            System.out.println("Atk " + Character.getInstance().getHp());
            System.out.println("Hp " + Character.getInstance().getAtk());
            System.out.println("Slime Profile");
            System.out.println("Atk " + M1.getAtk() + " " + "Hp " + M1.getHp() + " " + "Name " + M1.getName());
            System.out.println("Atk " + M2.getAtk() + " " + "Hp " + M2.getHp() + " " + "Name " + M2.getName());
            
            // while(true){
                        
            // }
}
