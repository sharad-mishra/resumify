import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        // Only log connection attempt in non-production
        if (process.env.NODE_ENV !== 'Production') {
            console.log("Attempting to connect to MongoDB...");
        }

        const connection = await mongoose.connect(process.env.MONGODB_URI);
        
        // Production-safe logging
        console.log(`MongoDB Connected: ${process.env.NODE_ENV === 'Production' ? 'Production Database' : connection.connection.host}`);

        // Add connection error handlers
        mongoose.connection.on('error', (err) => {
            console.error('MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

        return connection;
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
    }
};
