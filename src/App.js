import Banner from './components/Banner';
import Cashback from './components/Cashback';
import Footer from './components/Footer';
import Header from './components/Header';
import ReferSection from './components/ReferSection';
import WatchDemo from './components/WatchDemo';
import './style.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <WatchDemo />
        <ReferSection />
        <Cashback />
      </main>
      <Footer />
    </>
  );
}

export default App;
