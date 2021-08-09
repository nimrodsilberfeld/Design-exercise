import AdditionalInfo from "./components/AdditionalInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <AdditionalInfo/>
      <Footer/>
    </div>
  );
}

export default App;
