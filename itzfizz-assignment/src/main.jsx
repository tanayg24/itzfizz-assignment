import React, { useLayoutEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight, ArrowUpRight, Asterisk, Menu } from 'lucide-react';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.from('.nav-inner', { y: -22, opacity: 0, duration: 0.7 })
        .from('.eyebrow', { y: 18, opacity: 0, duration: 0.55 }, '-=0.25')
        .from('.headline-line', { yPercent: 115, rotate: 2, opacity: 0, stagger: 0.13, duration: 0.9 }, '-=0.2')
        .from('.hero-copy, .hero-cta', { y: 20, opacity: 0, stagger: 0.12, duration: 0.6 }, '-=0.35')
        .from('.hero-art', { scale: 0.88, rotate: -5, opacity: 0, duration: 1.1 }, '-=0.7');

      gsap.to('.hero-art', {
        yPercent: 20, rotate: 5, scale: 0.94, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
      });
      gsap.to('.hero-title', {
        y: 95, opacity: 0.18, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
      });
      gsap.from('.stat-card', {
        y: 70, opacity: 0, scale: 0.96, stagger: 0.14, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.results', start: 'top 76%', toggleActions: 'play none none reverse' }
      });
      gsap.from('.manifesto-word', {
        yPercent: 110, opacity: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.manifesto', start: 'top 72%', toggleActions: 'play none none reverse' }
      });
      gsap.from('.service-row', {
        x: -35, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.services', start: 'top 72%', toggleActions: 'play none none reverse' }
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef}>
      <nav className="nav-wrap">
        <div className="nav-inner shell">
          <a className="wordmark" href="#top" aria-label="Itzfizz home">itzfizz<span>®</span></a>
          <span className="nav-note">Independent digital studio<br/>Bengaluru · Everywhere</span>
          <a className="nav-link" href="#contact">Let’s talk <ArrowUpRight size={16}/></a>
          <button className="menu-button" aria-label="Open menu"><Menu size={20}/></button>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid shell">
          <div className="hero-content">
            <div className="eyebrow"><span className="status-dot"/> Digital experiences, thoughtfully made</div>
            <h1 className="hero-title"><span className="headline-mask"><span className="headline-line">Make it</span></span><span className="headline-mask accent-line"><span className="headline-line">matter<span className="period">.</span></span></span></h1>
            <div className="hero-bottom">
              <p className="hero-copy">We turn ambitious ideas into useful, distinctive digital experiences. Strategy, design and technology — working as one.</p>
              <a className="round-cta hero-cta" href="#work" aria-label="Explore our work"><ArrowDownRight size={23}/></a>
            </div>
            <div className="hero-foot"><span>Scroll to explore</span><span className="scroll-line"/><span>01 / 04</span></div>
          </div>
          <div className="hero-art-wrap" aria-label="Abstract 3D-inspired graphic">
            <div className="art-caption caption-top">FORM FOLLOWS<br/>FEELING — 001</div>
            <div className="hero-art">
              <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
              <div className="art-disc"><div className="disc-inner"><Asterisk size={90} strokeWidth={1.15}/></div></div>
              <div className="art-ribbon ribbon-one"/><div className="art-ribbon ribbon-two"/>
              <span className="art-number">IF / 26</span>
            </div>
            <div className="art-caption caption-bottom">DESIGN WITH<br/>A POINT OF VIEW ↗</div>
          </div>
        </div>
        <div className="hero-marquee"><div className="marquee-track"><span>GOOD IDEAS DESERVE GREAT EXECUTION</span><Asterisk size={19}/><span>GOOD IDEAS DESERVE GREAT EXECUTION</span><Asterisk size={19}/><span>GOOD IDEAS DESERVE GREAT EXECUTION</span><Asterisk size={19}/></div></div>
      </section>

      <section className="results shell" id="work">
        <div className="section-kicker"><span>THE IMPACT</span><span>02 — A LITTLE PROOF</span></div>
        <div className="results-heading"><h2>Creative thinking.<br/><em>Measurable</em> momentum.</h2><p>Good design isn’t just how it looks. It’s what it unlocks for the people using it — and the businesses behind it.</p></div>
        <div className="stats-grid">
          <article className="stat-card stat-dark"><span className="stat-label">Engagement uplift</span><strong>+68<span>%</span></strong><div className="stat-bottom"><span>More meaningful interactions</span><span className="stat-icon">↗</span></div><div className="mini-bars"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></article>
          <article className="stat-card stat-lime"><span className="stat-label">Faster journeys</span><strong>2.4<span>×</span></strong><div className="stat-bottom"><span>Less friction, more flow</span><span className="stat-icon">↗</span></div><div className="speed-lines"><i/><i/><i/><i/></div></article>
          <article className="stat-card stat-peach"><span className="stat-label">Happy collaborators</span><strong>94<span>%</span></strong><div className="stat-bottom"><span>Built on trust and clarity</span><span className="stat-icon">↗</span></div><div className="smile-mark">☺</div></article>
        </div>
        <p className="fine-print">Illustrative studio metrics for this design concept.</p>
      </section>

      <section className="manifesto">
        <div className="manifesto-inner shell">
          <div className="section-kicker"><span>OUR POINT OF VIEW</span><span>03 — LESS NOISE, MORE MEANING</span></div>
          <h2><span className="manifesto-word">Clarity</span> <span className="manifesto-word muted">over</span><br/><span className="manifesto-word">complexity.</span><br/><span className="manifesto-word muted">Always.</span></h2>
          <div className="manifesto-bottom"><span className="asterisk-large"><Asterisk size={46}/></span><p>We believe the best digital work feels effortless. Behind that simplicity is curiosity, craft, and a healthy obsession with the details.</p><a href="#contact" className="text-link">How we work <ArrowUpRight size={16}/></a></div>
        </div>
      </section>

      <section className="services shell">
        <div className="section-kicker"><span>WHAT WE BRING</span><span>04 — FROM FIRST THOUGHT TO LIVE</span></div>
        <div className="services-layout"><h2>Built to work.<br/><em>Made to feel.</em></h2><div className="service-list"><div className="service-row"><span>01</span><strong>Digital strategy</strong><span>↗</span></div><div className="service-row"><span>02</span><strong>Web & experience design</strong><span>↗</span></div><div className="service-row"><span>03</span><strong>Development & delivery</strong><span>↗</span></div><div className="service-row"><span>04</span><strong>Growth & optimisation</strong><span>↗</span></div></div></div>
      </section>

      <footer className="footer" id="contact"><div className="shell footer-inner"><span className="footer-kicker">HAVE A GOOD ONE IN MIND?</span><a className="footer-title" href="mailto:hello@itzfizz.com">Let’s make<br/>something <em>matter.</em> <ArrowUpRight className="footer-arrow" size={44}/></a><div className="footer-bottom"><a className="wordmark footer-logo" href="#top">itzfizz<span>®</span></a><span>Independent by nature.<br/>Intentional by design.</span><span>© ITZFIZZ 2026</span><a href="#top">Back to top ↑</a></div></div></footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
