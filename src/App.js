import React, { useState, useEffect } from "react";
import Background from './components/Background.js'; // Import Background component
import backgroundVideo from './Assets/Desain tanpa judul.mp4'; // Path ke video background
import Preloader from "./components/Pre"; // Komponen Preloader
import Navbar from "./components/Navbar"; // Navbar buatan sendiri
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Untuk dokumen PDF jika diperlukan

// **Tambahkan import PDF.js di sini**
import * as pdfjsLib from "pdfjs-dist"; 

// **Konfigurasi path PDF.js worker**
pdfjsLib.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

function App() {
  const [load, updateLoad] = useState(true); // State untuk preloader

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false); // Mengubah state preloader setelah 1,2 detik
    }, 1200);

    return () => clearTimeout(timer); // Membersihkan timer ketika komponen di-unmount
  }, []);

  return (
    <Router>
      <Preloader load={load} /> {/* Komponen Preloader */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Background videoSrc={backgroundVideo} /> {/* Komponen Background */}
        <Navbar /> {/* Navbar */}
        <ScrollToTop /> {/* Fungsi scroll ke atas */}
        <Routes> {/* Daftar rute */}
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect rute tidak dikenal */}
        </Routes>
        <Footer /> {/* Footer */}
      </div>
    </Router>
  );
}

export default App;
