import { createSignal } from 'solid-js'
import { setRoute } from '../../GlobalSignal'

const Login = () => {
    const [email, setEmail] = createSignal('')
    const [password, setPassword] = createSignal('')

    const submit = () => {
        const data = {
            email: email(),
            password: password()
        }
        console.log(data)
        setRoute('Dashboard')
    }

    return <>
        <section class="hero is-primary is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form
                                class="box"
                                onSubmit={e => e.preventDefault()}
                            >
                                <div class="field has-text-centered">
                                    {/* Text Title */}
                                    {/* <p class="is-5">Solid Bulma Template</p> */}
                                    {/* Image Title */}
                                    <figure class="image is-skeleton">
                                        <img src="https://placehold.co/330x170" />
                                    </figure>
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
                                            placeholder="user@email.com"
                                            value={email()}
                                            onInput={e => setEmail(e.currentTarget.value)}
                                        />
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Password</label>
                                    <div class="control has-icons-left">
                                        <span class="icon">
                                            <i class="fa fa-lock"></i>
                                        </span>
                                        <input
                                            class="input"
                                            type="password"
                                            placeholder="********"
                                            value={password()}
                                            onInput={e => setPassword(e.currentTarget.value)}
                                        />
                                    </div>
                                </div>
                                <div class="field">
                                    <button
                                        class="button is-success"
                                        onClick={submit}
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Login
