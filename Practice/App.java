import java.util.*;

public class App {
    // 1. Fields
    String name;
    String Company;
    int downloads;

    // 2. Constructor
    public App(String AppName, String CompanyName, int Downloads) {
        name = AppName;
        Company = CompanyName;
        downloads = Downloads;
    }

    // 3. Method (Now correctly inside the class)
    public void NewApp() {
        System.out.println("App is running fine!");
    }

    // 4. Main Method (Now correctly inside the class)
    public static void main(String[] args) {
        App myapp = new App("Whatsapp", "Meta", 25000);
        myapp.NewApp();
    }
}