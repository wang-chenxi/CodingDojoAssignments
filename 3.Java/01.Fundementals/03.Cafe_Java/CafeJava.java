public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app.
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffeePrice = 2.5;
        double lattePrice = 3.0;
        double cappucinoPrice = 4.5;
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = false;
        boolean isReadyOrder3 = true;
        boolean isReadyOrder4 = true;
        // APP INTERACTION SIMULATION (Add your code for the challenges below)

        // Example:
        System.out.println(generalGreeting + customer1);
        if (isReadyOrder1 == true) {
            System.out.println(customer1 + readyMessage);
        } else {
            System.out.println(customer1 + pendingMessage);
        } // Displays "Welcome to Cafe Java, Cindhuri"
          // ** Your customer interaction print statements will go here ** //

        // Noah ordered a cappucino. Check the status of his order and let him know. If
        // it is ready, also tell him his total.
        if (isReadyOrder4 == true) {
            System.out.println(customer4 + readyMessage + ". " + displayTotalMessage + 1 * cappucinoPrice);
        } else {
            System.out.println(pendingMessage);
        }
        // Sam just order 2 lattes, and would like the total up front. Also give them
        // their order status.
        if (isReadyOrder3 == true) {
            System.out.println(customer3 + readyMessage + ". " + displayTotalMessage + 2 * lattePrice);
        }
        // Jimmy just realized he was charged for a coffee but had ordered a latte. Tell
        // him his new total (what he owes) to make up the difference.
        System.out.println(customer3 + ", " + displayTotalMessage + 2 * (lattePrice - dripCoffeePrice));
    }
}
