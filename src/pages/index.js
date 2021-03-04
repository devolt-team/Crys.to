import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import HowItWorks from '@sections/HowItWorks';
import BookACall from '@sections/BookACall';
import Team from '@sections/Team';
// import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <HowItWorks />
    <BookACall />
    <Team />
    {/* <Faq /> */}
    <Footer />
  </Layout>
);

export default IndexPage;
