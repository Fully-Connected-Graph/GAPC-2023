import { FC, ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownComponents from '@/components/MarkdownComponents';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface MarkdownRenderProps {
    markdown: string;
}

const MarkdownRender: FC<MarkdownRenderProps> = ({
    markdown,
}): ReactElement => {
    return (
        <ReactMarkdown
            className="markdown-body"
            components={MarkdownComponents}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
        >
            {markdown}
        </ReactMarkdown>
    );
};

export default MarkdownRender;
