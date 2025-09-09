'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import parse from "html-react-parser";
import Logo from "../modules/Logo";

function Header() {
    const location = usePathname();
    let introText = '';
    let isActive = false;
    switch (location) {
        case '/portfolio':
          isActive = true;
          introText = '<h1 className="welcome u-text-center">Portfolio</h1>';
          break;
        case '/about':
            isActive = true;
            introText = '<h1 className="welcome u-text-center">A propos</h1>';
            break;
        case '/contact':
            isActive = true;
            introText = '<h1 className="welcome u-text-center">Contact</h1>';
            break;
        default:
            isActive = true;
            introText = '<p className="welcome u-text-center">Développeur Front-end</p>';
    }
  return (
    <header className="l-grid-header">
        <Logo />
        {parse(introText)}
        <nav className="c-nav" role="navigation">
            <ul className="c-nav__list">
                <li className="c-nav__item"><Link className={(isActive ? 'c-nav__link c-nav__link--active ' : 'c-nav__link')} href="/portfolio">Portfolio</Link></li>
                <li className="c-nav__item"><Link className={(isActive ? 'c-nav__link c-nav__link--active ' : 'c-nav__link')} href="/about">A propos</Link></li>
                <li className="c-nav__item"><Link className={(isActive ? 'c-nav__link c-nav__link--active ' : 'c-nav__link')} href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;