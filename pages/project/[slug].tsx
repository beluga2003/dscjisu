import "highlight.js/styles/atom-one-dark.css";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import YouTube from "../../components/cards/youtube/YoutubeCard";
import { getProjectFromSlug, getSlugs, ProjectMeta } from "../../lib/project";

interface MDXProject {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: ProjectMeta;
}

export default function ProjectPage({ post }: { post: MDXProject }) {
    return (
        <>
            <Head>
                <title>{post.meta.name}</title>
                <meta name="description" content={post.meta.description} />
                <meta name="og:title" content={post.meta.name} />
                <meta name="og:description" content={post.meta.description} />
                <meta name="og:image" content={`https://dscjisu.vercel.app` + post.meta.eventpic} />
            </Head>
            <main className="bg-black">
                <div className="py-20 mx-auto lg:max-w-[65%] xs:max-w-[75%]">
                    <div>
                        <div className="">
                            <article>
                                <MDXRemote {...post.source} components={{ YouTube, Image }} />
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    const { content, meta } = getProjectFromSlug(slug);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                rehypeHighlight,
            ],
        },
    });

    return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs().map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: false,
    };
};