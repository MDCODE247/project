"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const React = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const Constant_1 = require("../../Helpers/Constant");
const FormContainer = () => {
    const [fullUrl, setFullUrl] = React.useState('');
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            yield axios_1.default.post(`${Constant_1.serverUrl}/shorturl`, {
                fullUrl: fullUrl,
            });
            setFullUrl('');
        }
        catch (error) {
            console.log(error);
        }
    });
    return (<div className='container mx-auto p-2'>
        <div className='bg-banner my-8 rounded-xl bg-cover bg-center'>
            <div className='w-full h-full rounded-xl p-20 backdrop-brightness-50'>
                <h2 className='text-white text-4xl text-center pb-4'>URL Shortener</h2>
                <p className='text-white text-center pb-2 text-xl font-extralight'>Enter link to shorten</p>
                <p className='text-white text-center pb-4 text-sm font-thin'>This is a  free tool for shortening your links, making it neat and readable </p>
                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <div className='relative w-full'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800'>
                                urlshortener.link //
                            </div>
                            <input type="text" placeholder="Paste link" required className='block w-full p-4 ps-36 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500' value={fullUrl} onChange={(e) => setFullUrl(e.target.value)}/>
                            <button type="submit" className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-lg border border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300'>
                                Shorten URL
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>);
};
exports.default = FormContainer;
