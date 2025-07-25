import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <main style={{ flex: 1 }}>
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
