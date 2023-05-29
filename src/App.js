
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import ExercisePage from "./components/ExercisePage/ExercisePage";
import About from "./components/AboutPage/About";




function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<NavBar onCategoryPage={false} />} />
        <Route path="/categories" element={<NavBar onCategoryPage={true} />} />
        <Route path="/exercises" element={<NavBar onExercisePage={true} />} />
        <Route path="/exercises/:bodypart" element={<NavBar onExercisePage={true} />} />
        <Route path="/about" element={<NavBar onExercisePage={true} />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/exercises" element={<ExercisePage withDynamic={false} />} />
        <Route path="/exercises/:bodypart" element={<ExercisePage withDynamic={true} />} />
        <Route path="/about" element={<About />} />
      </Routes>


      <Footer />

    </div>
  );
}

export default App;
