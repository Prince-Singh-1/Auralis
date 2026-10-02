import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`Connected to MongoDB ${conn.connection.host}`);

		mongoose.connection.on("error", (err) => {
			console.error("MongoDB connection error:", err);
		});

		mongoose.connection.on("disconnected", () => {
			console.warn("MongoDB disconnected. Attempting to reconnect...");
		});
	} catch (error) {
		console.log("Failed to connect to MongoDB", error);
		console.log("MONGODB_URI starts with:", process.env.MONGODB_URI?.substring(0, 20) + "...");
		process.exit(1); // 1 is failure, 0 is success
	}
};
