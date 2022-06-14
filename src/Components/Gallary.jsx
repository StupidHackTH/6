import styles from "../App.module.scss"
import classNames from "classnames"

export function Gallary (props) {
  const { data } = props
  console.log(data)
  return (
  <main class={styles["comic-panel"]}>
  <For each={data}>
    {(type) => (
      <a
        class={classNames("group", styles["panel-item"], styles["--coming-soon"])}
        href={type.href || "https://facebook.com/stupidhackth"}
      >
        <div>
          <Show when={type.imgSrc} fallback={<p>{type.name}</p>}>
            <img src={type.imgSrc} alt={type.name + " ticket"} />
          </Show>
        </div>
      </a>
    )}
  </For></main>)
}
