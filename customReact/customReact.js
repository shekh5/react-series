function customRender(reactElement,mainContainer){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.childern
    domElement.setAttribute("href",reactElement.props.href)
    domElement.setAttribute("target",reactElement.props.target)
    mainContainer.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.childern
    for (const prop in reactElement.props) {
        if(prop == 'childern') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}
// end of the day how html is seen by react is like given below.
const reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    childern:"click to visit google"
}

const mainContainer = document.getElementById("root")

// now i want build my own customRender
// customRender take input reactElement and append it to maincontainer 
customRender(reactElement,mainContainer)