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
        'Groningen Algorithmic Programming Contest.md'
    );
    const file = readFileSync(path, 'utf8');
    const fileName = 'Groningen Algorithmic Programming Contest';

    return {
        props: {
            fileName,
            file,
        },
    };
}

export default Index;
