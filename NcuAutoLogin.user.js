// ==UserScript==
// @name            NCU Auto Login - 南昌大学校园网、深澜软件校园网自动登录
// @description     南昌大学校园网自动登录，支持教工、校园网、移动、电信、联通
// @namespace       ncu-auto-login
// @match           *://*/srun_portal_*
// @grant           none
// @version         1.2.0
// @author          Viki <i@viki.moe> (https://github.com/vikiboss)
// @create          2023/10/07 16:00:00
// @lastmodified    2023/10/07
// @feedback-url    https://github.com/vikiboss/ncu-auto-login-script/issues
// @github          https://github.com/vikiboss/ncu-auto-login-script
// @license         MIT
// ==/UserScript==

const config = {
  type: '', // 账号类型：为空是教职工，@ncu 是校园网，@cmcc 是移动，@ndcard 是电信，@unicom 是联通
  username: '', // 账号
  password: '', // 密码，如果不想使用明文，可以使用 base64 密码，base64 密码可以在控制台执行 window.btoa("密码") 得到
  isBase64: false, // 如果是 base64 密码请将 isBase64 字段改为 true
}

const KEY = 'srun_config'

;(() => {
  window.addEventListener('load', () => {
    if (!config.username || !config.password) {
      try {
        const _config = JSON.parse(localStorage.getItem(KEY) || '{}')
        Object.assign(config, _config)
      } catch (e) {
        console.log('自动登录失败，错误信息：', e)
      }
    } else {
      localStorage.setItem(KEY, JSON.stringify(config))
    }

    const userInput = document.querySelector('#username')
    const passInput = document.querySelector('#password')
    const domainSelect = document.querySelector('#domain')
    const loginButton = document.querySelector('#login')

    const list = [userInput, passInput, domainSelect, loginButton, config.username, config.password]

    if (list.some(e => !e)) return

    const pwd = config.isBase64 ? window.atob(config.password) : config.password

    userInput.value = config.username
    passInput.value = pwd
    passInput.type = config.type

    loginButton.click()
  })
})()
