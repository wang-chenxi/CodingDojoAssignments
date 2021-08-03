public class TestProject {
    public static void main(String[] args) {
        Project test = new Project("test", "this is a test", 0.0);
        System.out.println(test.getName());
        System.out.println(test.elevatorPitch());
    }
}
