import BlogDescription from "@/components/BlogDescription";
import { getBlogBySlug } from "@/services/getBlogBySlug";
import { formatDate } from "@/Utils/formatDate";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";

const BlogContents = async ({ blogSlug }) => {
  const blog = await getBlogBySlug(blogSlug);

  return (
    <div className="container mb-5">
      <main className="mx-auto max-w-5xl space-y-5 rounded-xl border bg-white p-10 shadow-lg">
        <h2 className="text-4xl font-semibold">{blog?.title}</h2>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2">
            <MdCalendarMonth />

            <p className="text-sm font-medium">
              {formatDate(blog?.created_at)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegEye />

            <p className="text-sm font-medium">{blog?.view_count} Views</p>
          </div>
        </div>

        <BlogDescription description={blog?.description} />

        {/* <p className="text-sm font-medium">
              Skilled workers are indispensable to businesses due to their
              ability to enhance productivity, innovate, and maintain high
              standards of quality. Their specialized knowledge allows for
              efficient problem-solving and adaptation to technological
              advancements, crucial for staying competitive in rapidly evolving
              markets. Industries such as technology, healthcare, and finance
              heavily rely on skilled professionals to drive advancements and
              comply with industry regulations. Beyond technical expertise,
              skilled workers foster a culture of learning and collaboration,
              contributing to a positive work environment and attracting top
              talent. Businesses that invest in skilled employees benefit from
              improved operational efficiency, innovative solutions, and
              enhanced customer satisfaction, ultimately positioning themselves
              for sustained growth and success in the global economy.
            </p> */}
      </main>
    </div>
  );
};

export default BlogContents;

{
  /* <aside className="basis-full space-y-5 lg:basis-[20%]">
<h4 className="text-2xl font-semibold">
  Do you want to receive news? Subscribe to our newsletter.
</h4>
<form action="">
  <div className="flex h-12 items-center justify-between rounded-md border bg-white shadow-md">
    <input
      className="placeholder:text-slate-500 text-slate-500 basis-full border-none px-3 text-sm focus:ring-0"
      type="text"
      placeholder="Your Email Here"
      required
    />
    <button
      type="submit"
      className="h-full w-[150px] basis-auto rounded-md border-2 border-primary bg-primary px-2 text-sm text-white duration-200 hover:border-primary hover:bg-transparent hover:bg-white hover:text-primary"
    >
      Subscribe
    </button>
  </div>
</form>
<div className="rounded-lg border shadow-md">
  <div className="border-b border-black p-4">
    <h5 className="text-xl font-medium">In This Article</h5>
  </div>
  <div className="rounded-lg px-10 py-4 font-medium">
    <ol className="list-decimal space-y-3">
      <li>Why Skilled Workers matter for a business?</li>
      <li>Benefit of skilled Worker</li>
      <li>Hiring From Abroad</li>
      <li>Impact on Business</li>
      <li>Challenges and Solution</li>
      <li>Conclusion</li>
    </ol>
  </div>
</div>
</aside> */
}
