import React from 'react';
import Layout from '@components/layout/Layout';
import Hero from '@sections/Hero';
import HowItWorks from '@sections/HowItWorks';
import ForCustomers from '@sections/ForCustomers';
import ForRiders from '@sections/ForRiders';

function App() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <ForCustomers />
      <ForRiders />
    </Layout>
  );
}

export default App;