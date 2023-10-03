import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Offers from "./Components/Offers/Offers";

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainSection}>
        <div>specjaliści</div>
        <Offers />
      </main>
    </>
  );
}

export default App;
