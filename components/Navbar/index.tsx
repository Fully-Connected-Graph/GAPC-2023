import { ReactElement } from 'react';
import A from '@/components/A';
import config from '@/configuration';
import PrepLink from '../utils/PrepLink';

const Navbar = (): ReactElement => {

    const links = ['Rules', 'Schedule', 'Location', 'Register']

    return (
        <nav className="flex flex-row px-8 py-4 max-sm:px-2">
            <A href="/">
                <div className="flex flex-row items-center">
                    <img src={`${config.basePath}/logo.png`} alt="logo" className="h-8 w-8 mr-2" />
                    <h1 className="font-light text-gray-800 text-sm md:text-xl">
                        {
                            // (window.document.body.clientWidth > 768) ? config.name : config.shortname
                            config.name
                        }
                    </h1>
                </div>
            </A>

            <div className="flex flex-row items-center ml-auto">

                <p className="mb-2 text-black font-light text-sm md:text-xl">
                    {links?.map((link, i) => (
                        <A
                            href={link === 'About' ? '/' : `/${PrepLink(link)}`}
                            className="mx-2"
                        >
                            {link}
                        </A>
                    ))}
                </p>
            </div>
        </nav>
    );
};

export default Navbar;
