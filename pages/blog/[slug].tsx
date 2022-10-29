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
import { getPostFromSlug, getSlugs, PostMeta } from "../../lib/blog";

interface MDXPost {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
    return (
        <>
            <Head>
                <title>{post.meta.title}</title>
                <meta name="description" content={post.meta.body} />
                <meta name="og:title" content={post.meta.title} />
                <meta name="og:description" content={post.meta.body} />
                <meta name="og:image" content={post.meta.blogImage} />
            </Head>
            <main className="bg-black">
                <div className="py-20 mx-auto lg:max-w-[65%] xs:max-w-[75%]">
                    <div>
                        <div>
                            <Image src={post.meta.blogImage} alt="blog image" width="1920" height="1080" className="bg-black rounded-lg" />
                        </div>
                        <h1 className="lg:text-7xl text-4xl py-4 font-bold text-white">{post.meta.title}</h1>
                        <p className="text-gray-400 text-lg  mb-5">{post.meta.body}</p>
                        <p className="bg-teal-300 p-2 mt-6 rounded-lg text-black inline ">{post.meta.tags}</p>
                        <div className="py-10 bg-slate-900 my-10 rounded-lg">
                            <div className="flex flex-row gap-2 justify-center text-start items-center ">
                                <div>
                                    <Image
                                        src={post.meta.authorImage}
                                        alt={post.meta.author}
                                        width={50}
                                        height={50}
                                        className=" rounded-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-white">{post.meta.author}</p>
                                    <div className="flex gap-2 flex-col">
                                        <p className="text-white">Published On: {post.meta.date}</p>
                                    </div>
                                    <p className="text-white">{post.meta.readingTime}</p>
                                </div>
                            </div>
                        </div>
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
    const { content, meta } = getPostFromSlug(slug);
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