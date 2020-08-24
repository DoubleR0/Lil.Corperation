package lastfantasy;


public class Character {

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
    private static Character instance;

    private Character() {

    }

    public static Character getInstance() {
        if (instance == null) {
            instance = new Character();
        }
        return instance;
    }

    public void setName(String Name) {
        this.Name = Name;
    }

    public void setHp(int Hp) {
        this.Hp = Hp;
    }

    public void setAtk(int Atk) {
        this.Atk = Atk;
    }
}
