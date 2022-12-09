import '../styles/about-me.css'
import * as imgs from './modules/imgs'
import { Page } from './modules/page'

const page = new Page(document.styleSheets[document.styleSheets.length - 1])
const common = [
    ['main', 'background-color', 'rgba(0, 0, 0, 0)'],
]
const commonLight = [
    ['body', 'background-color', 'rgb(240, 240, 240)'],
    ['.website-title', 'color', 'rgb(55, 55, 55)'],
    ['.themes-btn', 'border', '0.25rem solid rgb(55, 55, 55)'],
    ['.themes-btn', 'background-color', 'white'],
    ['.themes-btn-slide', 'transform', 'none'],
    ['.themes-btn-slide', 'background-image', `url(${imgs.sunLogo})`],
    ['.container', 'border', '0.25rem solid rgb(55, 55, 55)'],
    ['.container', 'background-color', 'white'],
    ['.container', 'color', 'rgb(55, 55, 55)'],
    [document.querySelector('#mother-tree'), 'src', imgs.motherTreeLight],
    [document.querySelector('#tree1'), 'src', imgs.tree1Light],
    [document.querySelector('#tree2'), 'src', imgs.tree2Light],
    [document.querySelector('#tree3'), 'src', imgs.tree3Light],
    ['footer', 'background-color', 'white'],
    ['footer', 'border-top', '0.25rem solid rgb(55, 55, 55)'],
]
const commonDark = [
    ['body', 'background-color', 'rgb(40, 40, 40)'],
    ['.website-title', 'color', 'white'],
    ['.themes-btn', 'border', '0.25rem solid white'],
    ['.themes-btn', 'background-color', 'grey'],
    ['.themes-btn-slide', 'transform', 'translateX(2.05rem)'],
    ['.themes-btn-slide', 'background-image', `url(${imgs.moonLogo})`],
    ['.container', 'border', '0.25rem solid rgb(150, 150, 150)'],
    ['.container', 'background-color', 'rgb(55, 55, 55)'],
    ['.container', 'color', 'white'],
    [document.querySelector('#mother-tree'), 'src', imgs.motherTreeDark],
    [document.querySelector('#tree1'), 'src', imgs.tree1Dark],
    [document.querySelector('#tree2'), 'src', imgs.tree2Dark],
    [document.querySelector('#tree3'), 'src', imgs.tree3Dark],
    ['footer', 'background-color', 'rgb(55, 55, 55)'],
    ['footer', 'border-top', '0.25rem solid white'],
]
const desktopLight = [
    ['.desktop-header', 'border-bottom', '0.25rem solid rgb(55, 55, 55)'],
    ['.desktop-header', 'background-color', 'white'],
    [`[class="navi-bar-content"]>button>a`, 'color', 'rgb(55, 55, 55)']
]
const desktopDark = [
    ['.desktop-header', 'border-bottom', '0.25rem solid white'],
    ['.desktop-header', 'background-color', 'rgb(55, 55, 55)'],
    [`[class="navi-bar-content"]>button>a`, 'color', 'white']
]
const mobileLight = [
    ['.mobile-header', 'border-bottom', '0.25rem solid rgb(55, 55, 55)'],
    ['.mobile-header', 'background-color', 'white'],
    ['.navi-menu-btn', 'border', '0.25rem solid rgb(55, 55, 55)'],
    ['.navi-menu-btn', 'background-color', 'rgb(55, 55, 55)'],
    [`[class="navi-menu-btn"]>div`, 'background-color', 'white'],
    ['.navi-menu-content', 'border-top', '0.25rem solid rgb(55, 55, 55)'],
    ['.navi-menu-content', 'border-right', '0.1rem solid rgb(55, 55, 55)'],
    ['.navi-menu-content', 'background-color', 'white'],
    [`[class="navi-menu-content"]>button`, 'background-color', 'rgba(0, 0, 0, 0)'],
    [`[class="navi-menu-content"]>button>a`, 'color', 'rgb(55, 55, 55)'],
]
const mobileDark = [
    ['.mobile-header', 'border-bottom', '0.25rem solid white'],
    ['.mobile-header', 'background-color', 'rgb(55, 55, 55)'],
    ['.navi-menu-btn', 'border', '0.25rem solid white'],
    ['.navi-menu-btn', 'background-color', 'white'],
    [`[class="navi-menu-btn"]>div`, 'background-color', 'rgb(55, 55, 55)'],
    ['.navi-menu-content', 'border-top', '0.25rem solid white'],
    ['.navi-menu-content', 'border-right', '0.1rem solid white'],
    ['.navi-menu-content', 'background-color', 'rgb(55, 55, 55)'],
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