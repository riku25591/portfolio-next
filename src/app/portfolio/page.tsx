import Card from '../modules/Card'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Portfolio'
}

const Portfolio = () => {
  const date = new Date();
  const actualYear = date.getFullYear();
  const startWorkingYear = actualYear - 2015;

    return (
      <>
        <p className="intro">Ici, une liste non exhaustive de projets sur lesquels j&apos;ai pu collaborer ces {startWorkingYear} dernières années.</p>
        <div className="l-cards">
            <Card projet="La Fabrique - Orange Business" url="https://lafabrique.orange-business.com/" entreprise="La Fabrique - Orange Business" cms="CMS.Eolas 8" year="2025"/>
            <Card projet="Ville de Chambéry" url="https://https://www.chambery.fr/" entreprise="La Fabrique - Orange Business" cms="CMS.Eolas 8" year="2025"/>
            <Card projet="Communauté de commune d'Osartis-Marquion" url="https://www.cc-osartis.com/" entreprise="La Fabrique - Orange Business" cms="CMS.Eolas 8" year="2024"/>
            <Card projet="Site départemental du Val d'Oise" url="https://www.valdoise.fr/" entreprise="Eolas groupe B&D" cms="CMS.Eolas 7.1" year="2022"/>
            <Card projet="Périal - Lot cartographie" url="https://www.perial.com/notre-patrimoine-immobilier" entreprise="Eolas groupe B&D" cms="Drupal 8" year="2021"/>
            <Card projet="Site du patrimoine de la Savoie" url="https://patrimoines.savoie.fr/" entreprise="Eolas groupe B&D" cms="Jalios CMS" year="2020" />
            <Card projet="Site de la ville de Nanterre" url="https://www.nanterre.fr/" entreprise="Eolas groupe B&D" cms="CMS.Eolas 5.6" year="2019" />
            <Card projet="Catalcad" url="https://www.catalcad.com/" entreprise="L'Élan Créatif" cms="Grav" year="2018" />
            <Card projet="Faelens Immobilier" url="https://www.faelensimmobilier.com/site/index.php" entreprise="3clics" cms="Symfony" year="2017" />
            <Card projet="Rochambeau Immobilier" url="https://www.rochambeau-immo.com/fr/" entreprise="3clics" cms="Symfony" year="2016" />
            <Card projet="Site de la ville de Lille" url="https://www.lille.fr/" entreprise="Telmedia" cms="eZ Publish" year="2015" />
        </div>
      </>
    );
  }
  
  export default Portfolio;