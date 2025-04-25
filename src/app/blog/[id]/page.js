import { fetchTutorials } from "@/app/sanity/api";
import { PortableText } from "@portabletext/react";

const BlogsContent = async ({ params }) => {
  const id = params.id;
  const res = await fetchTutorials(`*[_type == "blogs" && slug.current == "${id}"][0]{content, title}`);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#ffffff] py-12">
      <div className="container mx-auto px-4 md:px-6">
        {res ? (
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12 transition duration-300 hover:shadow-xl">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              {res.title}
            </h1>
            <hr className="mb-6 border-gray-200" />
            <div className="prose prose-indigo prose-lg max-w-none text-gray-700 leading-relaxed">
              <PortableText value={res.content} />
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl text-gray-700 font-semibold">No content found for this blog.</h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsContent;
