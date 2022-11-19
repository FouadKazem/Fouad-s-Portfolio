import '../styles/index.css'
import * as imgs from './modules/imgs'
import { Page } from './modules/page'

const page = new Page(document.styleSheets[0])
const commonLight = [
    ['.themes-btn-slide', 'transform', 'none'],
    ['.themes-btn-slide', 'background-image', `url(${imgs.sunLogo})`],
    ['.themes-btn', 'border', '0.25rem solid rgb(55, 55, 55)'],
    ['.themes-btn', 'background-color', 'white'],
    ['main', 'background-color', 'rgb(189, 189, 189)'],
    [document.querySelector('#tree-scene'), 'src', imgs.treeImgLight],
    ['footer', 'background-color', 'rgb(189, 189, 189)'],
]
const commonDark = [
    ['.themes-btn-slide', 'transform', 'translateX(2.05rem)'],
    ['.themes-btn-slide', 'background-image', `url(${imgs.moonLogo})`],
    ['.themes-btn', 'border', '0.25rem solid white'],
    ['.themes-btn', 'background-color', 'grey'],
    ['main', 'background-color', 'rgb(55, 55, 55)'],
    [document.querySelector('#tree-scene'), 'src', imgs.treeImgDark],
    ['footer', 'background-color', 'rgb(55, 55, 55)'],
]
const desktopLight = [
    ['.desktop-header', 'background-color', 'rgb(189, 189, 189)'],
]
const desktopDark = [
    ['.desktop-header', 'background-color', 'rgb(55, 55, 55)'],
]
const mobileLight = [
    ['.mobile-header', 'background-color', 'rgb(189, 189, 189)'],
    ['.navi-menu-btn', 'background-color', 'rgb(55, 55, 55)'],
    ['.navi-menu-btn', 'border', '0.25rem solid rgb(55, 55, 55)'],
    [`[class="navi-menu-btn"]>div`, 'background-color', 'white'],
    ['.navi-menu-content', 'background-color', 'white'],
    ['.navi-menu-content', 'border-left', '0.25rem solid white'],
    ['.navi-menu-content', 'border-right', '0.25rem solid white'],
    [`[class="navi-menu-content"]>button`, 'background-color', 'white'],
    [`[class="navi-menu-content"]>button`, 'border-bottom', '0.15rem solid rgb(55, 55, 55)'],
    [`[class="navi-menu-content"]>button:first-child`, 'border-top', '0.15rem solid white'],
    [`[class="navi-menu-content"]>button>a`, 'color', 'rgb(55, 55, 55)'],
]
const mobileDark = [
    ['.mobile-header', 'background-color', 'rgb(55, 55, 55)'],
    ['.navi-menu-btn', 'background-color', 'white'],
    ['.navi-menu-btn', 'border', '0.25rem solid white'],
    [`[class="navi-menu-btn"]>div`, 'background-color', 'rgb(55, 55, 55)'],
    ['.navi-menu-content', 'background-color', 'rgb(55, 55, 55)'],
    ['.navi-menu-content', 'border-left', '0.25rem solid rgb(55, 55, 55)'],
    ['.navi-menu-content', 'border-right', '0.25rem solid rgb(55, 55, 55)'],
    [`[class="navi-menu-content"]>button`, 'background-color', 'rgb(55, 55, 55)'],
    [`[class="navi-menu-content"]>button`, 'border-bottom', '0.15rem solid white'],
    [`[class="navi-menu-content"]>button:first-child`, 'border-top', '0.15rem solid rgb(55, 55, 55)'],
    [`[class="navi-menu-content"]>button>a`, 'color', 'white'],
]

if (page.themesBtnState === null || page.themesBtnState === 'left') {
    page.themesBtnState = 'left'
    localStorage.setItem('themesBtnState', 'left')
    page.changeTheme(commonLight)
    if (page.mobileAgent) {
        page.changeTheme(mobileLight)
    }
    else {
        page.changeTheme(desktopLight)
    }
}
else {
    page.changeTheme(commonDark)
    if (page.mobileAgent) {
        page.changeTheme(mobileDark)
    }
    else {
        page.changeTheme(desktopDark)
    }
}

document.body.addEventListener('click', function (e) {
    if (e.target.getAttribute('class') === 'themes-btn' ||
        e.target.parentElement.getAttribute('class') === 'themes-btn') {
        if (page.themesBtnState === 'left') {
            page.themesBtnState = 'right'
            localStorage.setItem('themesBtnState', 'right')
            page.changeTheme(commonDark)
            if (page.mobileAgent) {
                page.changeTheme(mobileDark)
            }
            else {
                page.changeTheme(desktopDark)
            }
        }
        else {
            page.themesBtnState = 'left'
            localStorage.setItem('themesBtnState', 'left')
            page.changeTheme(commonLight)
            if (page.mobileAgent) {
                page.changeTheme(mobileLight)
            }
            else {
                page.changeTheme(desktopLight)
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