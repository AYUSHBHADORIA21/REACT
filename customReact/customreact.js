//ab hamko element dene he isko
//react compile karne ke badh element ko kese dekh ta hai // vo likhenge ab 
//react jo bhi element hai usko tree bana ne ke koshish karega


const reactElement = {
    type:'a',
    props:  {
        href : "https://google.com",
        Target: "_blank"
    },
    children:"Click me to visit the site"

}

function customRender(reactElement , mainContainer)
{
        // const domElement = document.createElement(reactElement.type)
        // domElement.innerHTML = reactElement.children
        // domElement.setAttribute("href" , reactElement.props.href)
        // domElement.setAttribute("Target" , reactElement.props.Target)
        // mainContainer.append(domElement);
        //maan lo agar ek he attribute ho to dekkat ho jaege to apan naya code likhenge loop use karenge

        const domElement = document.createElement(reactElement.type)
        domElement.innerHTML = reactElement.children
        for (const prop in reactElement.props) {
           if(prop ==="children") continue;
           domElement.setAttribute(prop , reactElement.props[prop])
        }

        mainContainer.append(domElement);


}

const mainContainer = document.querySelector("#root") //conection to kar diya 

//ab jo upar wale element ko add karna chata hu root div me kese karu ?

customRender(reactElement , mainContainer);

