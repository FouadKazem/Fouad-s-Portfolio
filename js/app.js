const styleSheet = document.styleSheets[0]
const themesBtnHtml = document.getElementsByClassName("themes-btn-slide")
let themesBtnState = localStorage.getItem('themesBtnState')
let cssRules = new Map()
for (let i = 0; i < styleSheet.cssRules.length; i++) {
    cssRules.set(styleSheet.cssRules[i].selectorText.split(' ').join(''), styleSheet.cssRules[i])
}
let userAgent = navigator.userAgent.toLowerCase()
let mobileAgent = false
if (userAgent.indexOf('android') != -1 || userAgent.indexOf('iphone') != -1 || userAgent.indexOf('ipad') != -1) {
    mobileAgent = true
}
if (mobileAgent) {
    cssRules.get('.desktop-header').style.setProperty('display', 'none')
}
else {
    cssRules.get('.mobile-header').style.setProperty('display', 'none')
}

function lightTheme(state) {
    themesBtnState = 'left'
    localStorage.setItem('themesBtnState', 'left')
    cssRules.get('.themes-btn-slide').style.setProperty('transform', 'none')
    cssRules.get('.themes-btn-slide').style.setProperty('background-image', 'url("../img/Sun-logo.png")')
    cssRules.get('.themes-btn').style.setProperty('border', '0.25rem solid rgb(50, 50, 50)')
    cssRules.get('.themes-btn').style.setProperty('background-color', 'white')
    if (mobileAgent) {
        cssRules.get('.mobile-header').style.setProperty('background-color', 'rgb(0, 128, 255)')
        cssRules.get('.navi-menu-btn').style.setProperty('background-color', 'rgb(50, 50, 50)')
        cssRules.get('.navi-menu-btn').style.setProperty('border', '0.25rem solid rgb(50, 50, 50)')
        cssRules.get(`[class="navi-menu-btn"]>div`).style.setProperty('background-color', 'white')
        if (state === 'change') {
            cssRules.get('.mobile-header').style.setProperty('transition', 'background-color 0.5s ease-in-out')
            setTimeout(function () {
                cssRules.get('.mobile-header').style.setProperty('transition', 'none')
            }, 500)
        }
    }
    else {
        cssRules.get('.desktop-header').style.setProperty('background-color', 'rgb(0, 128, 255)')
        if (state === 'change') {
            cssRules.get('.desktop-header').style.setProperty('transition', 'background-color 0.5s ease-in-out')
            setTimeout(function () {
                cssRules.get('.desktop-header').style.setProperty('transition', 'none')
            }, 500)
        }
    }
}

function darkTheme(state) {
    themesBtnState = 'right'
    localStorage.setItem('themesBtnState', 'right')
    cssRules.get('.themes-btn-slide').style.setProperty('transform', 'translateX(2.05rem)')
    cssRules.get('.themes-btn-slide').style.setProperty('background-image', 'url("../img/Moon-logo.png")')
    cssRules.get('.themes-btn').style.setProperty('border', '0.25rem solid white')
    cssRules.get('.themes-btn').style.setProperty('background-color', 'grey')
    if (mobileAgent) {
        cssRules.get('.mobile-header').style.setProperty('background-color', 'rgb(0, 0, 50)')
        cssRules.get('.navi-menu-btn').style.setProperty('background-color', 'white')
        cssRules.get('.navi-menu-btn').style.setProperty('border', '0.25rem solid white')
        cssRules.get(`[class="navi-menu-btn"]>div`).style.setProperty('background-color', 'rgb(50, 50, 50)')
        if (state === 'change') {
            cssRules.get('.mobile-header').style.setProperty('transition', 'background-color 0.5s ease-in-out')
            setTimeout(function () {
                cssRules.get('.mobile-header').style.setProperty('transition', 'none')
            }, 500)
        }
    }
    else {
        cssRules.get('.desktop-header').style.setProperty('background-color', 'rgb(0, 0, 50)')
        if (state === 'change') {
            cssRules.get('.desktop-header').style.setProperty('transition', 'background-color 0.5s ease-in-out')
            setTimeout(function () {
                cssRules.get('.desktop-header').style.setProperty('transition', 'none')
            }, 500)
        }
    }
}

if (themesBtnState === null) {
    lightTheme()
}
else {
    if (themesBtnState === 'right') {
        darkTheme()
    }
    else {
        lightTheme()
    }
}

for (let i = 0; i < themesBtnHtml.length; i++) {
    themesBtnHtml[i].addEventListener('click', function () {
        if (themesBtnState === 'left') {
            darkTheme('change')
        }
        else {
            lightTheme('change')
        }
    })
}

let naviMenuBtn = document.querySelector('.navi-menu-btn')
let naviMenu = 'hidden'

naviMenuBtn.addEventListener('click', function() {
    if (naviMenu === 'hidden') {
        naviMenu = 'visibile'
        cssRules.get('.navi-menu-content').style.setProperty('transform', 'none')
    }
    else {
        naviMenu = 'hidden'
        cssRules.get('.navi-menu-content').style.setProperty('transform', 'translateX(-100%)')
    }
    cssRules.get('.navi-menu-content').style.setProperty('transition', 'transform 0.25s ease-in-out')
    setTimeout(function() {
        cssRules.get('.navi-menu-content').style.setProperty('transition', 'none')
    }, 250)
})