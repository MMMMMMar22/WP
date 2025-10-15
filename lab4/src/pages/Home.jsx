import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import VirtualReality from "../components/VirtualReality"
import CallToAction from "../components/CallToAction"
import Blog from "../components/Blog"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section virtual_reality">
        <VirtualReality />
      </section>
      <section className="section call_to_action">
        <CallToAction />
      </section>
      <section className="section blog_section">
        <Blog />
      </section>
      <section className="section footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;
