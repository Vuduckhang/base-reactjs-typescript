require('dotenv').config()

const Environment = {
  apiKey: process.env.REACT_APP_API_KEY || '',
  coreServiceUrl: process.env.REACT_APP_CORE_SERVICE_URL || '',
}

export default Environment
