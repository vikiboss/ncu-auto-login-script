// ==UserScript==
// @name            NCU Auto Login - 南昌大学校园网、深澜软件校园网自动登录
// @description     南昌大学校园网自动登录，支持教工、校园网、移动、电信、联通
// @namespace       ncu-auto-login
// @match           *://*/srun_portal_pc
// @grant           none
// @version         1.0.1
// @author          Viki <i@viki.moe> (https://github.com/vikiboss)
// @create          2022/10/25 07:11:45
// @lastmodified    2022/10/25
// @feedback-url    https://github.com/vikiboss/ncu-auto-login-script/issues
// @github          https://github.com/vikiboss/ncu-auto-login-script
// @license         MIT
// @description
// ==/UserScript==

const config = {
  type: '', // 账号类型：为空是教职工，@ncu 是校园网，@cmcc 是移动，@ndcard 是电信，@unicom 是联通
  username: '', // 账号
  password: '', // 密码
};

window.onload = function () {
  const userInput = document.querySelector('#username');
  const passInput = document.querySelector('#password');
  const domainSelect = document.querySelector('#domain');
  const loginButton = document.querySelector('#login');

  userInput.value = config.username;

  // 如果不想使用明文，可以使用 base64 密码 👇，base64 密码可以在控制台执行 window.btoa("密码") 得到
  // passInput.value = window.atob(config.password);
  passInput.value = config.password;
  domainSelect.value = config.type;

  loginButton.click();
};
