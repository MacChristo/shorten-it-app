import Header from "./components/Header";
import Hero from "./components/Hero";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <main className="mt-6 flex flex-col items-center">
        <Header />
        <Hero />
        <Statistics />
      </main>
      <Footer />
    </>
  );
};

export default App;
