import img from "./assets/banner.webp"
import earlybirdImg from "./assets/tickets/earlybird.jpg"
import styles from "./App.module.scss"
import classNames from "classnames"

function App() {
  return (
    <div class={classNames("flex flex-col items-center justify-center", styles.App)}>
      <header class={styles.header}>
        <img src={img} alt="THE ៦th STUPID HACKATHON THAILAND" />
        <h1 class={classNames("mb-2 text-4xl uppercase sm:text-6xl", styles.title)}>Stay Tuned</h1>
        <article class={styles.links}>
          <a href="https://facebook.com/stupidhackth">Facebook</a>
          <a href="https://eventpop.me/e/13089">EventPop</a>
        </article>
      </header>

      <section class="mt-4 mb-2">
        <h2 class="my-2 text-2xl sm:my-8">Tickets</h2>

        <main class={styles["comic-panel"]}>
          <a
            class={classNames("group", styles["panel-item"], styles["--black"])}
            href="https://facebook.com/stupidhackth"
          >
            <div>
              {/* <img src={earlybirdImg} alt="Early Bird Ticket" /> */}
              <p>Coming Soon...</p>
            </div>
          </a>

          <a
            class={classNames("group", styles["panel-item"], styles["--black"])}
            href="https://facebook.com/stupidhackth"
          >
            <div>
              <p>Coming Soon...</p>
            </div>
          </a>

          <a
            class={classNames("group", styles["panel-item"], styles["--black"])}
            href="https://facebook.com/stupidhackth"
          >
            <div>
              <p>Coming Soon...</p>
            </div>
          </a>

          <a
            class={classNames("group", styles["panel-item"], styles["--black"])}
            href="https://facebook.com/stupidhackth"
          >
            <div>
              <p>Coming Soon...</p>
            </div>
          </a>
        </main>
      </section>

      <footer class="py-6 uppercase">
        <h4>The Stupid Hackathon Thailand</h4>
      </footer>
    </div>
  )
}

export default App
