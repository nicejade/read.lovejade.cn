if (typeof String.prototype.startsWith !== 'function') {
  window.String.prototype.startsWith = function (prefix) {
    return this.slice(0, prefix.length) === prefix
  }
}

if (typeof String.prototype.firstUpperCase !== 'function') {
  window.String.prototype.firstUpperCase = function () {
    return this.replace(/^\S/, function (s) {
      return s.toUpperCase()
    })
  }
}

/*
  DESC：对Date的扩展，将 Date 转化为指定格式的String。
      月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
      年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 例子：
      (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
      (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
*/
window.Date.prototype.Format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds(),
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

export default {
  getHostnameByUrl(url) {
    return new URL(url).hostname
  },

  /**
   * @desc:获得 mix max 之间的随机值，包括两者;
   * @param {number} min 小值
   * @param {number} max 大值
   * @return {number} 随机数
   */
  getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
  },

  /**
   * 过滤掉 String 中的 Html 标签;
   */
  filterHtmlTag(str = '') {
    return str.replace(/<(.|\n)*?>/g, '')
  },

  /* 适当截取 String，使得目标内容可以提前显示(默认位置为第 15 个字符) */
  sliceToAheadTarget(string = '', target = '', position = 15) {
    const index = string.indexOf(target)
    if (index <= position) return string
    const sliceIdx = index - position
    const length = string.length - sliceIdx
    return '...' + string.substr(sliceIdx, length)
  },

  /**
   * @desc 前置填充指定位数个“字符”;
   * @param {number|string} source 源字符/数组
   * @param {number} length 指定长度
   * @param {string} keyStr 填充字符
   */
  specifiedPadding(source, length, keyStr) {
    return (Array(length).join(keyStr) + source).slice(-length)
  },

  getManageList() {
    return [
      {
        name: 'manageLinks',
        path: 'links',
      },
      {
        name: 'manageUsers',
        path: 'users',
      },
      {
        name: 'manageAdverts',
        path: 'adverts',
      },
      {
        name: 'manageSentences',
        path: 'sentences',
      },
    ]
  },

  getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    } else {
      return null
    }
  },

  query(search) {
    let str = search || window.location.search
    let objURL = {}

    str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0, $1, $2, $3) => {
      objURL[$1] = $3
    })
    return objURL
  },

  loadScript(url, isAsyncFlag) {
    return new Promise((resolve, reject) => {
      var script = document.createElement('script')
      script.type = 'text/javascript'

      if (script.readyState) {
        script.onreadystatechange = () => {
          if (script.readyState === 'loaded' || script.readyState === 'complete') {
            script.onreadystatechange = null
            resolve('success: ' + url)
          }
        }
      } else {
        script.onload = () => {
          resolve('success: ' + url)
        }
      }

      script.onerror = () => {
        reject(Error(url + 'load error!'))
      }

      script.src = url
      script.async = isAsyncFlag
      document.body.appendChild(script)
    })
  },

  queryString(url, query) {
    let str = []
    for (let key in query) {
      str.push(key + '=' + query[key])
    }
    let paramStr = str.join('&')
    return paramStr ? `${url}?${paramStr}` : url
  },

  isLegalUrl(str) {
    let pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-z]{2,9}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/
    return pattern.test(str)
  },

  isLegalUsername(str) {
    let pattern = /^[a-zA-Z0-9]{3,16}$/
    return pattern.test(str)
  },

  isLegalNick(str) {
    let pattern = /(.){3,15}$/
    let byteNum = this.getByteLength(str)
    return pattern.test(str) && byteNum <= 15 && byteNum >= 3
  },

  isLegalEmail(str) {
    let pattern = new RegExp('^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$', 'g')
    return pattern.test(str)
  },

  isLegalPassword(str) {
    let pattern = new RegExp('^[a-zA-Z0-9@$!%_*#&]{6,18}$', 'g')
    return pattern.test(str)
  },

  isAndroidSystem() {
    const ua = window.navigator.userAgent
    return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1
  },

  isIosSystem() {
    const ua = window.navigator.userAgent
    return !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  },

  isWechatBrowser() {
    var ua = window.navigator.userAgent.toLowerCase()
    if (ua.match(/MicroMessenger/i) === 'micromessenger') {
      return true
    } else {
      return false
    }
  },

  getCurrentDateHMS(delimiter = '-') {
    let currentDate = new Date() || new Date()
    let currentH = currentDate.getHours()
    let currentM = currentDate.getMinutes()
    let currentS = currentDate.getSeconds()
    return [currentH, currentM, currentS].join(delimiter)
  },

  // 获取字符串实际长度(包含汉字,汉字统一按照 2 字节算;)
  getByteLength(str = '') {
    if (typeof str !== 'string') return str.length
    return str.replace(/[^\x00-\xff]/g, 'aa').length
  },

  interceptString(string = '', length = 140) {
    if (this.getByteLength(string) > 140) {
      return string.substring(0, length) + '...'
    } else {
      return string
    }
  },

  updateAfterFilterEmptyValue(obj) {
    for (let key in obj) {
      if (obj[key] === null || obj[key] === undefined) delete obj[key]
    }
    return obj
  },

  getElementOffsetTop(element) {
    let actualTop = element.offsetTop
    let current = element.offsetParent

    while (current !== null) {
      actualTop += current.offsetTop
      current = current.offsetParent
    }
    return actualTop
  },

  isElementInViewport(elem) {
    const rect = elem.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  },

  getRedirectLink(url) {
    return `https://nicelinks.site/redirect?url=${url}`
  },

  openAuthorSite(p) {
    window.open(`${this.assembleExternalLink('https://aboutme.lovejade.cn/')}&position=${p}`)
  },
  /* -----------------------------localStorage------------------------------------ Start */
  /*
   * set localStorage
   */
  setLocalStorage(name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.localStorage.setItem(getStorageName(name), content)
  },

  /**
   * get localStorage
   */
  getLocalStorage(name) {
    if (!name) return
    let content = window.localStorage.getItem(getStorageName(name))
    return JSON.parse(content)
  },

  /**
   * delete localStorage
   */
  removeLocalStorage(name) {
    if (!name) return
    window.localStorage.removeItem(getStorageName(name))
  },
  /* -----------------------------localStorage------------------------------------ End */

  /* ----------------------------sessionStorage----------------------------------- Start */
  setSessionStorage(name, content) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.sessionStorage.setItem(getStorageName(name), content)
  },

  /**
   * get sessionStorage
   */
  getSessionStorage(name) {
    if (!name) return
    let content = window.sessionStorage.getItem(getStorageName(name))
    return JSON.parse(content)
  },

  /**
   * delete sessionStorage
   */
  removeSessionStorage(name) {
    if (!name) return
    window.sessionStorage.removeItem(getStorageName(name))
  },
  /* ----------------------------sessionStorage----------------------------------- End */
}
