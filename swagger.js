const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
      title: 'Shorter API',
      description: 'Shorter API'
    },
    host: 'shorter-rvta.onrender.com',
    schemes: ['https']
  };

const outputFile = './swagger.json'
const endpointsFiles = ['./routes/index.js']

swaggerAutogen(outputFile, endpointsFiles,doc)