import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Skills } from "./Pages/Skills";
import { Resume } from "./Pages/Resume";
import { Contact } from "./Pages/Contact";
import { Work } from "./Pages/Work";
import { ErrorPage } from "./Pages/ErrorPage";
import { AppLayout } from "./Components/Layout/AppLayout";
import ScrollToTop from "./scrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
             <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
