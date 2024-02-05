import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    const location = useLocation();
  return (
    <div className='nav-wrapper container'>
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__list-item'><Link className={`nav__link ${location.pathname==='/' ? 'nav__link_active' : ''}`} to='/'>главная</Link></li>
                <li className='nav__list-item'><a className='nav__link' href="#">компания</a>
                    <ul>
                        <li><a className='nav__link nav__link_dropdown-item' href="">о нас</a></li>
                        <li><a className='nav__link nav__link_dropdown-item' href="">контакты</a></li>
                        <li><a className='nav__link nav__link_dropdown-item' href="">вакансии</a></li>
                        <li><a className='nav__link nav__link_dropdown-item' href="">сотрудничество</a></li>
                    </ul>
                </li>
                <li className='nav__list-item'><a className='nav__link' href="#">сервис</a>
                    <ul>
                        <li><a className='nav__link nav__link_dropdown-item' href="">доставка</a></li>
                        <li><a className='nav__link nav__link_dropdown-item' href="">гарантия</a></li>
                        <li><a className='nav__link nav__link_dropdown-item' href="">оплата</a></li>
                    </ul>
                </li>
                <li className='nav__list-item'><Link className={`nav__link ${location.pathname.includes('/brands') ? 'nav__link_active' : ''}`} to='/brands'>ассортимент</Link></li>
                <li className='nav__list-item'><a className='nav__link' href="#">акции</a></li>
                <li className='nav__list-item'><a className='nav__link' href="#">новости</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav