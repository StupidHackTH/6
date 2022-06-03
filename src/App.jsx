import img from './assets/img.png';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={img} alt=""/>
        <h1 class={styles.title}>STAY TUNED</h1>
        <div class={styles.links}>
          <a href="https://facebook.com/stupidhackth">FACEBOOK</a>
          <a href="https://eventpop.me">EVENTPOP</a>
        </div>
      </header>
      <footer>
        <h4>THE STUPID HACKATHON THAILAND</h4>
      </footer>
    </div>
  );
}

export default App;
