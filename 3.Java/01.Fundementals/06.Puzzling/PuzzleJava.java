
/**
 * PuzzleJava
 */
import java.util.Random;

public class PuzzleJava {

    Random random = new Random();

    // Write a method that will generate and return an array with 10 random numbers
    // between 1 and 20 inclusive.
    public int[] getTenRolls() {
        int[] results = new int[10];
        for (int i = 0; i < 10; i++) {
            results[i] = random.nextInt(10) + 10;
        }
        return results;
    }

    // Write a method that will:

    // Create an array within the method that contains all 26 letters of the
    // alphabet (this array must have 26 values).
    // Generate a random index between 0-25, and use it to pull a random letter out
    // of the array.
    // Return the random letter.

    public char getRandomLetter() {
        char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();
        char result = alphabet[random.nextInt(25)];
        return result;
    }

    // Write a method that uses the previous method to create a random string of
    // eight characters, and return that string.

    public String generatePassword() {
        String result = "";
        for (int i = 0; i < 8; i++) {
            result += this.getRandomLetter();
        }
        return result;
    }

    // Write a method that takes an int length as an argument and creates an array
    // of random eight character words. The array should be the length passed in as
    // an int.
    public String[] getNewPasswordSet(int len) {
        String[] passwordSet = new String[len];
        for (int i = 0; i < len; i++) {
            passwordSet[i] = this.generatePassword();
        }
        return passwordSet;
    }

}