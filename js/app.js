const styleSheet = document.styleSheets[0]
const themesBtnHtml = document.querySelector(".themes-btn-slide")
let themesBtnStyle = null
let themesBtnBorderStyle = null
for(let i = 0; i < styleSheet.cssRules.length; i++)
{
    if(styleSheet.cssRules[i].selectorText === '.themes-btn-slide')
    {
        themesBtnStyle = styleSheet.cssRules[i]
    }
    else if(styleSheet.cssRules[i].selectorText === '.themes-btn')
    {
        themesBtnBorderStyle = styleSheet.cssRules[i]
    }
}
//console.log(themesBtnStyle)
let themesBtnState = localStorage.getItem('themesBtnState')
if(themesBtnState === null)
{
    themesBtnState = 'left'
    localStorage.setItem('themesBtnState', 'left')
    themesBtnStyle.style.setProperty('background-image', 'url("../img/Sun-logo.png")')
}
else
{
    if(themesBtnState === 'right')
    {
        themesBtnStyle.style.setProperty('transform', 'translateX(2rem)')
        themesBtnStyle.style.setProperty('background-image', 'url("../img/Moon-logo.png")')
        themesBtnBorderStyle.style.setProperty('border', '0.25rem solid white')
        themesBtnBorderStyle.style.setProperty('background-color', 'grey')
    }
    else
    {
        themesBtnStyle.style.setProperty('transform', 'none')
        themesBtnStyle.style.setProperty('background-image', 'url("../img/Sun-logo.png")')
    }
}

themesBtnHtml.addEventListener('click', function() {
    if(themesBtnState === 'left')
    {
        themesBtnState = 'right'
        localStorage.setItem('themesBtnState', 'right')
        themesBtnStyle.style.setProperty('transform', 'translateX(2rem)')
        themesBtnStyle.style.setProperty('background-image', 'url("../img/Moon-logo.png")')
        themesBtnBorderStyle.style.setProperty('border', '0.25rem solid white')
        themesBtnBorderStyle.style.setProperty('background-color', 'grey')
        /*

        Insert Code to change styling to dark theme

        */
    }
    else
    {
        themesBtnState = 'left'
        localStorage.setItem('themesBtnState', 'left')
        themesBtnStyle.style.setProperty('transform', 'none')
        themesBtnStyle.style.setProperty('background-image', 'url("../img/Sun-logo.png")')
        themesBtnBorderStyle.style.setProperty('border', '0.25rem solid rgb(50, 50, 50)')
        themesBtnBorderStyle.style.setProperty('background-color', 'white')
        /*

        Insert Code to change styling to light theme

        */
    }
})