import './Header.scss'
import {useTheme} from '../ThemeContext'
import {useNavigate} from 'react-router'
function Header(){
    const { isLightMode, toggleTheme } = useTheme();
    const navigate = useNavigate()
    
    return(
        <div className={`header-container-${isLightMode ? "light" : "dark"}`}>
            <div className="Header">
            <h1 className='header-text'>SPA</h1>
            <div className='buttons-block'>
                <button className="btn" onClick={()=>{
                    navigate('/main-page')
                }}>Головна</button>
                <button className="btn" onClick={()=>{
                    navigate('/swapi')
                }}>API запрос</button>
                <button className="btn" onClick={()=>{
                    navigate('/todo-list')
                }}>Заметки</button>
                <button className="btn theme-btn" onClick={toggleTheme}>☯︎</button>
            </div>
        </div>
        </div>
    )
}
export default Header;