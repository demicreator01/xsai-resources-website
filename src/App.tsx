import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Payroll } from './pages/Payroll';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { Accounting } from './pages/Accounting';
import { AdminSupport } from './pages/AdminSupport';
import { WhatTheyDontTellYou } from './pages/WhatTheyDontTellYou';
import { OurEdge } from './pages/OurEdge';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/admin-support" element={<AdminSupport />} />
        <Route path="/insights" element={<WhatTheyDontTellYou />} />
        <Route path="/our-edge" element={<OurEdge />} />
      </Routes>
    </>
  );
}

export default App;
