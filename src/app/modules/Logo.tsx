import logo from '../public/logo-maxime-2.svg';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'

function Logo() {
    const location = usePathname();
    let logoHtml = undefined;
    if(location === "/") {
        logoHtml = <h1><Link href="/"><Image className="logo" src={logo.src} width={logo.width} height={logo.height} alt="Site web de Maxime Louf" priority={true} /></Link></h1>
    } else {
        logoHtml = <Link href="/"><Image className="logo" src={logo.src} width={logo.width} height={logo.height} alt="Accéder à l'accueil" priority={true} /></Link>
    }
    return (
        <div>
            {logoHtml}
        </div>
    );
}

export default Logo;
