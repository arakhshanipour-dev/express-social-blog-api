import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express Social Blog API',
            version: '1.0.0',
            description: 'REST API built with Express.js',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./src/modules/**/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;