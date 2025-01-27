import './Header.scss'
import {useNavigate} from 'react-router'
function Header(){
    const navigate = useNavigate()
    return(
        <div className='Header'>
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
                <button className="btn theme-btn">☯︎</button>
            </div>
        </div>
    )
}
export default Header;