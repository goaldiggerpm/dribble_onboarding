import './styles/scss/index.scss'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import OnBoardingPage from './pages/onboarding/Index.js'

function App() {
  return (

    <div>
      <Router>
        <Routes >
          <Route path="/" element={<OnBoardingPage />} />
        </Routes >
      </Router>
    </div>
  );
}

export default App;
