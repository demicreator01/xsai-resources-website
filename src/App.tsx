import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Payroll } from './pages/Payroll';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { Accounting } from './pages/Accounting';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/accounting" element={<Accounting />} />
      </Routes>
    </>
  );
}

export default App;
