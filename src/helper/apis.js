import $ajax from './ajax.js'

function requestUrl(path) {
  return `http://localhost:4000/api/${path}`
}

export default {
  getNiceLinks(data) {
    return $ajax.get(requestUrl('getNiceLinks'), data)
  },

  getLinksByTag(data) {
    return $ajax.get(requestUrl('getLinksByTag'), data)
  },

  getAllLinks(data) {
    return $ajax.get(requestUrl('getAllLinks'), data)
  },

  getAllLinksCount(data) {
    return $ajax.get(requestUrl('getAllLinksCount'), data)
  },

  getAllUsers(data) {
    return $ajax.get(requestUrl('getAllUsers'), data)
  },

  getAllTags() {
    return $ajax.get(requestUrl('getAllTags'))
  },

  addNiceLinks(data) {
    return $ajax.post(requestUrl('addNiceLinks'), data)
  },

  updateNiceLinks(data) {
    return $ajax.post(requestUrl('updateNiceLinks'), data)
  },

  deleteNiceLinks(data) {
    return $ajax.post(requestUrl('deleteNiceLinks'), data)
  },

  dispatchAction(data) {
    return $ajax.post(requestUrl('dispatchAction'), data)
  },

  getMyPublish(data) {
    return $ajax.get(requestUrl('getMyPublish'), data)
  },

  getMyLikes(data) {
    return $ajax.get(requestUrl('getMyLikes'), data)
  },

  getMyDislikes(data) {
    return $ajax.get(requestUrl('getMyDislikes'), data)
  },

  searchNiceLinks(data) {
    return $ajax.get(requestUrl('searchNiceLinks'), data)
  },

  getRandomLinks(data) {
    return $ajax.get(requestUrl('getRandomLinks'), data)
  },

  /* auth */
  checkIsExisted(data) {
    return $ajax.post(requestUrl('checkIsExisted'), data)
  },

  signup(data) {
    return $ajax.post(requestUrl('signup'), data)
  },

  login(data) {
    return $ajax.post(requestUrl('login'), data)
  },

  logout() {
    return $ajax.post(requestUrl('logout'))
  },

  logoff(data) {
    return $ajax.post(requestUrl('logoff'), data)
  },

  active(data) {
    return $ajax.post(requestUrl('active'), data)
  },

  requestResetPwd(data) {
    return $ajax.post(requestUrl('requestResetPwd'), data)
  },

  getProfile(data) {
    return $ajax.get(requestUrl('getProfile'), data)
  },

  setProfile(data) {
    return $ajax.post(requestUrl('setProfile'), data)
  },

  getUserInfo(data) {
    return $ajax.get(requestUrl('getUserInfo'), data)
  },

  updateAvatar(data) {
    return $ajax.post(requestUrl('updateAvatar'), data)
  },

  removeUserById(data) {
    return $ajax.post(requestUrl('removeUserById'), data)
  },

  // ---------------------Help-------------------------start
  crawlLinksInfo(data) {
    return $ajax.get(requestUrl('crawlLinksInfo'), data)
  },

  getWechatApiSignature(data) {
    return $ajax.get(requestUrl('getWechatApiSignature'), data)
  },

  // ---------------------Config-----------------------
  getSysConf(data) {
    return $ajax.get(requestUrl('getSysConf'), data)
  },

  getAdverts(data) {
    return $ajax.get(requestUrl('getAdverts'), data)
  },

  updateAdverts(data) {
    return $ajax.post(requestUrl('updateAdverts'), data)
  },

  removeAdverts(data) {
    return $ajax.post(requestUrl('removeAdverts'), data)
  },

  // -----------Sentences-----------@18-06-18
  getSentences(data) {
    return $ajax.get(requestUrl('getSentences'), data)
  },

  getSentencesCount(data) {
    return $ajax.get(requestUrl('getSentencesCount'), data)
  },

  updateSentences(data) {
    return $ajax.post(requestUrl('updateSentences'), data)
  },

  removeSentences(data) {
    return $ajax.post(requestUrl('removeSentences'), data)
  },

  getRandomSentence() {
    return $ajax.post(requestUrl('getRandomSentence'))
  },

  getWechatQrCode() {
    return $ajax.get(requestUrl('getWechatQrCode'))
  },
}
