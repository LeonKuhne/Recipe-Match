const config = {
  server: {
    local: process.env.PORT ? false : true,
    port: process.env.PORT || 5353
  }
}

module.exports = config
