"use strict";
// import mongoose from "mongoose";
// import { nanoid } from "nanoid";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlModel = void 0;
// const shortUrl = new mongoose.Schema({
//     fullUrl: {
//         type: String,
//         required: true
//     },
//     shortUrl:{
//         type: String,
//         required: true,
//         default:() => nanoid().substring(0, 10),
//     },
//     clicks: {
//         type: Number,
//         default: 0
//     }
// }, {
//     timestamps:true
// });
// export const urlModel = mongoose.model("ShortUrl", shortUrlSchema);
const mongoose_1 = __importDefault(require("mongoose"));
const nanoid_1 = require("nanoid");
// Define the schema
const shortUrlSchema = new mongoose_1.default.Schema({
    fullUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true,
        default: () => (0, nanoid_1.nanoid)().substring(0, 10),
    },
    clicks: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});
// Create and export the model
exports.urlModel = mongoose_1.default.model("ShortUrl", shortUrlSchema);
