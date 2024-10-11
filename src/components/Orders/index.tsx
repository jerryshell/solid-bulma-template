import { For } from "solid-js";
import { setRoute } from "../../GlobalSignal";

const Toolbar = () => {
    return <>
        <nav class="level">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">
                        <strong>2</strong> orders
                    </p>
                </div>
                <div class="level-item is-hidden-tablet-only">
                    <div class="field has-addons">
                        <p class="control">
                            <input class="input" type="text" placeholder="Order #, customer..." />
                        </p>
                        <p class="control">
                            <button class="button">
                                Search
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <strong>All</strong>
                </div>
                <div class="level-item">
                    <a>In progress</a>
                </div>
                <div class="level-item">
                    <a>Successful</a>
                </div>
                <div class="level-item">
                    <a>Failed</a>
                </div>
            </div>
        </nav>
    </>
}

const Pagination = () => {
    return <>
        <nav class="pagination">
            <ul class="pagination-list">
                <li>
                    <a class="pagination-link">1</a>
                </li>
                <li>
                    <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <a class="pagination-link">45</a>
                </li>
                <li>
                    <a class="pagination-link is-current">46</a>
                </li>
                <li>
                    <a class="pagination-link">47</a>
                </li>
                <li>
                    <span class="pagination-ellipsis">&hellip;</span>
                </li>
                <li>
                    <a class="pagination-link">86</a>
                </li>
            </ul>
            <a class="pagination-previous">Previous</a>
            <a class="pagination-next">Next page</a>
        </nav>
    </>
}

const OrderItem = (props: {
    id: number;
    customer: string;
    date: string;
    books: number;
    status: string;
    total: number;
}) => {
    return <>
        <tr>
            <td>
                <a
                    onClick={() => setRoute('OrderUpdate')}
                >
                    <strong>{props.id}</strong>
                </a>
            </td>
            <td>
                <a
                    onClick={() => setRoute('CustomerUpdate')}
                >
                    {props.customer}
                </a>
            </td>
            <td>{props.date}</td>
            <td>{props.books}</td>
            <td>
                <span
                    class="tag"
                    classList={{
                        'is-success': props.status === 'Successful',
                        'is-warning': props.status === 'In progress',
                        'is-danger': props.status === 'Failed',
                    }}
                >
                    {props.status}
                </span>
            </td>
            <td class="has-text-right">${props.total}</td>
        </tr>
    </>
}

const Orders = () => {
    const orders = [
        {
            id: 787352,
            customer: 'John Miller',
            date: '2024-10-18 17:38',
            books: 2,
            status: 'In progress',
            total: 56.98,
        },
        {
            id: 289050,
            customer: 'John Miller',
            date: '2024-10-16 11:45',
            books: 1,
            status: 'Successful',
            total: 21.99,
        },
    ]

    return <>
        <h1 class="title">Orders</h1>
        <Toolbar />
        <table class="table is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Order #</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Books</th>
                    <th>Status</th>
                    <th class="has-text-right">Total</th>
                </tr>
            </thead>
            <tbody>
                <For each={orders}>
                    {(item) => <>
                        <OrderItem
                            id={item.id}
                            customer={item.customer}
                            date={item.date}
                            books={item.books}
                            status={item.status}
                            total={item.total}
                        />
                    </>}
                </For>
            </tbody>
        </table>
        <Pagination />
    </>
}

export default Orders
