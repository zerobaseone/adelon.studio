import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  const closeNav = () => setIsNavOpen(false);

  return (
    <header className={isNavOpen ? 'nav-open' : ''}>
      <div className="header-inner">
        <div className="header-row">
          <div className="header-brand">
            <div className="site-logo">adelon.studio</div>
            <div className="site-subtitle">&gt; loading creative assets...█</div>
          </div>
          <button
            type="button"
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((open) => !open)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>

        <nav className="header-nav">
        <NavLink to="/" end>home</NavLink>
        <NavLink to="/projects">projects</NavLink>
        <NavLink to="/blog">blog</NavLink>
        <NavLink to="/links">links</NavLink>
        </nav>
      </div>

      <div className="nav-backdrop" aria-hidden="true" onClick={closeNav} />
      <div className="nav-drawer">
        <nav className="nav-drawer-inner">
          <NavLink to="/" end onClick={closeNav}>home</NavLink>
          <NavLink to="/projects" onClick={closeNav}>projects</NavLink>
          <NavLink to="/blog" onClick={closeNav}>blog</NavLink>
          <NavLink to="/links" onClick={closeNav}>links</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;