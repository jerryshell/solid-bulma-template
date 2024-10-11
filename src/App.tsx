import { Show } from 'solid-js'
import './App.css'
import { route } from './GlobalSignal'
import Login from './components/Login'
import NavTop from './components/NavTop'
import NavSide from './components/NavSide'
import Dashboard from './components/Dashboard'
import Books from './components/Books'
import BookCreate from './components/BookCreate'
import BookUpdate from './components/BookUpdate'
import Customers from './components/Customers'
import CustomerCreate from './components/CustomerCreate'
import CustomerUpdate from './components/CustomerUpdate'
import Orders from './components/Orders'
import OrderUpdate from './components/OrderUpdate'

const App = () => {
  return <>
    <Show when={route() === 'Login'}>
      <Login />
    </Show>
    <Show when={route() !== 'Login'}>
      <NavTop />
      <section class="section is-fullheight">
        <div class="columns">
          <div class="column is-4-table is-3-desktop is-2-widescreen">
            <NavSide />
          </div>
          <div class="column">
            <Show when={route() === 'Dashboard'}>
              <Dashboard />
            </Show>
            <Show when={route() === 'Books'}>
              <Books />
            </Show>
            <Show when={route() === 'BookCreate'}>
              <BookCreate />
            </Show>
            <Show when={route() === 'BookUpdate'}>
              <BookUpdate />
            </Show>
            <Show when={route() === 'Customers'}>
              <Customers />
            </Show>
            <Show when={route() === 'CustomerCreate'}>
              <CustomerCreate />
            </Show>
            <Show when={route() === 'CustomerUpdate'}>
              <CustomerUpdate />
            </Show>
            <Show when={route() === 'Orders'}>
              <Orders />
            </Show>
            <Show when={route() === 'OrderUpdate'}>
              <OrderUpdate />
            </Show>
          </div>
        </div>
      </section>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Solid Bulma Template</strong> by <a href="https://github.com/jerryshell" target="_blank">@jerryshell</a>
          </p>
        </div>
      </footer>
    </Show>
  </>
}

export default App
