import '../styles/index.css'
import '../imgs/Moon-logo.png'
import '../imgs/Sun-logo.png'
import '../imgs/Tree img dark.png'
import '../imgs/Tree img light.png'

let cssRules = new Map()
for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
    cssRules.set(document.styleSheets[0].cssRules[i].selectorText.split(' ').join(''),
        document.styleSheets[0].cssRules[i])
}
let themesBtnState = localStorage.getItem('themesBtnState')
const userAgent = navigator.userAgent.toLowerCase()
let mobileAgent = false
if (userAgent.indexOf('android') != -1 || userAgent.indexOf('iphone') != -1 || userAgent.indexOf('ipad') != -1) {
    mobileAgent = true
}
if (mobileAgent) {
    setProperty('.desktop-header', 'display', 'none')
}
else {
    setProperty('.mobile-header', 'display', 'none')
}
let naviMenuState = 'hidden'

async function setProperty(cssRule, property, value) {
    return new Promise(function (resolve, reject) {
        if (cssRules.get(cssRule)) {
            resolve([cssRule, property, value])
        }
        else {
            reject('Error!! No such rule existed!')
        }
    }).then(function (resolve) {
        cssRules.get(resolve[0]).style.setProperty(resolve[1], resolve[2])
    }).catch(function (err) {
        console.log(err)
    })
}

function setPropertySync(cssRule, property, value) {
    if (cssRules.get(cssRule)) {
        cssRules.get(cssRule).style.setProperty(property, value)
    }
    else {
        console.log('Error No such rule existed!')
    }
}

async function setAttribute(HTMLElement, attribute, value) {
    HTMLElement.setAttribute(attribute, value)
}

async function lightTheme(state, mobileAgent) {
    themesBtnState = 'left'
    localStorage.setItem('themesBtnState', 'left')
    setProperty('.themes-btn-slide', 'transform', 'none')
    setProperty('.themes-btn-slide', 'background-image', 'url("../imgs/Sun-logo.png")')
    setProperty('.themes-btn', 'border', '0.25rem solid rgb(50, 50, 50)')
    setProperty('.themes-btn', 'background-color', 'white')
    setProperty('main', 'background-color', 'rgb(189, 189, 189)')
    setAttribute(document.querySelector('#tree-scene'), 'src', 'imgs/Tree img light.png')
    setProperty('footer', 'background-color', 'rgb(189, 189, 189)')
    if (state === 'change') {
        setProperty('.themes-btn-slide', 'transition', 'transform 0.25s ease-in-out').then(function () {
            setTimeout(function () {
                setProperty('.themes-btn-slide', 'transition', 'none')
            }, 250)
        })
    }
    if (mobileAgent) {
        setProperty('.mobile-header', 'background-color', 'rgb(189, 189, 189)')
        setProperty('.navi-menu-btn', 'background-color', 'rgb(50, 50, 50)')
        setProperty('.navi-menu-btn', 'border', '0.25rem solid rgb(50, 50, 50)')
        setProperty(`[class="navi-menu-btn"]>div`, 'background-color', 'white')
        setProperty('.navi-menu-content', 'background-color', 'white')
        setProperty('.navi-menu-content', 'border-left', '0.25rem solid white')
        setProperty('.navi-menu-content', 'border-right', '0.25rem solid white')
        setProperty(`[class="navi-menu-content"]>button`, 'background-color', 'white')
        setProperty(`[class="navi-menu-content"]>button`, 'border-bottom', '0.15rem solid rgb(50, 50, 50)')
        setProperty(`[class="navi-menu-content"]>button:first-child`, 'border-top', '0.15rem solid white')
        setProperty(`[class="navi-menu-content"]>button>a`, 'color', 'rgb(50, 50, 50)')
        if (state === 'change') {
            setProperty('.mobile-header', 'transition', 'background-color 0.5s ease-in-out').then(function () {
                setTimeout(function () {
                    setProperty('.mobile-header', 'transition', 'none')
                }, 500)
            })
        }
    }
    else {
        setProperty('.desktop-header', 'background-color', 'rgb(189, 189, 189)')
        if (state === 'change') {
            setProperty('.desktop-header', 'transition', 'background-color 0.5s ease-in-out').then(function () {
                setTimeout(function () {
                    setProperty('.desktop-header', 'transition', 'none')
                }, 500)
            })
        }
    }
}

async function darkTheme(state, mobileAgent) {
    themesBtnState = 'right'
    localStorage.setItem('themesBtnState', 'right')
    setProperty('.themes-btn-slide', 'transform', 'translateX(2.05rem)')
    setProperty('.themes-btn-slide', 'background-image', 'url("../imgs/Moon-logo.png")')
    setProperty('.themes-btn', 'border', '0.25rem solid white')
    setProperty('.themes-btn', 'background-color', 'grey')
    setProperty('main', 'background-color', 'rgb(55, 55, 55)')
    setAttribute(document.querySelector('#tree-scene'), 'src', 'imgs/Tree img dark.png')
    setProperty('footer', 'background-color', 'rgb(55, 55, 55)')
    if (state === 'change') {
        setProperty('.themes-btn-slide', 'transition', 'transform 0.25s ease-in-out').then(function () {
            setTimeout(function () {
                setProperty('.themes-btn-slide', 'transition', 'none')
            }, 250)
        })
    }
    if (mobileAgent) {
        setProperty('.mobile-header', 'background-color', 'rgb(55, 55, 55)')
        setProperty('.navi-menu-btn', 'background-color', 'white')
        setProperty('.navi-menu-btn', 'border', '0.25rem solid white')
        setProperty(`[class="navi-menu-btn"]>div`, 'background-color', 'rgb(50, 50, 50)')
        setProperty('.navi-menu-content', 'background-color', 'rgb(50, 50, 50)')
        setProperty('.navi-menu-content', 'border-left', '0.25rem solid rgb(50, 50, 50)')
        setProperty('.navi-menu-content', 'border-right', '0.25rem solid rgb(50, 50, 50)')
        setProperty(`[class="navi-menu-content"]>button`, 'background-color', 'rgb(50, 50, 50)')
        setProperty(`[class="navi-menu-content"]>button`, 'border-bottom', '0.15rem solid white')
        setProperty(`[class="navi-menu-content"]>button:first-child`, 'border-top', '0.15rem solid rgb(50, 50, 50)')
        setProperty(`[class="navi-menu-content"]>button>a`, 'color', 'white')
        if (state === 'change') {
            setProperty('.mobile-header', 'transition', 'background-color 0.5s ease-in-out').then(function () {
                setTimeout(function () {
                    setProperty('.mobile-header', 'transition', 'none')
                }, 500)
            })
        }
    }
    else {
        setProperty('.desktop-header', 'background-color', 'rgb(55, 55, 55)')
        if (state === 'change') {
            setProperty('.desktop-header', 'transition', 'background-color 0.5s ease-in-out').then(function () {
                setTimeout(function () {
                    setProperty('.desktop-header', 'transition', 'none')
                }, 500)
            })
        }
    }
}

async function showHideNaviMenu() {
    if (naviMenuState === 'hidden') {
        naviMenuState = 'visible'
        setProperty('.navi-menu-content', 'transform', 'none')
    }
    else {
        naviMenuState = 'hidden'
        setProperty('.navi-menu-content', 'transform', 'translateX(-100%)')
    }
    setProperty('.navi-menu-content', 'transition', 'transform 0.25s ease-in-out').then(function () {
        setTimeout(function () {
            setProperty('.navi-menu-content', 'transition', 'none')
        }, 250)
    })
}

if (themesBtnState === null || themesBtnState === 'left') {
    lightTheme(null, mobileAgent)
}
else {
    darkTheme(null, mobileAgent)
}

document.querySelector('body').addEventListener('click', function (e) {
    if (e.target.getAttribute('class') === 'themes-btn' || e.target.parentElement.getAttribute('class') === 'themes-btn') {
        if (themesBtnState === 'left') {
            darkTheme('change', mobileAgent)
        }
        else {
            lightTheme('change', mobileAgent)
        }
    }
    else if (e.target.getAttribute('class') === 'navi-menu-btn' || e.target.parentElement.getAttribute('class') === 'navi-menu-btn') {
        showHideNaviMenu()
    }
    else {
        if (mobileAgent && naviMenuState === 'visible') {
            const el = e.target.getAttribute('class')
            const elp = e.target.parentElement.getAttribute('class')
            const elg = e.target.parentElement.parentElement.getAttribute('class')
            if (el != 'navi-menu-content' && elp != 'navi-menu-content' && elg != 'navi-menu-content') {
                showHideNaviMenu()
            }
        }
    }
})