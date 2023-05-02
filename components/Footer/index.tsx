import { ReactElement } from 'react';
import config from '@/configuration';
import A from '@/components/A';
import CompanyLogo from '../CompanyLogo';

const Footer = (): ReactElement => {
    return (
        <footer className="w-full flex flex-col items-center justify-center mt-8">
            <div className="w-full max-w-2xl p-4 sm:p-0">
                <h1 className="text-2xl font-light text-gray-800">
                    Gold Sponsor
                </h1>
                <div className='w-full flex flex-col justify-center gap-6 p-5 md:flex-row'>
                    {
                        config.GoldSponsors.map((company, index) => (
                            <div className='p-2 md:h-24'>
                                <CompanyLogo 
                                    key={index}
                                    {...company}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full max-w-2xl p-4 sm:p-0">
                <h1 className="text-2xl font-light text-gray-800">
                    Silver Sponsors
                </h1>
                <div className='w-full flex flex-col justify-center gap-6 p-5 md:flex-row'>
                    {
                        config.SilverSponsors.map((company, index) => (
                            <div className='p-2 md:h-14'>
                                <CompanyLogo
                                    key={index}
                                    {...company}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full max-w-2xl p-4 sm:p-0">
                <h1 className="text-2xl font-light text-gray-800">
                    Organised by
                </h1>
                <div className='w-full flex flex-col justify-center gap-6 p-5 md:flex-row'>
                    {
                        config.organisers.map((company, index) => (
                            <div className='p-2 md:h-14'>
                                <CompanyLogo
                                    key={index}
                                    {...company}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full max-w-2xl p-4 sm:p-0">
                <h1 className="text-2xl font-light text-gray-800">
                    Partner
                </h1>
                <div className='w-full flex flex-col justify-center gap-6 p-5 md:flex-row'>
                    <div className='block justify-center'>
                    <p className='text-red-600 text-xl'>Computing Science @ Bernoulli Institute</p>
                    {
                        config.partners.map((company, index) => (
                            <div className='p-2 md:h-14'>
                                <CompanyLogo
                                    key={index}
                                    {...company}
                                />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>

            <div className='w-full p-5 bg-gray-100 flex flex-col items-center justify-center'>
                <p className="text-gray-500">
                    Made with ❤️ by
                    <A
                        href={config.contact}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        {` ${config.nickname}`}
                    </A>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
