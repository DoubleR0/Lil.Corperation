package lastfantasy;

public class Monster implements Cloneable {

    private String Name;
    private int Hp;

    public String getName() {
        return Name;
    }

    public int getHp() {
        return Hp;
    }

    public int getAtk() {
        return Atk;
    }
    private int Atk;
    private static Monster instance;

//    public Monster() {
//
//    }

//    public static Monster getInstance() {
//        if (instance == null) {
//            instance = new Monster();
//        }
//        return instance;
//    }

    public void setName(String Name) {
        this.Name = Name;
    }

    public void setHp(int Hp) {
        this.Hp = Hp;
    }

    public void setAtk(int Atk) {
        this.Atk = Atk;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); //To change body of generated methods, choose Tools | Templates.
    }
    
    
}
