import { useState } from 'react'
import './Header.scss'
import {useNavigate} from 'react-router'
function Header(){
    const navigate = useNavigate()
    const [isLightMode, setLightMode] = useState(true)
    
    const toggleBodyStyle = () => {
        setLightMode((prev) => !prev);
    
        if (!isLightMode) {
          document.body.style.backgroundColor = "#585858";
        } else {
          document.body.style.backgroundColor = "#fff";
        }
      };
    return(
        <div style={{
            backgroundColor: isLightMode ? "#292929" : "darkolivegreen"
        }} className='Header'>
            <h1 className='header-text'>SPA</h1>
            <div className='buttons-block'>
                <button className="btn" onClick={()=>{
                    navigate('/main-page')
                }}>Головна</button>
                <button className="btn" onClick={()=>{
                    navigate('/contacts')
                }}>Контакти</button>
                <button className="btn" onClick={()=>{
                    navigate('/about-me')
                }}>Про мене</button>
                <button className="btn theme-btn" onClick={()=>{
                    toggleBodyStyle()
                    }}>☯︎</button>
            </div>
        </div>
    )
}
export default Header;