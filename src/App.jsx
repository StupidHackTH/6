import img from "./assets/banner.webp"
import styles from "./App.module.scss"
import classNames from "classnames"
import { Gallary } from "./Components/Gallary"

import { tickets } from "./data/tickets"
import { sponsors } from "./data/sponsors"

function App() {

  return (
    <div class={classNames("flex flex-col items-center justify-center mt-4 sm:mt-10", styles.App)}>
      <header class={styles.header}>
        <img src={img} alt="THE ៦th STUPID HACKATHON THAILAND" />
        <article class={styles.links}>
          <a href="https://facebook.com/stupidhackth">Facebook</a>
          <a href="https://eventpop.me/e/13089">EventPop</a>
        </article>
      </header>

      <section class="mt-2 mb-2">
        <h2 class="my-2 text-2xl sm:my-8">Tickets</h2>
          <Gallary data={tickets}/>
      </section>

      <section class="mt-2 mb-2">
        <h2 class="my-2 text-2xl sm:my-8">Sponsors</h2>
          <Gallary data={sponsors}/>
      </section>

      <footer class="py-6 uppercase">
        <h4>
          <a href="https://stupidhackth.github.io/" class={classNames("no-underline")}>The Stupid Hackathon Thailand</a>
        </h4>
      </footer>
    </div>
  )
}

export default App
