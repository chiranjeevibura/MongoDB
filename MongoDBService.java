import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.MongoCollection;
import org.bson.Document;

public class MongoDBService {
    private static final String MONGO_URI = "mongodb://localhost:27017";  // MongoDB URI
    private MongoClient mongoClient;

    // Constructor to create the MongoDB connection
    public MongoDBService() {
        // Initialize the MongoClient with the provided URI
        mongoClient = new MongoClient(new MongoClientURI(MONGO_URI));
    }

    // Method to check if the MongoDB is running by listing collections from a test database
    public String checkStatus() {
        try {
            // Connect to a database (replace "test" with your actual database)
            MongoDatabase database = mongoClient.getDatabase("test");
            
            // List collection names to verify if the database is accessible
            for (String collectionName : database.listCollectionNames()) {
                System.out.println("Collection: " + collectionName);  // Logging collection names for verification
            }
            
            return "MongoDB is running";
        } catch (Exception e) {
            // Handle exceptions (e.g., MongoDB server is not running or connection failed)
            e.printStackTrace();
            return "MongoDB is not running";
        }
    }

    // Method to run a query on a specific collection (placeholder logic)
    public String runQuery(String query) {
        try {
            // Connect to the target database (replace "yourDatabase" with the actual database name)
            MongoDatabase database = mongoClient.getDatabase("yourDatabase");
            
            // Get a collection to run the query (replace "yourCollection" with the actual collection name)
            MongoCollection<Document> collection = database.getCollection("yourCollection");
            
            // Sample placeholder query - find documents where a field matches the query input
            // Replace this with the actual query logic as per your requirements
            Document filter = new Document("fieldName", query); // Replace 'fieldName' with the actual field name
            
            for (Document doc : collection.find(filter)) {
                System.out.println("Document: " + doc.toJson());  // Logging matched documents
            }

            return "Query executed successfully";
        } catch (Exception e) {
            // Handle exceptions during query execution
            e.printStackTrace();
            return "Error executing query: " + e.getMessage();
        }
    }

    // Method to close the MongoDB connection
    public void closeConnection() {
        if (mongoClient != null) {
            mongoClient.close();
            System.out.println("MongoDB connection closed");
        }
    }

    // Placeholder method for running custom MongoDB commands (if needed)
    public String runCustomCommand(String command) {
        // Implement custom MongoDB command execution if needed
        return "Custom command executed";
    }
}
