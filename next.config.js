const withLess = require("@zeit/next-less")
const lessToJs = require("less-vars-to-js")
const fs = require("fs")
const path = require("path")

// Location of antd-custom.less variables file
const themeVariables = lessToJs(
  fs.readFileSync(
    path.resolve(__dirname, "./app/assets/less/antd-custom.less"),
    "utf8"
  )
)

// Fix errors when less files are required by Node server
if (typeof require !== "undefined") {
  require.extensions[".less"] = file => { }
}

// Override Antd default settings
module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables
  }
})