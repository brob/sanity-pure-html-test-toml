const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: "1xn5h9u5",
  dataset: "production",
  useCdn: true 
})

module.exports = client;