import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/layout/Layout';
import ScrollToTop from '@components/layout/ScrollToTop';
import Hero from '@sections/Hero';
import HowItWorks from '@sections/HowItWorks';
import ForCustomers from '@sections/ForCustomers';
import ForRiders from '@sections/ForRiders';
import JobsPage from '@sections/JobsPage';

function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ForCustomers />
      <ForRiders />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;