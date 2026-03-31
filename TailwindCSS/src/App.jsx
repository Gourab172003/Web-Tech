import Header from "./assets/components/header";
import Body from "./assets/components/body";
import Footer from "./assets/components/footer";

function App() {
  return (
    <>
      <div className="bg-[#fef9c3] min-h-screen px-6 py-3 flex flex-col gap-16">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;