const styleSheet = document.styleSheets[0]
let themesBtnState = localStorage.getItem('themesBtnState')
let cssRules = new Map()
for (let i = 0; i < styleSheet.cssRules.length; i++) {
    cssRules.set(styleSheet.cssRules[i].selectorText.split(' ').join(''), styleSheet.cssRules[i])
}
const userAgent = navigator.userAgent.toLowerCase()
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
        cssRules.get('.navi-menu-content').style.setProperty('background-color', 'white')
        cssRules.get('.navi-menu-content').style.setProperty('border-left', '0.25rem solid white')
        cssRules.get('.navi-menu-content').style.setProperty('border-right', '0.25rem solid white')
        cssRules.get(`[class="navi-menu-content"]>button`).style.setProperty('background-color', 'white')
        cssRules.get(`[class="navi-menu-content"]>button`).style.setProperty('border-bottom', '0.15rem solid rgb(50, 50, 50)')
        cssRules.get(`[class="navi-menu-content"]>button:first-child`).style.setProperty('border-top', '0.15rem solid white')
        cssRules.get(`[class="navi-menu-content"]>button>a`).style.setProperty('color', 'rgb(50, 50, 50)')
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
        cssRules.get('.navi-menu-content').style.setProperty('background-color', 'rgb(50, 50, 50)')
        cssRules.get('.navi-menu-content').style.setProperty('border-left', '0.25rem solid rgb(50, 50, 50)')
        cssRules.get('.navi-menu-content').style.setProperty('border-right', '0.25rem solid rgb(50, 50, 50)')
        cssRules.get(`[class="navi-menu-content"]>button`).style.setProperty('background-color', 'rgb(50, 50, 50)')
        cssRules.get(`[class="navi-menu-content"]>button`).style.setProperty('border-bottom', '0.15rem solid white')
        cssRules.get(`[class="navi-menu-content"]>button:first-child`).style.setProperty('border-top', '0.15rem solid rgb(50, 50, 50)')
        cssRules.get(`[class="navi-menu-content"]>button>a`).style.setProperty('color', 'white')
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

let naviMenuState = 'hidden'

function showHideNaviMenu() {
    if (naviMenuState === 'hidden') {
        naviMenuState = 'visible'
        cssRules.get('.navi-menu-content').style.setProperty('transform', 'none')
    }
    else {
        naviMenuState = 'hidden'
        cssRules.get('.navi-menu-content').style.setProperty('transform', 'translateX(-100%)')
    }
    cssRules.get('.navi-menu-content').style.setProperty('transition', 'transform 0.25s ease-in-out')
    setTimeout(function () {
        cssRules.get('.navi-menu-content').style.setProperty('transition', 'none')
    }, 250)
}

document.querySelector('body').addEventListener('click', function (e) {
    if (e.target.getAttribute('class') === 'themes-btn' || e.target.parentElement.getAttribute('class') === 'themes-btn') {
        if (themesBtnState === 'left') {
            darkTheme('change')
        }
        else {
            lightTheme('change')
        }
    }
    else if (e.target.getAttribute('class') === 'navi-menu-btn' || e.target.parentElement.getAttribute('class') === 'navi-menu-btn') {
        showHideNaviMenu()
    }
    else {
        if (mobileAgent && naviMenu === 'visible') {
            const el = e.target.getAttribute('class')
            const elp = e.target.parentElement.getAttribute('class')
            const elg = e.target.parentElement.parentElement.getAttribute('class')
            if (el != 'navi-menu-content' && elp != 'navi-menu-content' && elg != 'navi-menu-content') {
                showHideNaviMenu()
            }
        }
    }
})