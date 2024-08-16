// import mongoose from "mongoose";
// import "dotenv/config"
//  console.log ("mongodb", process.env.connection_STRING)
// const connectDb = async ()=>{
// try {
//    if(process.env.connection_string) {const connect = await mongoose.connect(process.env.CONNECTION_STRING)}
//     console.log("Database connected: ", connect.connection.host, connect.connection.name);

// } catch (error) {
//     console.log(error);
//     process.exit(1);
// }
// };

// export default connectDb

import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
	path: path.resolve(process.cwd(), ".env"),
});

// Log the environment variable to confirm it's being read
console.log("MongoDB connection string:", process.env.CONNECTION_STRING);

const connectDb = async () => {
	try {
		// Ensure the environment variable exists
		if (process.env.CONNECTION_STRING) {
			// Connect to MongoDB using the connection string from environment variables
			const connect = await mongoose.connect(
				process.env.CONNECTION_STRING
			);
			console.log(
				"Database connected: ",
				connect.connection.host,
				connect.connection.name
			);
		} else {
			throw new Error(
				"MongoDB connection string is not defined in environment variables"
			);
		}
	} catch (error) {
		// Log the error and exit the process
		console.error("Error connecting to MongoDB:", error);
		process.exit(1);
	}
};

export default connectDb;
