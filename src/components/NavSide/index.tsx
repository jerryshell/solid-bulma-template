import { setRoute, route } from "../../GlobalSignal"

const NavSide = () => {
    return <>
        <nav class="menu">
            <p class="menu-label">
                Menu
            </p>
            <ul class="menu-list">
                <li>
                    <a
                        onClick={() => setRoute('Dashboard')}
                        classList={{ 'is-active': route() === 'Dashboard' }}
                    >
                        <span class="icon">
                            <i class="fa fa-tachometer"></i>
                        </span>
                        Dashboard
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => setRoute('Books')}
                        classList={{ 'is-active': route() === 'Books' }}
                    >
                        <span class="icon">
                            <i class="fa fa-book"></i>
                        </span>
                        Books
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => setRoute('Customers')}
                        classList={{ 'is-active': route() === 'Customers' }}
                    >
                        <span class="icon">
                            <i class="fa fa-address-book"></i>
                        </span>
                        Customers
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => setRoute('Orders')}
                        classList={{ 'is-active': route() === 'Orders' }}
                    >
                        <span class="icon">
                            <i class="fa fa-file-text"></i>
                        </span>
                        Orders
                    </a>
                </li>
            </ul>
        </nav>
    </>
}

export default NavSide
