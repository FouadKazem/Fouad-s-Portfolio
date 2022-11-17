export const cssRules = new Map()
export let naviMenuState = 'hidden'

export class CSSControler {
    static async setProperty(cssRule, property, value) {
        return new Promise(function (resolve, reject) {
            if (cssRules.get(cssRule)) {
                resolve([cssRule, property, value])
            }
            else {
                reject('Error! Cant find the CSS rule!')
            }
        }).then(function (resolve) {
            cssRules.get(resolve[0]).style.setProperty(resolve[1], resolve[2])
        }).catch(function (err) {
            console.log(err)
        })
    }

    static async setAttribute(HTMLElement, attribute, value) {
        return new Promise(function (resolve, reject) {
            if (HTMLElement) {
                resolve([HTMLElement, attribute, value])
            }
            else {
                reject('Error! Cant find the HTML element!')
            }
        }).then(function (resolve) {
            resolve[0].setAttribute(resolve[1], resolve[2])
        }).catch(function (err) {
            console.log(err)
        })
    }

    static async changeTheme(array) {
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

    static async showHideNaviMenu() {
        if (naviMenuState === 'hidden') {
            naviMenuState = 'visible'
            this.setProperty('.navi-menu-content', 'transform', 'none')
        }
        else {
            naviMenuState = 'hidden'
            this.setProperty('.navi-menu-content', 'transform', 'translateX(-100%)')
        }
    }
}