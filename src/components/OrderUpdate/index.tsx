import { setRoute } from "../../GlobalSignal"
import { createEffect, createSignal, For } from "solid-js"

const OrderUpdate = () => {
    const [order, setOrder] = createSignal<any>()

    createEffect(() => {
        const order = {
            id: 787352,
            date: '2024-10-18 17:38',
            status: 'In progress',
            total: 62.97,
            customer: {
                name: 'John Miller',
                email: 'mRg7O@example.com',
                address1: '55 Longbridge Road',
                address2: '',
                postcode: '78170',
                city: 'Los Angeles',
                country: 'United States',
            },
            books: [
                {
                    "name": "TensorFlow For Machine Intelligence",
                    "coverImage": "https://placehold.co/160x210",
                    "price": 22.99,
                    "amount": 1,
                    "total": 22.99,
                },
                {
                    "name": "Choosing a JavaScript Framework",
                    "coverImage": "https://placehold.co/160x210",
                    "price": 19.99,
                    "amount": 2,
                    "total": 39.98,
                },
            ]
        }
        setOrder(order)
    })

    return <>
        <nav class="breadcrumb">
            <ul>
                <li>
                    <a
                        onClick={() => setRoute('Orders')}
                    >
                        Orders
                    </a>
                </li>
                <li class="is-active">
                    <a>Edit order</a>
                </li>
            </ul>
        </nav>
        <h1 class="subtitle is-3">
            <span class="has-text-grey-light">Order</span> <strong>{order()?.id}</strong>
        </h1>
        <div class="columns is-desktop">
            <div class="column content is-4-desktop is-3-widescreen">
                <h5>
                    <strong>Date</strong>
                </h5>
                <p>{order()?.date}</p>
                <br />
                <h5>
                    <strong>Status</strong>
                </h5>
                <div class="buttons">
                    <button
                        class="button is-small is-warning"
                        classList={{ 'is-outlined': order()?.status !== 'In progress' }}
                        onClick={() => setOrder({
                            ...order(),
                            status: 'In progress',
                        })}
                    >
                        In progress
                    </button>
                    <button
                        class="button is-small is-success is-outlined"
                        classList={{ 'is-outlined': order()?.status !== 'Successful' }}
                        onClick={() => setOrder({
                            ...order(),
                            status: 'Successful',
                        })}
                    >
                        Successful
                    </button>
                    <button
                        class="button is-small is-danger is-outlined"
                        classList={{ 'is-outlined': order()?.status !== 'Failed' }}
                        onClick={() => setOrder({
                            ...order(),
                            status: 'Failed',
                        })}
                    >
                        Failed
                    </button>
                </div>
                <br />
                <h5>
                    <strong>Customer</strong>
                </h5>
                <p>
                    <strong>
                        <a
                            onClick={() => setRoute('CustomerUpdate')}
                        >
                            {order()?.customer.name}
                        </a>
                    </strong>
                    <br />
                    <code>{order()?.customer.email}</code>
                    <br />
                    {order()?.customer.address1} {order()?.customer.address2}
                    <br />
                    {order()?.customer.postcode} {order()?.customer.city}
                    <br />
                    {order()?.customer.country}
                </p>
            </div>
            <div class="column">
                <h5>
                    <strong>Books</strong>
                </h5>
                <table class="table is-borderd is-fullwidth">
                    <thead>
                        <tr>
                            <th class="is-narrow">Cover</th>
                            <th>Title</th>
                            <th class="has-text-right is-narrow">Price</th>
                            <th class="has-text-right is-narrow">Amount</th>
                            <th class="has-text-right is-narrow">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <For each={order()?.books}>
                            {(item) => <>
                                <tr>
                                    <td>
                                        <figure class="image is-48x48 is-skeleton">
                                            <img src={item.coverImage} width="40" />
                                        </figure>
                                    </td>
                                    <td>
                                        <a
                                            onClick={() => setRoute('BookUpdate')}
                                        >
                                            <strong>{item.name}</strong>
                                        </a>
                                    </td>
                                    <td class="has-text-right">
                                        ${item.price}
                                    </td>
                                    <td class="has-text-right">
                                        <input
                                            class="input is-small"
                                            type="number"
                                            value={item.amount}
                                        />
                                    </td>
                                    <td class="has-text-right">
                                        ${item.total}
                                    </td>
                                </tr>
                            </>}
                        </For>
                        <tr>
                            <td colspan="5">
                                <div class="field is-grouped is-grouped-right">
                                    <div class="control">
                                        <div class="select is-small">
                                            <select>
                                                <option>TensorFlow For Machine Intelligence</option>
                                                <option>Docker in Production</option>
                                                <option>Developing a Gulp.js Edge</option>
                                                <option>Learning Swift</option>
                                                <option>Choosing a JavaScript Framework</option>
                                                <option>Deconstructing Google Cardboard Apps</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="control">
                                        <input class="input is-small" type="number" value="1" placeholder="Amount" />
                                    </div>
                                    <div class="control">
                                        <a class="button is-small is-link">Add book</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="5" class="has-text-right">${order()?.total}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </>
}

export default OrderUpdate
