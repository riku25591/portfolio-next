'use client'

import Link from "next/link";
import EmblaCarousel from './modules/carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import LogoCSS3 from './public/logos/CSS3.webp'
import LogoHTML5 from './public/logos/HTML5.webp'
import LogoJalios from './public/logos/jalios.webp'
import LogoJavascript from './public/logos/javascript.webp'
import LogoCMSEolas from './public/logos/CMS.Eolas.webp'
import LogoNextJS from './public/logos/next-js.webp'
import LogoStorybook from './public/logos/storybook.webp'
import LogoPlaywright from './public/logos/Playwright.webp'
import LogoReact from './public/logos/React.webp'
import LogoVite from './public/logos/vite.webp'
import LogoWebpack from './public/logos/Webpack.webp'
import { StaticImageData } from "next/image";
export default function Home() {
  

  const OPTIONS: EmblaOptionsType = { loop: true }
  const SLIDES: StaticImageData[] = [
    LogoCSS3,
    LogoHTML5,
    LogoJalios,
    LogoJavascript,
    LogoCMSEolas,
    LogoNextJS,
    LogoStorybook,
    LogoPlaywright,
    LogoReact,
    LogoVite,
    LogoWebpack
  ]

  console.log(SLIDES);

  return (
    <div className="m-home">
      <div className="l-container">
        <p className="m-home__title">Hello, je suis Maxime</p>
        <p className="m-home__introduction">Ce site est un petit portfolio professionnel. <br/> N&apos;h&eacute;sitez pas &agrave; <Link href="/contact">m&apos;envoyer un message</Link> pour en savoir plus.</p>
      </div>
      <hr />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
