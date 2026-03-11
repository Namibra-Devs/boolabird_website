import React from 'react';
import Layout from '@components/layout/Layout';
import Hero from '@sections/Hero';
import HowItWorks from '@sections/HowItWorks';
import ForCustomers from '@sections/ForCustomers';
import ForRiders from '@sections/ForRiders';
import JobsPage from '@sections/JobsPage';

function App() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <ForCustomers />
      <ForRiders />
      <JobsPage />
    </Layout>
  );
}

export default App;