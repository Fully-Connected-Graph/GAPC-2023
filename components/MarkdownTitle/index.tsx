import { FC, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import PrepDate from '@/components/utils/PrepDate';

interface MarkdownTitleProps {
    frontmatter: {
        title: string;
        description?: string;
        date?: Date;
        banner?: string;
    };
}

const MarkdownTitle: FC<MarkdownTitleProps> = ({
    frontmatter,
}): ReactElement => {
    const date = PrepDate(frontmatter.date);

    let styleClasses =
        'w-full min-h-64 py-20 flex flex-col items-center text-center';
    if (frontmatter.banner) {
        styleClasses = twMerge(styleClasses, `bg-center bg-cover bg-no-repeat`);
    } else {
        styleClasses = twMerge(
            styleClasses,
            'bg-gradient-to-r from-blue-500 to-blue-300'
        );
    }
    let style =
        (frontmatter.banner && {
            backgroundImage: `url(${frontmatter.banner})`,
        }) ||
        undefined;

    return (
        <div className={styleClasses} style={style}>
            <h1 className="text-white text-6xl" style={{ textShadow: "0 .05em .05em #555" }}>
                {frontmatter.title}
            </h1>

            <p className="mb-2 text-white opacity-75 font-light">
                {frontmatter.description}
            </p>

            {date && (
                <div className="text-white opacity-75 text-sm font-light py-1 px-4 rounded-md backdrop-blur-xl bg-black/30">
                    {date}
                </div>
            )}
        </div>
    );
};

export default MarkdownTitle;
