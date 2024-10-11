import { For } from "solid-js";
import { setRoute } from "../../GlobalSignal";

const Toolbar = () => {
    return <>
        <nav class="level">
            <div class="level-left">
                <div class="level-item">
                    <p class="subtitle is-5">
                        <strong>6</strong> books
                    </p>
                </div>
                <p class="level-item">
                    <a
                        class="button is-success"
                        onClick={() => setRoute('BookCreate')}
                    >
                        New
                    </a>
                </p>
                <div class="level-item is-hidden-tablet-only">
                    <div class="field has-addons">
                        <p class="control">
                            <input class="input" type="text" placeholder="Book name, ISBN..." />
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
                    Order by
                </div>
                <div class="level-item">
                    <div class="select">
                        <select>
                            <option>Publish date</option>
                            <option>Price</option>
                            <option>Page count</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

const BookItem = (props: {
    name: string;
    price: number;
    pages: number;
    isbn: string;
}) => {
    return <>
        <article class="box">
            <div class="media">
                <aside class="media-left">
                    <figure class="image is-128x128 is-skeleton">
                        <img src="https://placehold.co/160x210" width="140" />
                    </figure>
                </aside>
                <div class="media-content">
                    <p class="title is-5 is-spaced">
                        <a
                            onClick={() => setRoute('BookUpdate')}
                        >
                            {props.name}
                        </a>
                    </p>
                    <p class="subtitle">
                        ${props.price}
                    </p>
                    <div class="content is-small">
                        {props.pages} pages
                        <br />
                        ISBN: {props.isbn}
                        <br />
                        <br />
                        <div class="buttons">
                            <a
                                class="button is-small"
                                onClick={() => setRoute('BookUpdate')}
                            >
                                Edit
                            </a>
                            <a class="button is-small">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
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

const Books = () => {
    const books = [
        {
            "name": "TensorFlow For Machine Intelligence",
            "price": 22.99,
            "pages": 270,
            "isbn": "9781939902351",
        },
        {
            "name": "Docker in Production",
            "price": 22.99,
            "pages": 156,
            "isbn": "9781939902184",
        },
        {
            "name": "Developing a Gulp.js Edge",
            "price": 22.99,
            "pages": 134,
            "isbn": "9781939902146",
        },
        {
            "name": "Learning Swift",
            "price": 22.99,
            "pages": 342,
            "isbn": "9781939902115",
        },
        {
            "name": "Choosing a JavaScript Framework",
            "price": 19.99,
            "pages": 96,
            "isbn": "9781939902092",
        },
        {
            "name": "Deconstructing Google Cardboard Apps",
            "price": 22.99,
            "pages": 178,
            "isbn": "9781939902245",
        },
    ]

    return <>
        <h1 class="title">Books</h1>
        <Toolbar />
        <div class="columns is-multiline">
            <For each={books}>
                {(item) => <>
                    <div class="column is-12-tablet is-6-desktop is-4-widescreen">
                        <BookItem
                            name={item.name}
                            price={item.price}
                            pages={item.pages}
                            isbn={item.isbn}
                        />
                    </div>
                </>}
            </For>
        </div>
        <Pagination />
    </>
}

export default Books
