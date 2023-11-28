const axios = require('axios')

const getAllSentences = () => {
  return new Promise((resolve, reject) => {
    const requestUrl = 'https://site.lovejade.cn/api/getSentences'
    const params = {
      pageCount: 1,
      pageSize: 999,
      sortType: 1,
      sortTarget: "createTime",
      active: true,
    };
    return axios
      .get(requestUrl, { params })
      .then((result) => {
        resolve(result.data)
      })
      .catch((err) => {
        console.log('Opps, Axios Error Occurred !' + err)
        resolve({})
      })
  })
}

const waitForTimeout = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(true)
      } catch (e) {
        reject(false)
      }
    }, delay)
  })
}

module.exports = {
  waitForTimeout,
  getAllSentences,
}
