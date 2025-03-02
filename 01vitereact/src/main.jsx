import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App!!</h1>
        </div>
    )
} //At the end of the day this function or any function written here would be converted into the react element type by bundler

// const ReactElement = {//As any function converts(parse) into this type of function so is that mean we can write this function directly here??? ANS- NO!!! This won't work as it is a object defined by us so raect can't understand it (we were writing another function named customRender to make it work)  
//     type: 'a', 
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }

const anotherElement = (

    <a href="https://google.com" target='_blank'>Visit Google</a>
)

// REACT KE HISAB SE PROPS WALA OBJECT BANAYENGE(this is special syntax)
const ReactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'click me to visit Google'
)


ReactDOM.createRoot(document.getElementById('root')).render(

    //<MyApp />
    //MyApp() // as it is a function it can also be written like this
    // anotherElement
    // ReactElement
    <App />
)
