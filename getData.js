const fs = require('fs')
const path = require('path')

const DATA_DIR = path.join(__dirname, './src/data')

function parseFilesTokens({
  dir,
  filter = /(.)*.json/,
  callback = parseTokens,
}) {
  const result = {}
  function recurseHandler(dir, deep = []) {
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
          let lastProp
          let currentResultProp = result
          if (deep.length) {
            for (let index = 0; index < deep.length; index++) {
              lastProp = deep[index]
              let type
              if (['projects', 'services', 'tags'].includes(lastProp)) {
                type = []
              } else {
                type = {}
              }
              if (!currentResultProp[lastProp]) {
                currentResultProp[lastProp] = type
              }
              currentResultProp = currentResultProp[lastProp]
            }
          }
          const fileData = callback(filePath)
          if (Array.isArray(currentResultProp)) {
            currentResultProp.push({
              ...fileData,
              fileName,
              infoblock: lastProp,
            })
            currentResultProp.sort((a, b) => a.id - b.id)
          } else {
            if (Array.isArray(fileData)) {
              currentResultProp[fileName] = fileData
            } else {
              if (!currentResultProp[fileName]) {
                currentResultProp[fileName] = {}
              }
              currentResultProp = currentResultProp[fileName]
              Object.assign(currentResultProp, fileData)
            }
          }
        }
      })
    } catch (e) {
      console.error(e)
    }
  }
  recurseHandler(dir)
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
})

module.exports = {
  data,
}
