import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Login from '../components/Login';
import Callback from '../components/Callback';
import Head from 'next/head';
import '../pages/base.css';

const App = () => {
  const router = useRouter();
  const { pathname } = router;
  
  // Add a state variable to check if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const bypassAuthentication = true;

  useEffect(() => {
    // Check if the user is authenticated (you can replace this with your own logic)
    const authStatus = localStorage.getItem('authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  if (pathname === '/auth/callback') {
    return <Callback />;
  }
  
  if (!isAuthenticated && !bypassAuthentication) {
    return <Login />;
  }

  return (
    <>
      <Head>
        <meta name="description" content="Tom Parandyk portfolio showcase" />
        <meta charSet="UTF-8" />
      </Head>
      <div>
        <main className="loading">
          <div className="frame">
            
          </div>
          <section className="project project--intro">
            <span className="project__label project__label--name">Showcase 2023</span>
            <span className="project__name">Tom Parandyk</span>
            <span className="project__label project__label--date">Role</span>
            <span className="project__date">Lead Product Designer</span>
            <h2 className="project__title">
              <span className="project__title-line">Why</span>
              <span className="project__title-line">Product</span>
              <span className="project__title-line">Design</span>
            </h2>
            <span className="project__label project__label--mission">Vision</span>
            <div className="project__mission">
              <p>Product design is a harmonious blend of utility and creativity to elevate user satisfaction. I thrive on user feedback, seizing opportunities to streamline intricate interactions. The ultimate goal is to craft experiences that are both functional and visually stunning. </p>
              <p>As I look ahead, my focus shifts toward design engineering—a perfect fusion of artistic vision and technical prowess. I aim to seamlessly integrate aesthetics with code, aspiring to design and build user experiences that are functional and visually compelling.</p>
            </div>
          </section>
          <div className="gallery-wrap">
            <div className="gallery gallery--row" id="gallery-1">
              <div className="gallery__item gallery__item--s" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item gallery__item--m" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item gallery__item--l" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item gallery__item--xl gallery__item--center" style={{backgroundImage: 'url(Showcase/img/G1-1.jpg)'}}></div>
              <div className="gallery__item gallery__item--l" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item gallery__item--m" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item gallery__item--s" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="caption">
                Over the years, I've sharpened my ability to balance eye-catching aesthetics and robust functionality by adhering to a well-defined framework of patterns and design principles. I strive to deliver iconic, visually captivating, and exceptionally user-friendly designs.
              </div>
            </div>
          </div>
          <section className="project project--details project--left">
            <span className="project__label project__label--default">Ethical Considerations</span>
            <p>The emergence of AI-generated art raises ethical questions and concerns. One of the key challenges is navigating the boundaries of authorship and ownership. Determining the role of AI algorithms and their creators in the artistic process, as well as addressing issues of attribution and intellectual property, requires careful deliberation. Additionally, ensuring that AI-generated art does not perpetuate bias, discrimination, or harmful content is crucial for fostering a responsible and inclusive artistic landscape.</p>
          </section>
          <div className="gallery-wrap gallery-wrap--large">
            <div className="gallery gallery--grid gallery--breakout" id="gallery-2">
              <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div></div>
              <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div></div>
              <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div></div>
              <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div></div>
              <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div></div>
              <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div></div>
              <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div></div>
              <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div></div>
              <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div></div>
              <div className="caption">
                <p>Devoid of inherent knowledge, the language model relies solely on probabilities to craft a peculiar vision. As a result, the earrings hang in curious defiance of physics, inviting us to ponder the implications of relinquishing human understanding in the pursuit of artificial creativity.</p>
              </div>
            </div>
          </div>
          <section className="project project--details project--right">
            <span className="project__label project__label--default">Why systems</span>
            <p>Having spent years immersed in design system principles, I find them critical in my work. I had the opportunity to construct several component libraries in design tools and in code from the ground up. Design systems compel me to continually refine my work, making the complex manageable. This long journey has been less about adopting methodologies and more about advancing the foundation upon which my design sensibilities are built.</p>
          </section>
          <div className="gallery-wrap">
            <div className="gallery gallery--grid10" id="gallery-3">
              <div className="gallery__item pos-1" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-2" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-3" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-4" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-5" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-6" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-7" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-8" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-9" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-10" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-11" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-12" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-13" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-14" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-15" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item pos-16" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="caption">Creative consistency</div>
            </div>
          </div>
          <section className="project project--details">
            <span className="project__label project__label--default">Aligning the why</span>
            <p>It's incredibly fulfilling to craft designs that make life better for users and align perfectly with business objectives. The goal is always twofold: to create intuitive, impactful user experiences and to deliver tangible business results. There's something uniquely satisfying about hitting that sweet spot, where customer benefit and business success meet, turning everyday interactions into something extraordinary.</p>
          </section>
          <div className="gallery-wrap gallery-wrap--dense">
            <div className="gallery gallery--stack gallery--stack-inverse gallery--stack-scale gallery--stack-dark" id="gallery-4">
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="caption">
                <p>This uncharted territory challenges artists and art enthusiasts alike, igniting debates about the role of intention and chance in the artistic process.</p>
              </div>
            </div>
          </div>
          <div className="gallery-wrap gallery-wrap--dense">
            <div className="gallery gallery--stack gallery--stack-inverse gallery--stack-scale gallery--stack-dark" id="gallery-5">
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="caption">
                <p>This uncharted territory challenges artists and art enthusiasts alike, igniting debates about the role of intention and chance in the artistic process.</p>
              </div>
            </div>
          </div>
          <div className="gallery-wrap gallery-wrap--dense">
            <div className="gallery gallery--stack gallery--stack-inverse gallery--stack-scale gallery--stack-dark" id="gallery-6">
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="caption">
                <p>This uncharted territory challenges artists and art enthusiasts alike, igniting debates about the role of intention and chance in the artistic process.</p>
              </div>
            </div>
          </div>
          <section className="project project--details project--right">
            <span className="project__label project__label--default">Unmasking the Void of Authenticity</span>
            <p>While AI-generated art showcases impressive technical prowess, it leaves behind an unsettling void in the quest for authenticity. As humans, we seek the genuine touch of human hands and the depth of emotional connection embedded within traditional art forms. The lack of human essence in AI-generated creations may leave us yearning for the profound human expression that sparks true resonance, evoking a sense of emptiness in the face of machine-driven artistry.</p>
          </section>
          <div className="gallery-wrap">
            <div className="gallery gallery--gridtiny" id="gallery-7">
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="caption">Design, test, and repeat!</div>
            </div>
          </div>
          <section className="project project--details project--left">
            <span className="project__label project__label--default">Photographic Flaws in Perfect Harmony</span>
            <p>In the realm of AI-generated photography, the quest for flawlessness inadvertently unveils a striking paradox - the absence of authentic imperfections. Even in the most human-like subjects, wrinkles and blemishes appear too immaculate, leaving us yearning for the raw, unfiltered beauty that only true imperfection can evoke. </p>
          </section>
          <div className="gallery-wrap">
            <div className="gallery gallery--bento" id="gallery-8">
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="caption">Perfect Imperfections</div>
            </div>
          </div>
          <section className="project project--details project--left">
            <span className="project__label project__label--default">Photo credits</span>
            <p>All imagesth </p>
          </section>
          
        </main>
        <script defer src="Showcase/js/gsap.min.js"></script>
        <script defer src="Showcase/js/Flip.min.js"></script>
        <script defer src="Showcase/js/ScrollTrigger.min.js"></script>
        <script defer src="Showcase/js/lenis.min.js"></script>
        <script defer src="Showcase/js/imagesloaded.pkgd.min.js"></script>
        <script defer type="module" src="Showcase/js/index.js"></script>
      </div>
    </>
  );
};

export default App;
