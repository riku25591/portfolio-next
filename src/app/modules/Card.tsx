interface CardProps {
    projet: string;
    url: string;
    entreprise: string;
    cms: string;
    year: string;
}

function Card(props: CardProps) {
    const projet: string = props.projet;
    const url: string = props.url;
    const entreprise: string = props.entreprise;
    const cms: string = props.cms;
    const year: string = props.year;
    return (
        <div className="c-card">
            <div className="c-card__content">
                <h2 className="c-card__title">
                    {projet}
                </h2>
                <p className="c-card__label">Réalisé avec :</p>
                <p className="c-card__info">{entreprise}</p>
                <p className="c-card__info">sur {cms}</p>
                <p className="c-card__info">en {year}</p>
            </div>
            <a className="c-card__link o-button u-cover" href={url} target="_blank" rel="noopener noreferrer">
                Voir le site
            </a>
        </div>
    );
}

export default Card;