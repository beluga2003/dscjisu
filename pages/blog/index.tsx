import BlogCard from "../../components/cards/blog/BlogCard";
import { getAllPosts, PostMeta } from "../../lib/blog";

export default function Blog({ blogs }: { blogs: PostMeta[] }) {
    return (
        <>
            <div className='lg:p-20 sm:p-2 bg-white flex  flex-col  dark:bg-[#182232] py-10'>
                <div className="text-center">
                    <h1 className='lg:text-6xl text-3xl dark:text-white font-mono'><span className='underline decoration-solid underline-offset-2 decoration-cyan-300 font-mono community'>Blogs</span></h1>
                    <p className='dark:text-white font-light font-mono pt-5 text-base px-5 text-clip'>
                        Thanks to our community for writing these blogs.
                    </p>
                </div>
                <div className='grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  lg:mx-5 justify-center'>
                    {
                        blogs.map((blog) => (
                            <BlogCard key={blog.slug}
                                tag={blog.tags}
                                title={blog.title}
                                body={blog.description}
                                author={blog.author}
                                time={blog.date}
                                blogImage={blog.blogImage}
                                authorImage={blog.authorImage}
                                blogslug={blog.slug}

                            />
                        ))

                    }
                </div>
            </div>

        </>
    );
}

export async function getStaticProps() {
    const blogs = getAllPosts()
        .slice(0, 9)
        .map((post) => post.meta);

    return { props: { blogs } };
}


