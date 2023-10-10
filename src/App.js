import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Specialists from "./Components/Specialists/Specialists";
import Offers from "./Components/Offers/Offers";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainSection}>
        <Specialists />
        <Offers />
      </main>
      <Footer />
    </>
  );
}

export default App;
