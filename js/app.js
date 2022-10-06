const styleSheet = document.styleSheets[0]
const themesBtnHtml = document.querySelector(".themes-btn-slide")
let cssRules = new Map()
let themesBtnStyle = null
let themesBtnBorderStyle = null
let themesBtnState = localStorage.getItem('themesBtnState')
for (let i = 0; i < styleSheet.cssRules.length; i++) {
    cssRules.set(styleSheet.cssRules[i].selectorText, styleSheet.cssRules[i])
}
themesBtnStyle = cssRules.get('.themes-btn-slide')
themesBtnBorderStyle = cssRules.get('.themes-btn')

function lightTheme(state) {
    themesBtnState = 'left'
    localStorage.setItem('themesBtnState', 'left')
    themesBtnStyle.style.setProperty('transform', 'none')
    themesBtnStyle.style.setProperty('background-image', 'url("../img/Sun-logo.png")')
    themesBtnBorderStyle.style.setProperty('border', '0.25rem solid rgb(50, 50, 50)')
    themesBtnBorderStyle.style.setProperty('background-color', 'white')
    cssRules.get('.desktop-header').style.setProperty('background-color', 'rgb(0, 128, 255)')
    if (state === 'change') {
        cssRules.get('.desktop-header').style.setProperty('transition', 'background-color 0.5s ease-in-out')
        setTimeout(function () {
            cssRules.get('.desktop-header').style.setProperty('transition', 'none')
        }, 500)
    }
}

function darkTheme(state) {
    themesBtnState = 'right'
    localStorage.setItem('themesBtnState', 'right')
    themesBtnStyle.style.setProperty('transform', 'translateX(2.05rem)')
    themesBtnStyle.style.setProperty('background-image', 'url("../img/Moon-logo.png")')
    themesBtnBorderStyle.style.setProperty('border', '0.25rem solid white')
    themesBtnBorderStyle.style.setProperty('background-color', 'grey')
    cssRules.get('.desktop-header').style.setProperty('background-color', 'rgb(0, 0, 50)')
    if (state === 'change') {
        cssRules.get('.desktop-header').style.setProperty('transition', 'background-color 0.5s ease-in-out')
        setTimeout(function () {
            cssRules.get('.desktop-header').style.setProperty('transition', 'none')
        }, 500)
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

themesBtnHtml.addEventListener('click', function () {
    if (themesBtnState === 'left') {
        darkTheme('change')
    }
    else {
        lightTheme('change')
    }
})