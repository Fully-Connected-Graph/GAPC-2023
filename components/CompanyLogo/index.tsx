import config from "@/configuration";
import { FC } from "react";
import A from "../A";

interface CompanyLogoProps {
    href: string;
    src: string;
    alt: string;
}

const CompanyLogo: FC<CompanyLogoProps> = ({
    href,
    src,
    alt,
}) => {
    return (
        <A
            href={href}
            target="_blank"
            className="duration-200 hover:drop-shadow-lg transform hover:scale-125"
        >
            <img
                className="h-full w-full object-contain"
                src={config.basePath + src} alt={alt}
            />
        </A>
    )
}

export default CompanyLogo;