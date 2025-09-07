import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'A propos'
}

const About = () => {
    return (
        <>
            <p className="intro">Mes moteurs du développement front-end</p>
            <div className="l-grid">
                <section className="section">
                    <div className="l-container">
                        <h2 className="section__titre">Accessibilité</h2>
                        <p className="section__paragraphe">Parce que nous développons des interfaces pour des êtres humains, l&apos;accessibilité de mes réalisations est ma première préoccupation.</p>
                        <p className="section__paragraphe">Je suis à la fois certifié développeur & auditeur accessible chez Access42. Le <a href="https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode-rgaa/criteres/" target="_blank" rel="noreferrer"><abbr title="Référentiel général d'amélioration de l'accessibilité">RGAA</abbr></a> n&apos;est jamais à plus de 3 cliques de ma souris.</p>
                    </div>
                </section>
                <section className="section">
                    <div className="l-container">
                        <h2 className="section__titre">Clean code</h2>
                        <p className="section__paragraphe">Pour pouvoir relire facilement son code et le code des autres.</p>
                        <p className="section__paragraphe">
                            Actuellement, j&apos;utilise plusieurs normes CSS :
                        </p>
                        <ul className="section__list">
                            <li>BEMIT, pour la méthodologie BEM, le préfixage des éléments et les suffixes responsives</li>
                            <li>ITCSS, le CSS en triangle inversé est une bonne méthodologie à coupler avec BEM. Elle permet d&apos;utiliser au mieux la cascade pour réaliser des surcharges facilement.</li>
                        </ul>
                    </div>
                </section>
                <section className="section">
                    <div className="l-container">
                        <h2 className="section__titre">Next Gen</h2>
                        <p className="section__paragraphe">Toujours à l&apos;affût des nouveautés proposées par les navigateurs, je réalise une veille technologique constante pour ne pas rater les dernières innovations.</p>
                    </div>
                </section>
                <section className="section">
                    <div className="l-container">
                        <h2 className="section__titre">Efficacité</h2>
                        <p className="section__paragraphe">Être à la fois porteur de solutions, et efficace dans mon développement sont des qualités que j&apos;entretiens et que je tente de perfectionner depuis le début de ma carrière</p>
                    </div>
                </section>
            </div>
        </>
    );
  }
  
  export default About;