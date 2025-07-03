import "./App.css";
import Footer from "./components/modules/footer/Footer";
import Navbar from "./components/modules/navbar/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content grows to fill the screen */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
