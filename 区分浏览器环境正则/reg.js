const us = navigator.userAgent;

let isAndroid = !!us.match(/android/ig),  // android
    isIos = !!us.match(/iphone|ipod/ig),  // ios
    isIosChrome = us.match(/CriOS/),   // ios版本谷歌
    isQQBrowser = us.match(/MQQBrowser/),  // QQ浏览器
    isWeixin = (/MicroMessenger/ig).test(us), // 是否为微信
    isSafari = /Safari/.test(us) && !/Chrome/.test(us),  // 是否为Safari
    isEdeg = us.match(/edge\/([\d.]+)/), // Edeg
    isFireFox = us.match(/firefox\/([\d.]+)/),  // firefox
    isChrome = us.match(/chrome\/([\d.]+)/), // chrome
    isOpera = us.match(/opera.([\d.]+)/), // opera
    isRv = us.match(/rv:([\d.]+)\) like gecko/), // ie(rv)
    isMsie = us.match(/msie ([\d.]+)/); // ie(msie)