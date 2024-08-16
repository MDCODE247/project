"use strict";
// import mongoose from "mongoose";
// import "dotenv/config"
//  console.log ("mongodb", process.env.connection_STRING)
// const connectDb = async ()=>{
// try {
//    if(process.env.connection_string) {const connect = await mongoose.connect(process.env.CONNECTION_STRING)}
//     console.log("Database connected: ", connect.connection.host, connect.connection.name);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// } catch (error) {
//     console.log(error);
//     process.exit(1);
// }
// };
// export default connectDb
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(process.cwd(), ".env"),
});
// Log the environment variable to confirm it's being read
console.log("MongoDB connection string:", process.env.CONNECTION_STRING);
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Ensure the environment variable exists
        if (process.env.CONNECTION_STRING) {
            // Connect to MongoDB using the connection string from environment variables
            const connect = yield mongoose_1.default.connect(process.env.CONNECTION_STRING);
            console.log("Database connected: ", connect.connection.host, connect.connection.name);
        }
        else {
            throw new Error("MongoDB connection string is not defined in environment variables");
        }
    }
    catch (error) {
        // Log the error and exit the process
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
});
exports.default = connectDb;
