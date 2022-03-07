import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Newsletter from "./components/Newsletter";
import Boxes from "./components/Boxes";
import Footer from "./components/Footer";
import ModalEnrollment from "./components/ModalEnrollment";
import devfocus from "./devfocus.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// https:stackoverflow.com/questions/42515739/how-to-create-sections-with-react

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Header />
      <Showcase handleShow={handleShow} devfocus={devfocus} />
      <Newsletter />
      <Boxes />
      <Footer />
      <ModalEnrollment
        show={show}
        onHide={handleClose}
        onClose={handleClose}
        onSubmit={handleClose}
      />
    </>
  );
}

export default App;
