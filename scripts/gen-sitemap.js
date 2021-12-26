const utils = require('./utils')
const fs = require('fs')

const sitemapTempStr = `
<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://read.lovejade.cn/</loc></url>
  #PLACEHOLDER#
</urlset>`

const generate = async () => {
  const baseUrl = 'https://read.lovejade.cn/p/'
  const linksUrlArr = []
  const allNiceLinks = await utils.getAllSentences()
  allNiceLinks.value.forEach((item) => {
    const link = `${baseUrl}${item._id}`
    const urlLocItem = `<url><loc>${link}</loc></url>`
    linksUrlArr.push(urlLocItem)
  })
  const linksUrlStr = linksUrlArr.join('\n  ')
  const sitemapContent = sitemapTempStr.replace(`#PLACEHOLDER#`, linksUrlStr)
  const outputPath = `${process.cwd()}/public/sitemap.xml`
  fs.writeFileSync(outputPath, sitemapContent)
}

generate()
