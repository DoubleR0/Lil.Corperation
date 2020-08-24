package lastfantasy;

import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

public class App {
    public static void main(String[] args) throws Exception{
            String command;
            Monster M1 = new Monster();
            M1.setHp(10);
            M1.setAtk(1);
            M1.setName("Slime");
            int Amount = 5;
            
            
            Character.getInstance().setName("Swordman");
            Character.getInstance().setHp(100);
            Character.getInstance().setAtk(10);

            Monster M2 = (Monster)M1.clone();
            Monster M3 = (Monster)M1.clone();
            Monster M4 = (Monster)M1.clone();
            Monster M5 = (Monster)M1.clone();
            
            cardInterfece(M1, Amount);
            if(autoAttack(Amount,M1) < Amount){
                Amount -= 1;
                cardInterfece(M2, Amount);
            }
            if (autoAttack(Amount,M2) < Amount){
                Amount -= 1;
                cardInterfece(M3, Amount);
            }
            if (autoAttack(Amount,M3) < Amount){
                Amount -= 1;
                cardInterfece(M4, Amount);
            }
            if (autoAttack(Amount,M4) < Amount){
                Amount -= 1;
                cardInterfece(M5, Amount);
            }
            if (autoAttack(Amount,M5) < Amount){
                Amount -= 1;
                cardInterfece(M5, Amount);
            }
    }

    public static void  cardInterfece(Monster monster, int Amount) {
        System.out.println("=====================");
        System.out.println("=     " + Character.getInstance().getName() + "      =");
        System.out.println("= HP      : " + Character.getInstance().getHp() + "     =");
        System.out.println("= ATK     : " + Character.getInstance().getAtk() + "      =");
        System.out.println("=====================");
        System.out.println("");
        System.out.println("=====================");
        System.out.println("= Monster : " + monster.getName() + "   =");
        System.out.println("= Atk     : " + monster.getAtk() + "       =");
        System.out.println("= Hp      : " + monster.getHp() + "      =");
        System.out.println("= Amount  : " + Amount + "       =");
        System.out.println("=====================");
        System.out.println("");
    }

    public static int autoAttack(int Amount, Monster monster) {
        CombatPool attack = new CombatPool();
            System.out.println(Character.getInstance().getName() + ":  Attack!!!");
            System.out.println("");
            monster.setHp(attack.attackfirst(Character.getInstance().getAtk(), monster.getHp()));
            Character.getInstance().setHp(attack.attacksecond(monster.getAtk(), Character.getInstance().getHp()));
            if (monster.getHp() == 0) {
                System.out.println(monster.getName() + ":  Die!");
                Amount -= 1;
            }
            if (Character.getInstance().getHp() == 0) {
                System.out.println(Character.getInstance().getName() + ":  Die!");
                System.out.println("=== End Game ===");
        }
        return Amount;
    }
}
