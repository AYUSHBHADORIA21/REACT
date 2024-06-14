import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createElement } from 'react'

function MyApp()
{
  return(
    //elements ko tree structure me inject karte hai react par kudh ke custom element pe error de rhe he
    //custom element kese banae vo neche diya hai 3.
    <h1>Ayush Bhadoria</h1>
  )
}
const reactElement = {
  type:'a',
  props:  {
      href : "https://google.com",
      Target: "_blank"
  },
  children:"Click me to visit the site"

}

//this is normal element creataion 
const anotherElement = (
  <a href="https:/google.com"  Target ="_black">Visit Google</a>
)

//react kis tareke ke props use kar rha he  or kis tareke ke element use kar rha he 
const anotherUser = "ayush bhadoria";


//3.
const rreactElement = React.createElement(
  'a' ,
  { href:"https:/google.com" , target:"_blank"},
  "CLicked",
  //yaha upar sara tree ban gya he phele Tag aya , phir props , phir jo kuch print karna he , 
  //uske vadh  variable injestion ate hai 
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  rreactElement 


  // <reactElement />
  // ye glt hai kyu ki ye edhar ham ne custom element banae hai 
  //to usme hamne custom input kiya tha par react inbuilt me </> ye to  apne default attribute lega na 
  //edhar to hamne kudh properties , value , (keys) apne mann se liya hai 
  // ye thodi na reactElement me type se store karega , ye to hamne declare kiya hai 

)
