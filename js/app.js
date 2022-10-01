const styleSheet = document.styleSheets[0]
const themesBtnHtml = document.querySelector(".themes-btn-slide")
let themesBtnStyle = null
for(let i = 0; i < styleSheet.cssRules.length; i++)
{
    if(styleSheet.cssRules[i].selectorText === '.themes-btn-slide')
    {
        themesBtnStyle = styleSheet.cssRules[i]
    }
}
console.log(themesBtnStyle)
let themesBtnState = localStorage.getItem('themesBtnState')
if(themesBtnState === null)
{
    themesBtnState = 'left'
    localStorage.setItem('themesBtnState', 'left')
}
else
{
    if(themesBtnState === 'right')
    {
        themesBtnStyle.style.setProperty('transform', 'translateX(2rem)')
    }
}

themesBtnHtml.addEventListener('click', function() {
    if(themesBtnState === 'left')
    {
        themesBtnState = 'right'
        localStorage.setItem('themesBtnState', 'right')
        themesBtnStyle.style.setProperty('transform', 'translateX(2rem)')
        /*

        Insert Code to change styling to dark theme

        */
    }
    else
    {
        themesBtnState = 'left'
        localStorage.setItem('themesBtnState', 'left')
        themesBtnStyle.style.setProperty('transform', 'none')
        /*

        Insert Code to change styling to light theme

        */
    }
})