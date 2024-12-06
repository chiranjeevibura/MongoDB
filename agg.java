import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import java.util.Arrays;

public class MongoAggregationExample {
    public static void main(String[] args) {
        // MongoDB Connection String
        String connectionString = "mongodb://localhost:27017";
        
        // Create MongoDB client
        try (MongoClient mongoClient = MongoClients.create(connectionString)) {
            // Access the database
            MongoDatabase database = mongoClient.getDatabase("your_database_name");

            // Access the collection
            MongoCollection<Document> collection = database.getCollection("ChangeEvent");

            // Define the aggregation pipeline
            Document groupStage = new Document("$group", 
                new Document("_id", "$Status")
                .append("count", new Document("$sum", 1))
            );

            Document sortStage = new Document("$sort", 
                new Document("count", -1)
            );

            // Execute the aggregation pipeline
            collection.aggregate(Arrays.asList(groupStage, sortStage))
                      .forEach(document -> System.out.println(document.toJson()));
        }
    }
}
