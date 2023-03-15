import MarkdownPage from '@/components/MarkdownPage';
import config from '@/configuration';
import { readFileSync } from 'fs';
import { join } from 'path';
import { FC, ReactElement } from 'react';

interface IndexProps {
    fileName: string;
    file: string;
}

const Index: FC<IndexProps> = ({ file, fileName }): ReactElement => {
    return <MarkdownPage markdown={file} title={fileName} />;
};

export function getStaticProps() {
    const path = join(
        config.srcDir,
        'GAPC 2023.md'
    );
    const file = readFileSync(path, 'utf8');
    const fileName = 'GAPC 2023';

    return {
        props: {
            fileName,
            file,
        },
    };
}

export default Index;
