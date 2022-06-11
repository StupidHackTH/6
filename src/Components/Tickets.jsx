import earlyBirdImg from "../assets/tickets/b0_earlybird.png"
import styles from "../App.module.scss"
import classNames from "classnames"

export function Tickets () {
  const ticketTypes = [
    {
      name: "Early Bird",
      href: "https://web.facebook.com/505764236423154/posts/pfbid02VLgLbiSm9VeBYfDG4ueYNK9pVDazLyDB1jDsUqpjUKAVN3dwkuLpJdkw9uqzugZkl",
      imgSrc: earlyBirdImg,
    },
    {name: "Batch 1",},
    {name: "Batch 2"},
    {name: "Batch 3"},
    {name: "Batch 4"},
    {name: "Batch 5"}
  ]
  return (
  <main class={styles["comic-panel"]}>
  <For each={ticketTypes}>
    {(type) => (
      <a
        class={classNames("group", styles["panel-item"], styles["--coming-soon"])}
        href={type.href || "https://facebook.com/stupidhackth"}
      >
        <div>
          <Show when={type.imgSrc} fallback={<p>Coming Soon...</p>}>
            <img src={earlyBirdImg} alt="Early Bird Ticket" />
          </Show>
        </div>
      </a>
    )}
  </For></main>)
}
