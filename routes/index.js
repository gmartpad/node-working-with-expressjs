const adminRoutes = require("./admin")
const shopRoutes = require("./shop")

const routes = {
  admin: adminRoutes,
  shop: shopRoutes
}

module.exports = routes