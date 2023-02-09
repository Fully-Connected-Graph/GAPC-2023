import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface AProps {
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    className?: string;
    children: ReactNode;
}

const A: FC<AProps> = ({ href, target, children, className }) => {
    return (
        // TODO FIX THIS
        <Link href={"GAPC-2023/" + href} passHref legacyBehavior>
            <a target={target} className={className}>
                {children}
            </a>
        </Link>
    );
};

export default A;
