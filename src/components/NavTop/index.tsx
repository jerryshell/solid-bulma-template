import { createSignal } from "solid-js"
import { setRoute } from "../../GlobalSignal"

const NavTop = () => {
    const [activeNavbarMenu, setActiveNavbarMenu] = createSignal(false)
    const [activeReportBug, setActiveReportBug] = createSignal(false)
    const [activeReportBugNotification, setActiveReportBugNotification] = createSignal(false)

    const setTheme = (theme: string) => {
        document.documentElement.setAttribute('data-theme', theme)
    }

    return <>
        <nav class="navbar has-shadow">
            <div class="navbar-brand">
                <a class="navbar-item">
                    <figure class="image is-skeleton">
                        <img src="https://placehold.co/400x60" />
                    </figure>
                </a>
                <div
                    class="navbar-burger"
                    onClick={() => setActiveNavbarMenu(!activeNavbarMenu())}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="navbar-menu" classList={{ 'is-active': activeNavbarMenu() }}>
                <div class="navbar-start">
                    <div class="navbar-item">
                        <small>Embrace uncertainty</small>
                    </div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Theme
                        </a>
                        <div class="navbar-dropdown">
                            <a
                                class="navbar-item"
                                onClick={() => setTheme('light')}
                            >
                                <span class="icon">
                                    <i class="fa fa-sun"></i>
                                </span>
                                Light
                            </a>
                            <a
                                class="navbar-item"
                                onClick={() => setTheme('dark')}
                            >
                                <span class="icon">
                                    <i class="fa fa-moon"></i>
                                </span>
                                Dark
                            </a>
                            <a
                                class="navbar-item"
                                onClick={() => setTheme('')}
                            >
                                <span class="icon">
                                    <i class="fa fa-laptop"></i>
                                </span>
                                System
                            </a>
                        </div>
                    </div>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <div class="navbar-link">
                            Admin Jerry
                        </div>
                        <div class="navbar-dropdown">
                            <a
                                class="navbar-item"
                                onClick={() => setActiveReportBug(true)}
                            >
                                <span class="icon">
                                    <i class="fa fa-bug"></i>
                                </span>
                                Report Bug
                            </a>
                            <a
                                class="navbar-item"
                                onClick={() => setRoute('Login')}
                            >
                                <span class="icon">
                                    <i class="fa fa-sign-out"></i>
                                </span>
                                Sign Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="modal" classList={{ 'is-active': activeReportBug() }}>
            <div
                class="modal-background"
                onClick={() => setActiveReportBug(false)}
            ></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Report Bug</p>
                    <button
                        class="delete"
                        onClick={() => setActiveReportBug(false)}
                    ></button>
                </header>
                <section class="modal-card-body">
                    <div
                        class="notification is-success"
                        classList={{ 'is-hidden': !activeReportBugNotification() }}
                    >
                        <span class="fa fa-bug"></span> Thank You. Your bug has been reported.
                    </div>
                    <textarea class="textarea" placeholder="Let us know what problems you faced.">
                    </textarea>
                </section>
                <footer class="modal-card-foot">
                    <div class="buttons">
                        <button
                            class="button is-success"
                            onClick={() => {
                                setActiveReportBugNotification(true)
                                setTimeout(() => setActiveReportBugNotification(false), 3000)
                            }}
                        >
                            Send
                        </button>
                        <button
                            class="button"
                            onClick={() => setActiveReportBug(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    </>
}

export default NavTop
