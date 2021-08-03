import java.util.ArrayList;

public class Portfolio {
    private ArrayList<Project> projects;

    public Portfolio() {

    }

    public Portfolio(ArrayList<Project> projects) {
        this.projects = projects;
    }

    public ArrayList<Project> getProjects() {
        return this.projects;
    }

    public void setProjects(ArrayList<Project> projects) {
        this.projects = projects;
    }

    public double getPortfolioCost() {
        double totalCost = 0.0;
        for (Project project : this.projects) {
            totalCost += project.getCost();
        }
        return totalCost;
    }

    public void showPortfolio() {
        for (Project project : this.projects) {
            System.out.println(project.elevatorPitch());
        }
        System.out.println(this.getPortfolioCost());
    }

}
