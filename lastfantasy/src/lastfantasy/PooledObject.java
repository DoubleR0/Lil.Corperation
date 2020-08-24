package lastfantasy;

public class PooledObject{
    Combat attack1 = new Combat();
    Combat attack2 = new Combat();

    public void attackfirst(int atk,int hp) {
        return attack1.attack(atk, hp);
    }

    public void  attacksecond(int atk,int hp) {
        return attack2.attack(atk, hp);
    }

}