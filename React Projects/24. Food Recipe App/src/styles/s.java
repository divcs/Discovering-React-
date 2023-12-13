import java.sql.*; // Importing db
import java.util.*; // importing required classes

public class Java {
    // Method for creating connection (Main driver method)
    public static void main(String[] args) throws SQLException {
     
        String url = "jdbc:oracle:thin:@localhost:1521:xe";    // creating connection using Oracle db
        String user = "system";  // Username for connection
        String password = "oracle"; // Password for connection
        
        //Entering data
        Scanner k = new Scanner(System.in);

        System.out.println("Enter name");
        String name = k.next();

        System.out.println("Enter roll no");
        int rollNo = k.next();

        System.out.println("Enter class");
        String class = k.next();

        //Inserting data using SQL query
        String sql = "INSERT INTO student1 values(name+""+rollNo+""+class)";
        
        // Creating connection class object
        Connection conn = null;

        //Try block to check for exceptions
        try{
            DriverManager.registerDriver(new oracle.jdbc.OracleDriver()); //Registering drivers
            con= DriverManager.getConnection(url,user,pass); //Reference to connection interface

            // Creating statement
        Statement stmt = con.createStatement();

        // Executing query
        int m = st.executeUpdate(sql);
        if(m==1) System.out.println("Inserted successfully: "+sql); else System.out.println("Insertion failed");

         con.close(); // Close connection
        }
        //Catch block to handle exceptions
        catch(Exception e){
            //Display message when exception occurs
            System.err.println(e);
        }
       
    }
}
