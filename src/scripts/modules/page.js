export class Page {
    constructor(styleSheet) {
        this.cssRules = new Map()
        this.naviMenuState = 'hidden'
        this.themesBtnState = localStorage.getItem('themesBtnState')
        this.userAgent = navigator.userAgent.toLowerCase()
        this.mobileAgent = false
        for (let i = 0; i < styleSheet.cssRules.length; i++) {
            this.cssRules.set(styleSheet.cssRules[i].selectorText.split(' ').join(''),
                styleSheet.cssRules[i])
        }
        if (this.userAgent.indexOf('android') != -1 ||
            this.userAgent.indexOf('iphone') != -1 ||
            this.userAgent.indexOf('ipad') != -1) {
            this.mobileAgent = true
        }
        if (this.mobileAgent) {
            this.setProperty('.desktop-header', 'display', 'none')
        }
        else {
            this.setProperty('.mobile-header', 'display', 'none')
        }
    }

    async setProperty(cssRule, property, value) {
        try {
            this.cssRules.get(cssRule).style.setProperty(property, value)
        }
        catch {
            console.log('Error! No such CSS Rule is existed!')
        }
    }

    async setAttribute(HTMLElement, attribute, value) {
        try {
            HTMLElement.setAttribute(attribute, value)
        }
        catch {
            console.log('Error! Cant find the HTML element!')
        }
    }

    async changeTheme(array) {
        for (let i = 0; i < array.length; i++) {
            let type = typeof array[i][0]
            if (type === 'string') {
                this.setProperty(...array[i])
            }
            else {
                this.setAttribute(...array[i])
            }
        }
    }

    async showHideNaviMenu() {
        if (this.naviMenuState === 'hidden') {
            this.naviMenuState = 'visible'
            this.setProperty('.navi-menu-content', 'transform', 'none')
        }
        else {
            this.naviMenuState = 'hidden'
            this.setProperty('.navi-menu-content', 'transform', 'translateX(-100%)')
        }
    }
}