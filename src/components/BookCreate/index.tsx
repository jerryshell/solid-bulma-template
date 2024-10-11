import { createSignal } from "solid-js"
import { setRoute } from "../../GlobalSignal"

const BookCreate = () => {
    const [title, setTitle] = createSignal<string>('')
    const [price, setPrice] = createSignal<number>()
    const [pages, setPages] = createSignal<number>()
    const [isbn, setIsbn] = createSignal<string>('')
    const [file, setFile] = createSignal<File>()

    const submit = () => {
        const data = {
            title: title(),
            price: price(),
            pages: pages(),
            isbn: isbn(),
            file: file(),
        }
        console.log(data)
    }

    return <>
        <nav class="breadcrumb">
            <ul>
                <li>
                    <a onClick={() => setRoute('Books')}>
                        Books
                    </a>
                </li>
                <li class="is-active">
                    <a>New Book</a>
                </li>
            </ul>
        </nav>
        <form
            onSubmit={e => e.preventDefault()}
        >
            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <input
                        class="input is-large"
                        type="text"
                        placeholder="e.g. Designing with Bulma"
                        required
                        value={title()}
                        onInput={e => setTitle(e.currentTarget.value)}
                    />
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column">
                    <label class="label">Price</label>
                    <div class="control has-icons-left">
                        <span class="icon">
                            <i class="fa fa-dollar"></i>
                        </span>
                        <input
                            class="input"
                            type="number"
                            step="0.01"
                            placeholder="e.g. 22.99"
                            required
                            value={price()}
                            onInput={e => setPrice(Number(e.currentTarget.value))}
                        />
                    </div>
                </div>
                <div class="column">
                    <label class="label">Pages</label>
                    <div class="control">
                        <input
                            class="input"
                            type="number"
                            placeholder="e.g. 270"
                            required
                            value={pages()}
                            onInput={e => setPages(Number(e.currentTarget.value))}
                        />
                    </div>
                </div>
                <div class="column">
                    <label class="label">ISBN</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            placeholder="e.g. 9781939902351"
                            required
                            value={isbn()}
                            onInput={e => setIsbn(e.currentTarget.value)}
                        />
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="label">Cover image</label>
                <div class="control">
                    <div class="file has-name">
                        <label class="file-label">
                            <input
                                class="file-input"
                                type="file"
                                onChange={e => {
                                    if (e.currentTarget.files) {
                                        setFile(e.currentTarget.files[0])
                                    }
                                }}
                            />
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fa fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Choose a file...
                                </span>
                            </span>
                            <span class="file-name">
                                {file() ? file()!.name : 'No file chosen'}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="field">
                <div class="buttons">
                    <button
                        class="button is-medium is-success"
                        onClick={submit}
                    >
                        Create
                    </button>
                    <button
                        class="button is-medium is-light"
                        onClick={() => setRoute('Books')}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    </>
}

export default BookCreate
