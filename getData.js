const fs = require('fs')
const path = require('path')

const DATA_DIR = path.join(__dirname, './src/data')

function parseFilesTokens({ dir, filter = /(.)*.json/, callback }) {
  const result = {}
  ;(function recurseHandler(dir, deep = []) {
    if (!fs.existsSync(dir)) {
      console.error('no dir ', dir)
      return
    }
    try {
      fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
        const fileName = file.name.replace(/.json/g, '')
        const filePath = dir + '/' + file.name
        if (fs.lstatSync(filePath).isDirectory()) {
          recurseHandler(filePath, deep.concat(fileName))
        } else if (filter.test(filePath)) {
          let currentResultProp = result
          if (deep.length) {
            for (let index = 0; index < deep.length; index++) {
              if (!currentResultProp[deep[index]]) {
                currentResultProp[deep[index]] = {}
              }
              currentResultProp = currentResultProp[deep[index]]
            }
          }
          if (!currentResultProp[fileName]) {
            currentResultProp[fileName] = {}
          }
          currentResultProp = currentResultProp[fileName]
          Object.assign(currentResultProp, callback(filePath))
        }
      })
    } catch (e) {
      console.error(e)
    }
  })(dir)
  return result
}

function parseTokens(fileName) {
  try {
    return require(fileName)
  } catch (e) {
    console.error(e)
  }
}

const data = parseFilesTokens({
  dir: DATA_DIR,
  callback: parseTokens,
})

module.exports = {
  data,
}
