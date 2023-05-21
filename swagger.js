const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
      title: 'My API',
      description: 'Temple API'
    },
    host: 'http://localhost:8080',
    schemes: ['https']
  };

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles,doc)