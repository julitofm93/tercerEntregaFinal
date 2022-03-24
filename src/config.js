import __dirname  from './utils.js';
import dotenv from 'dotenv';
dotenv.config();

const config = {
    fileSystem: {
        baseUrl: `${__dirname}/files/`//Borrar
    },
    mongo: {
        baseUrl: `mongodb+srv://Julito:123@prueba.e1gkm.mongodb.net/adoptme?retryWrites=true&w=majority`
    },
    jwt: {
        secret: "123"
    },
    gmail: {
        password: process.env.GMAIL_PASS
    },
    cloudinary: {
        API: process.env.CLOUDINARY_URL
    }
}

export default config;