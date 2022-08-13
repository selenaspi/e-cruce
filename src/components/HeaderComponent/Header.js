import './headerStyle.css'
const burgerMenu = 'images/icons/menu.png'
const logo = 'images/cruce.png'
const cart = 'images/icons/carrito.png'
const close = 'images/icons/cerrar-white.png'

function Header() {
    return (
        <header className='main-header'>
            <nav className='nav-bar-conteiner'>
                <ul>
                    <li><img src={burgerMenu} className="burger-menu" /></li>
                    <li><img src={logo} className="logo" /></li>
                    <li><img src={cart} className="cart" /></li>
                </ul>
            </nav>
            <aside><p>Mantené pulsado cualquier artículo para agregarlo al carrito</p><span><img src={close} className="close" /></span></aside>
        </ header>
    );
}

export default Header;