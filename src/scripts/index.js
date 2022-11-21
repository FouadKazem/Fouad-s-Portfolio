import '../styles/index.css'
import * as imgs from './modules/imgs'
import { Page } from './modules/page'

const page = new Page(document.styleSheets[document.styleSheets.length - 1])
const common = [
    ['.desktop-header', 'background-color', 'rgba(0, 0, 0, 0)'],
    ['.mobile-header', 'background-color', 'rgba(0, 0, 0, 0)'],
    ['main', 'background-color', 'rgba(0, 0, 0, 0)'],
    ['footer', 'background-color', 'rgba(0, 0, 0, 0)'],
]
const commonLight = [
    ['body', 'background-color', 'rgb(53, 236, 252)'],
    ['.website-title', 'color', 'rgb(55, 55, 55)'],
    ['.themes-btn', 'border', '0.25rem solid rgb(55, 55, 55)'],
    ['.themes-btn', 'background-color', 'white'],
    ['.themes-btn-slide', 'transform', 'none'],
    ['.themes-btn-slide', 'background-image', `url(${imgs.sunLogo})`],
    ['#intro', 'color', 'rgb(55, 55, 55)'],
    [document.querySelector('#tree-scene'), 'src', imgs.treeImgLight],
]
const commonDark = [
    ['body', 'background-color', 'rgb(0, 6, 43)'],
    ['.website-title', 'color', 'white'],
    ['.themes-btn', 'border', '0.25rem solid white'],
    ['.themes-btn', 'background-color', 'grey'],
    ['.themes-btn-slide', 'transform', 'translateX(2.05rem)'],
    ['.themes-btn-slide', 'background-image', `url(${imgs.moonLogo})`],
    ['#intro', 'color', 'white'],
    [document.querySelector('#tree-scene'), 'src', imgs.treeImgDark],
]
const desktopLight = [
    [`[class="navi-bar-content"]>button>a`, 'color', 'rgb(55, 55, 55)']
]
const desktopDark = [
    [`[class="navi-bar-content"]>button>a`, 'color', 'white']
]
const mobileLight = [
    ['.navi-menu-btn', 'border', '0.25rem solid rgb(55, 55, 55)'],
    ['.navi-menu-btn', 'background-color', 'rgb(55, 55, 55)'],
    [`[class="navi-menu-btn"]>div`, 'background-color', 'white'],
    ['.navi-menu-content', 'background-color', 'white'],
    [`[class="navi-menu-content"]>button`, 'background-color', 'rgba(0, 0, 0, 0)'],
    [`[class="navi-menu-content"]>button>a`, 'color', 'rgb(55, 55, 55)'],
]
const mobileDark = [
    ['.navi-menu-btn', 'border', '0.25rem solid white'],
    ['.navi-menu-btn', 'background-color', 'white'],
    [`[class="navi-menu-btn"]>div`, 'background-color', 'rgb(55, 55, 55)'],
    ['.navi-menu-content', 'background-color', 'rgb(0, 0, 60)'],
    [`[class="navi-menu-content"]>button`, 'background-color', 'rgba(0, 0, 0, 0)'],
    [`[class="navi-menu-content"]>button>a`, 'color', 'white'],
]
page.applyTheme(common)
if (page.themesBtnState === null || page.themesBtnState === 'left') {
    page.themesBtnState = 'left'
    localStorage.setItem('themesBtnState', 'left')
    page.applyTheme(commonLight)
    if (page.mobileAgent) {
        page.applyTheme(mobileLight)
    }
    else {
        page.applyTheme(desktopLight)
    }
    for (let i = 0; i < document.querySelectorAll('address>a').length; i++) {
        page.setAttribute(document.querySelectorAll('address>a')[i].children[0], 'stroke', '#373737')
    }
}
else {
    page.applyTheme(commonDark)
    if (page.mobileAgent) {
        page.applyTheme(mobileDark)
    }
    else {
        page.applyTheme(desktopDark)
    }
    for (let i = 0; i < document.querySelectorAll('address>a').length; i++) {
        page.setAttribute(document.querySelectorAll('address>a')[i].children[0], 'stroke', '#FFFFFF')
    }
}

document.body.addEventListener('click', function (e) {
    if (e.target.getAttribute('class') === 'themes-btn' ||
        e.target.parentElement.getAttribute('class') === 'themes-btn') {
        if (page.themesBtnState === 'left') {
            page.themesBtnState = 'right'
            localStorage.setItem('themesBtnState', 'right')
            page.applyTheme(commonDark)
            if (page.mobileAgent) {
                page.applyTheme(mobileDark)
            }
            else {
                page.applyTheme(desktopDark)
            }
            for (let i = 0; i < document.querySelectorAll('address>a').length; i++) {
                page.setAttribute(document.querySelectorAll('address>a')[i].children[0], 'stroke', '#FFFFFF')
            }
        }
        else {
            page.themesBtnState = 'left'
            localStorage.setItem('themesBtnState', 'left')
            page.applyTheme(commonLight)
            if (page.mobileAgent) {
                page.applyTheme(mobileLight)
            }
            else {
                page.applyTheme(desktopLight)
            }
            for (let i = 0; i < document.querySelectorAll('address>a').length; i++) {
                page.setAttribute(document.querySelectorAll('address>a')[i].children[0], 'stroke', '#373737')
            }
        }
    }
    else if (e.target.getAttribute('class') === 'navi-menu-btn' ||
        e.target.parentElement.getAttribute('class') === 'navi-menu-btn') {
        page.showHideNaviMenu()
    }
    else {
        if (page.mobileAgent && page.naviMenuState === 'visible') {
            const el = e.target.getAttribute('class')
            const elp = e.target.parentElement.getAttribute('class')
            const elg = e.target.parentElement.parentElement.getAttribute('class')
            if (el != 'navi-menu-content' && elp != 'navi-menu-content' && elg != 'navi-menu-content') {
                page.showHideNaviMenu()
            }
        }
    }
})