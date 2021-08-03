import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;

public class TestPuzzleJava {

    public static void main(String[] args) {
        PuzzleJava generator = new PuzzleJava();
        int[] randomRolls = generator.getTenRolls();
        System.out.println(Arrays.toString(randomRolls));

        char random = generator.getRandomLetter();
        System.out.println(random);

        String password = generator.generatePassword();
        System.out.println(password);

        String[] passwordSet = generator.getNewPasswordSet(5);
        System.out.println(Arrays.toString(passwordSet));
    }
}
