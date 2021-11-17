import "./styles.css";
import Header from "./Components/Header.js";
import Content from "./Components/Content.js";
import Footer from "./Components/Footer.js";
export default function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
