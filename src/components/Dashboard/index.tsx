import { For } from "solid-js";
import { setRoute } from "../../GlobalSignal"

const LatestOrdersItem = (props: {
    id: number;
    date: string;
    customer: string;
    total: number;
    status: string;
}) => {
    return <>
        <div class="level">
            <div class="level-left">
                <div>
                    <p class="title is-5 is-spaced">
                        <a
                            onClick={() => setRoute('OrderUpdate')}
                        >
                            {props.id}
                        </a>
                    </p>
                    <p class="subtitle is-7">
                        <span>2024-10-18 17:38 by </span>
                        <a
                            onClick={() => setRoute('CustomerUpdate')}
                        >
                            {props.customer}
                        </a>
                    </p>
                </div>
            </div>
            <div class="level-right">
                <div class="has-text-right">
                    <p class="title is-5">
                        ${props.total}
                    </p>
                    <span
                        class="tag is-warning"
                        classList={{
                            'is-success': props.status === 'Successful',
                            'is-warning': props.status === 'In progress',
                            'is-danger': props.status === 'Failed',
                        }}
                    >
                        {props.status}
                    </span>
                </div>
            </div>
        </div>
    </>
}

const MostPopularBooksItem = (props: {
    name: string;
    isbn: string;
    sold: number;
}) => {
    return <>
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48 is-skeleton">
                    <img src="https://placehold.co/160x210" width="40" />
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-5 is-spaced">
                    <a
                        onClick={() => setRoute('BookUpdate')}
                    >
                        {props.name}
                    </a>
                </p>
                <p class="subtitle is-7">
                    ISBN: {props.isbn}
                </p>
            </div>
            <div class="media-right">
                {props.sold} sold
            </div>
        </div>
    </>
}

const MostLoyalCustomersItem = (props: {
    name: string;
    country: string;
    orders: number;
}) => {
    return <>
        <div class="media">
            <div class="media-content">
                <p class="title is-5 is-spaced">
                    <a
                        onClick={() => setRoute('CustomerUpdate')}
                    >
                        {props.name}
                    </a>
                </p>
                <p class="subtitle is-7">
                    {props.country}
                </p>
            </div>
            <div class="media-right">
                {props.orders} orders
            </div>
        </div>
    </>
}

const LatestOrders = () => {
    const latestOrders = [
        {
            "id": 787352,
            "date": "2024-10-18 17:38",
            "customer": "John Miller",
            "total": 42.98,
            "status": "In progress",
        },
        {
            "id": 289050,
            "date": "2024-10-18 11:45",
            "customer": "Samantha Rogers",
            "total": 22.99,
            "status": "Successful",
        },
        {
            "id": 918478,
            "date": "2024-10-18 21:57",
            "customer": "Simon Jefferson",
            "total": 19.99,
            "status": "Failed",
        },
    ]

    return <>
        <div class="card">
            <div class="card-content">
                <h2 class="title is-4">
                    Latest orders
                </h2>
                <For each={latestOrders}>
                    {(item) => <>
                        <LatestOrdersItem
                            id={item.id}
                            date={item.date}
                            customer={item.customer}
                            total={item.total}
                            status={item.status}
                        />
                    </>}
                </For>
                <a
                    class="button is-link is-outlined"
                    onClick={() => setRoute('Orders')}
                >
                    View all orders
                </a>
            </div>
        </div>
    </>
}

const MostPopularBooks = () => {
    const mostPopularBooks = [
        {
            "name": "Learning Swift",
            "isbn": "9781939902115",
            "sold": 146,
        },
        {
            "name": "TensorFlow For Machine Intelligence",
            "isbn": "9781939902351",
            "sold": 56,
        },
        {
            "name": "Choosing a JavaScript Framework",
            "isbn": "9781939902092",
            "sold": 47,
        },
    ]

    return <>
        <div class="card">
            <div class="card-content">
                <h2 class="title is-4">
                    Most popular books
                </h2>
                <For each={mostPopularBooks}>
                    {(item) => <>
                        <MostPopularBooksItem
                            name={item.name}
                            isbn={item.isbn}
                            sold={item.sold}
                        />
                    </>}
                </For>
                <a
                    class="button is-link is-outlined"
                    onClick={() => setRoute('Books')}
                >
                    View all books
                </a>
            </div>
        </div>
    </>
}

const MostLoyalCustomers = () => {
    const mostLoyalCustomers = [
        {
            "name": "John Miller",
            "country": "United States",
            "orders": 7,
        },
        {
            "name": "Samantha Rogers",
            "country": "United Kingdom",
            "orders": 5,
        },
        {
            "name": "Paul Jacques",
            "country": "Canada",
            "orders": 2,
        },
    ]

    return <>
        <div class="card">
            <div class="card-content">
                <h2 class="title is-4">
                    Most loyal customers
                </h2>
                <For each={mostLoyalCustomers}>
                    {(item) => <>
                        <MostLoyalCustomersItem
                            name={item.name}
                            country={item.country}
                            orders={item.orders}
                        />
                    </>}
                </For>
                <a
                    class="button is-link is-outlined"
                    onClick={() => setRoute('Customers')}
                >
                    View all customers
                </a>
            </div>
        </div>
    </>
}

const Dashboard = () => {
    const stats = {
        "orders": 232,
        "revenue": 7648,
        "visitors": 1678,
        "pageviews": 20756,
    }

    return <>
        <div class="level">
            <div class="level-left">
                <h1 class="subtitle is-3">
                    <span class="has-text-grey-light">Hello</span> <strong>Jerry</strong>
                </h1>
            </div>
            <div class="level-right">
                <div class="select">
                    <select>
                        <option>Today</option>
                        <option>Yesterday</option>
                        <option>This Week</option>
                        <option selected>This Month</option>
                        <option>This Year</option>
                        <option>All Time</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="columns is-multiline">
            <div class="column is-12-tablet is-6-desktop is-3-widescreen">
                <div class="notification is-link has-text">
                    <p class="title is-1">{stats.orders.toLocaleString()}</p>
                    <p class="subtitle is-4">Orders</p>
                </div>
            </div>
            <div class="column is-12-tablet is-6-desktop is-3-widescreen">
                <div class="notification is-info has-text">
                    <p class="title is-1">${stats.revenue.toLocaleString()}</p>
                    <p class="subtitle is-4">Revenue</p>
                </div>
            </div>
            <div class="column is-12-tablet is-6-desktop is-3-widescreen">
                <div class="notification is-primary has-text">
                    <p class="title is-1">{stats.visitors.toLocaleString()}</p>
                    <p class="subtitle is-4">Visitors</p>
                </div>
            </div>
            <div class="column is-12-tablet is-6-desktop is-3-widescreen">
                <div class="notification is-success has-text">
                    <p class="title is-1">{stats.pageviews.toLocaleString()}</p>
                    <p class="subtitle is-4">Pageviews</p>
                </div>
            </div>
            <div class="column is-12-tablet is-6-desktop is-4-fullhd">
                <LatestOrders />
            </div>
            <div class="column is-12-tablet is-6-desktop is-4-fullhd">
                <MostPopularBooks />
            </div>
            <div class="column is-12-tablet is-6-desktop is-4-fullhd">
                <MostLoyalCustomers />
            </div>
        </div>
    </>
}

export default Dashboard
