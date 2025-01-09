import Header from "./components/Header";
import About from "./features/About/About";
import Catalog from "./features/Catalog/Catalog";
import Contacts from "./features/Contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <Catalog />
      <About />
      <Contacts />
    </>
  );
}

export default App;
