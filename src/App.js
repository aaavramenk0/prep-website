import './App.css';
import Aboutus from './components/aboutus/Aboutus';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Success from './components/success/Success';
import Tarifs from './components/tarifs/Tarifs';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Main />
        <Tarifs />
        <Aboutus />
        <Success />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
