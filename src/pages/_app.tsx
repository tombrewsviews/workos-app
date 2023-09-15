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
            <div className="frame__title"> 
              <h1 className="frame__title-main">On-Scroll Image Layout Animations</h1> 
            </div>
          </div>
          <section className="project project--intro">
            <span className="project__label project__label--name">Project</span>
            <span className="project__name">AI Art</span>
            <span className="project__label project__label--date">Date</span>
            <span className="project__date">July, 2023</span>
            <h2 className="project__title">
              <span className="project__title-line">Creativity</span>
              <span className="project__title-line">Redefined</span>
            </h2>
            <span className="project__label project__label--mission">Mission</span>
            <div className="project__mission">
              <p>The AI-Art Project is a transformative initiative dedicated to exploring the immense impact of AI-generated art on the art world and artists. We aim to discover and promote exceptional AI-generated artworks that push the boundaries of creativity, redefine traditional practices, and provoke thought. </p>
              <p>Through collaborations with artists, workshops, and educational programs, we empower artists to leverage AI as a tool for exploration, expanding their artistic horizons and embracing new forms of expression.</p>
            </div>
          </section>
          <div className="gallery-wrap">
            <div className="gallery gallery--row" id="gallery-1">
              <div className="gallery__item gallery__item--s" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item gallery__item--m" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item gallery__item--l" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item gallery__item--xl gallery__item--center" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item gallery__item--l" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item gallery__item--m" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item gallery__item--s" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="caption">
                Within this meticulously arranged AI-generated ensemble lies a tantalizing facade, captivating our gaze. Yet, as we search for the soul of human expression, we question whether algorithms can truly embody the essence of authentic art.
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
            <span className="project__label project__label--default">Preserving Artistic Identity</span>
            <p>While AI offers new avenues for artistic exploration, there is a concern that it may overshadow or replace human creativity. Balancing the integration of AI tools and techniques with preserving the unique perspectives, emotional depth, and artistic identity of human artists is a significant challenge. Striking the right balance between AI-generated art and the irreplaceable human touch requires thoughtful consideration and an ongoing dialogue between artists, technologists, and the wider art community.</p>
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
              <div className="caption">The Art of Perfection?</div>
            </div>
          </div>
          <section className="project project--details">
            <span className="project__label project__label--default">Societal Impact</span>
            <p>As AI-generated art becomes more prevalent, its long-term impact on the art market, art institutions, and the broader societal perception of art needs to be carefully examined. Understanding the implications of AI-generated art for art sales, copyright laws, and the dynamics of the art market is crucial for shaping future policies and practices. Additionally, exploring the ways in which AI-generated art can democratize artistic expression and challenge traditional hierarchies is an ongoing challenge that requires proactive engagement and collaboration.</p>
          </section>
          <div className="gallery-wrap gallery-wrap--dense">
            <div className="gallery gallery--stack gallery--stack-inverse gallery--stack-dark" id="gallery-4">
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="caption">
                <p>AI-generated art captivates with varied creations, sometimes senseless, yet impressively enigmatic.</p>
              </div>
            </div>
          </div>
          <div className="gallery-wrap gallery-wrap--dense">
            <div className="gallery gallery--stack gallery--stack-glass" id="gallery-5">
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="gallery__item" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="caption">
                <p>In the realm of unpredictable algorithms, some variations may appear random or without purpose, challenging traditional notions of beauty and meaning.</p>
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
              <div className="caption">What is creativity?</div>
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
          <section className="project project--details project--right">
            <span className="project__label project__label--default">Moving forward</span>
            <p>As we c </p>
          </section>
          <section className="project project--details project--left">
            <span className="project__label project__label--default">Photo credits</span>
            <p>All imagesth <a href="https://midjourney.com">Midjourney</a>. y <a href="https://unsplash.com/@karsten116">Karsten Winegeart</a>. <strong>Can you spot which one?</strong><a href="https://twitter.com/intent/tweet?text=@codrops">@codrops</a>.</p>
          </section>
          <div className="gallery-wrap">
            <div className="gallery gallery--one" id="gallery-9">
              <div className="gallery__item pos-16" style={{backgroundImage: 'url(Showcase/img/6.jpg)'}}></div>
              <div className="caption">Made by @codrops</div>
            </div>
          </div>
          
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
