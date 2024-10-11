import { createSignal } from "solid-js"
import { setRoute } from "../../GlobalSignal"

const CustomerCreate = () => {
    const [fullName, setFullName] = createSignal<string>('')
    const [email, setEmail] = createSignal<string>('')
    const [address1, setAddress1] = createSignal<string>('')
    const [address2, setAddress2] = createSignal<string>('')
    const [postcode, setPostcode] = createSignal<string>('')
    const [city, setCity] = createSignal<string>('')
    const [country, setCountry] = createSignal<string>('')

    const submit = () => {
        const data = {
            title: fullName(),
            email: email(),
            address1: address1(),
            address2: address2(),
            postcode: postcode(),
            city: city(),
            country: country()
        }
        console.log(data)
    }

    return <>
        <nav class="breadcrumb">
            <ul>
                <li>
                    <a onClick={() => setRoute('Customers')}>
                        Customers
                    </a>
                </li>
                <li class="is-active">
                    <a>New Customer</a>
                </li>
            </ul>
        </nav>
        <form
            onSubmit={e => e.preventDefault()}
        >
            <div class="field">
                <label class="label">Full name</label>
                <div class="control">
                    <input
                        class="input is-large"
                        type="text"
                        placeholder="e.g. Alex Smith"
                        required
                        value={fullName()}
                        onInput={e => setFullName(e.currentTarget.value)}
                    />
                </div>
            </div>
            <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                    <span class="icon">
                        <i class="fa fa-envelope"></i>
                    </span>
                    <input
                        class="input"
                        type="email"
                        placeholder="e.g. alexjohnsong@example.com"
                        required
                        value={email()}
                        onInput={e => setEmail(e.currentTarget.value)}
                    />
                </div>
            </div>
            <div class="field">
                <label class="label">Address</label>
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        placeholder="Number and street name"
                        required
                        value={address1()}
                        onInput={e => setAddress1(e.currentTarget.value)}
                    />
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input
                        class="input"
                        type="text"
                        placeholder="Second address line (optional)"
                        value={address2()}
                        onInput={e => setAddress2(e.currentTarget.value)}
                    />
                </div>
            </div>
            <div class="columns is-desktop">
                <div class="column">
                    <label class="label">Postcode / Zipcode</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            placeholder="e.g. 67202"
                            required
                            value={postcode()}
                            onInput={e => setPostcode(e.currentTarget.value)}
                        />
                    </div>
                </div>
                <div class="column">
                    <label class="label">City</label>
                    <div class="control">
                        <input
                            class="input"
                            type="text"
                            placeholder="e.g. 67202"
                            required
                            value={city()}
                            onInput={e => setCity(e.currentTarget.value)}
                        />
                    </div>
                </div>
                <div class="column">
                    <label class="label">Country</label>
                    <div class="control">
                        <div class="select">
                            <select
                                value={country()}
                                onInput={e => setCountry(e.currentTarget.value)}
                            >
                                <option value="">-- Choose a country --</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>United States</option>
                            </select>
                        </div>
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
                        onClick={() => setRoute('Customers')}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    </>
}

export default CustomerCreate
