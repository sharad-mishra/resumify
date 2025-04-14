import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        console.log("Connection string:", process.env.MONGODB_URI?.split('@')[1]); // Safely log partial URI

        const connection = await mongoose.connect(process.env.MONGODB_URI);
        
        console.log("\nMongoDB Connection Details:");
        console.log("Host:", connection.connection.host);
        console.log("Database:", connection.connection.name);
        console.log("Port:", connection.connection.port);
        console.log("State:", connection.connection.readyState === 1 ? "Connected" : "Not Connected");

        return connection;
    } catch (error) {
        console.error("\nMongoDB Connection Error:");
        console.error("Error Name:", error.name);
        console.error("Error Message:", error.message);
        process.exit(1);
    }
};
