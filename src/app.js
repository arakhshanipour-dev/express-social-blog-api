import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './docs/swagger.js';

const app = express();

app.use(helmet());

app.use(cors({
    origin: true,
    credentials: true,
}));

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));

app.use(cookieParser());

app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
}));

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to Express Social Blog API',
    });
});

app.get('/health', (req, res) => {
    res.json({
        success: true,
        uptime: process.uptime(),
        timestamp: new Date(),
    });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;