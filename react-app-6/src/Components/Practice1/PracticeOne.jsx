import {createContext,useContext} from "react";
const ColorContext = createContext({color: "yellow"})

const nameText = <p>Ф.И.O</p>
const Header = ()=>{
    const color = useContext(ColorContext);
    return(
        <div>
            {nameText}
            <ul>
                <li style={color}>Main</li>
                <li style={color}>Todo list</li>
                <li style={color}>Maket</li>
                <li style={color}>Contacts</li>
            </ul>
        </div>
    );
}

const Main = ()=>{
    return(
        <div>
            Main content
        </div>
    );
}
const Footer = ()=>{
    const color = useContext(ColorContext);
    return(
        <div>
            {nameText}
            <ul>
                <li><p style={color}>+123123123</p></li>
                <li><p style={color}>someone@example.com</p></li>
                <li><p style={color}>https://github/</p></li>
            </ul>
        </div>
    );
}
function PracticeOne(){
    return(
        <ColorContext.Provider value={{color: "yellow"}}>
            <Header />
            <Main />
            <Footer />
        </ColorContext.Provider>
    );
}
export default PracticeOne;