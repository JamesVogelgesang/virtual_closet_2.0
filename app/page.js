import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import Closet from "./components/Closet";

export default function Home() {

  return (
    <div className="max-w-screen min-h-screen  box-border">
      <Header />

      <div className="flex justify-between px-40 py-12 gap-10 text-center">
        <div className="border-solid border-2 w-1/3 p-5">
          <SearchBar/>
        </div>
        <div className="border-solid border-2 w-2/3" id="closet_container">
          <Closet/>
        </div>
        
      </div>

      <Footer/>
    </div>
    
  );
}
