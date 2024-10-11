import { For } from "solid-js";
import { setRoute } from "../../GlobalSignal";

const Toolbar = () => {
    return <>
        <nav class="level">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">
                        <strong>3</strong> customers
                    </p>
                </div>
                <p class="level-item">
                    <a
                        class="button is-success"
                        onClick={() => setRoute('CustomerCreate')}
                    >
                        New
                    </a>
                </p>
                <div class="level-item is-hidden-tablet-only">
                    <div class="field has-addons">
                        <p class="control">
                            <input class="input" type="text" placeholder="Name, email..." />
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
                    <a>With orders</a>
                </div>
                <div class="level-item">
                    <a>Without orders</a>
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

const CustomerItem = (props: {
    name: string;
    email: string;
    country: string;
    orders: number;
}) => {
    return <>
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <a
                    onClick={() => setRoute('CustomerUpdate')}
                >
                    <strong>{props.name}</strong>
                </a>
            </td>
            <td>
                <code>{props.email}</code>
            </td>
            <td>{props.country}</td>
            <td>
                <a>{props.orders}</a>
            </td>
            <td>
                <div class="buttons">
                    <a
                        class="button is-small"
                        onClick={() => setRoute('CustomerUpdate')}
                    >
                        Edit
                    </a>
                    <a class="button is-small">Delete</a>
                </div>
            </td>
        </tr>
    </>
}

const Customers = () => {
    const customers = [
        {
            "name": "John Miller",
            "email": "johnmiller@example.com",
            "country": "United States",
            "orders": 2,
        },
        {
            "name": "Samantha Rogers",
            "email": "samrogers@example.com",
            "country": "United Kingdom",
            "orders": 5,
        },
        {
            "name": "Paul Jacques",
            "email": "paul.jacques@example.com",
            "country": "Canada",
            "orders": 2,
        }
    ]

    return <>
        <h1 class="title">Customers</h1>
        <Toolbar />
        <table class="table is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th class="is-narrow">
                        <input type="checkbox" />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Orders</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <For each={customers}>
                    {(item) => <>
                        <CustomerItem
                            name={item.name}
                            email={item.email}
                            country={item.country}
                            orders={item.orders}
                        />
                    </>}
                </For>
            </tbody>
        </table>
        <Pagination />
    </>
}

export default Customers
