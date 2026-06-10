import './App.css';
import { HeaderMain } from './components/HeaderMain';
import { ContentHome } from './components/ContentHome';
import { Matches } from './components/Matches';
import { AboutMe } from './components/AboutMe';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <HeaderMain></HeaderMain>
      </header>
      <Routes>

        <Route
          path='/'
          element={<ContentHome />}
        />

        <Route
          path='/matches'
          element={<Matches />}
        />

        <Route
          path='/about'
          element={<AboutMe />}
        />

      </Routes>
    </div>
  );
}

export default App;
