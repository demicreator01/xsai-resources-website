import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Payroll } from './pages/Payroll';
import { ScrollToTop } from './components/ui/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payroll" element={<Payroll />} />
      </Routes>
    </>
  );
}

export default App;
