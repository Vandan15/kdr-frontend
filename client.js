const contentful = require('contentful')

export const client = contentful.createClient({
  space: 'r203gi5b19jj',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'N3yPd4ywu-8AhnP6ysHG9lj5wOtYMXhcGpP1ceh9FNk'
})
