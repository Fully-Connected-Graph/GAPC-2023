import config from '@/configuration';
import Head from 'next/head';
import { FC, ReactElement } from 'react';
import MarkdownRender from '../MarkdownRender';
import MarkdownTitle from '../MarkdownTitle';
import ReadFrontMatter from '../utils/ReadFrontMatter';

interface MarkdownPageProps {
    markdown: string;
    title: string;
}

const MarkdownPage: FC<MarkdownPageProps> = ({
    markdown,
    title,
    ...props
}): ReactElement => {
    const { content, data } = ReadFrontMatter(markdown);

    const frontmatter = { title: title, ...data };

    return (
        <>
            <Head>
                <title>{`${config.shortname} | ${frontmatter.title}`}</title>
            </Head>
            <div className="w-full overflow-y-auto">
                <MarkdownTitle frontmatter={frontmatter} />
                <article className="w-full max-w-2xl m-auto mt-8 max-sm:px-4">
                    <MarkdownRender markdown={content} />
                </article>
            </div>
        </>
    );
};

export default MarkdownPage;
