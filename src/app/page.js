import Card from "./components/card";
import { fetchTutorials } from "@/app/sanity/api";
import Tutorials from "./tutorials/page";
import Testimonial from "./testimonial/page";

const HomePage = async () => {
  const res = await fetchTutorials(`*[_type == "blogs"]{
    _id,
    title,
    slug,
    description,
    _createdAt,
    image,
    category,
    views,
    comments_no
  }`);

  return (
    <main>
      {/* Hero Section with Gradient */}
      <section
        className="relative text-white body-font"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold leading-tight">
              Learn Faster, Smarter, Better
            </h1>
            <p className="mb-8 leading-relaxed max-w-xl text-lg opacity-90">
              Level up your skills with our curated tutorials and engaging blog posts. Discover something new every day.
            </p>
            <div className="flex justify-center">
              <a
                href="/tutorials"
                className="inline-flex text-white bg-pink-500 border-0 py-3 px-7 focus:outline-none hover:bg-pink-600 rounded-full text-lg shadow-md"
              >
                Explore Tutorials
              </a>
              <a
                href="/blog"
                className="ml-4 inline-flex text-gray-800 bg-white border-0 py-3 px-7 focus:outline-none hover:bg-gray-100 rounded-full text-lg shadow-md"
              >
                Read Blog
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
            <img
              className="object-cover object-center rounded-xl shadow-2xl"
              alt="hero"
              src="https://github.com/imarjunshrma/nextjs-blog/blob/typescript/frontend/public/hero1.jpg?raw=true"
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="text-gray-800 body-font bg-[#ebebeb] py-14 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Latest From The Blogs
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {res.map((val) => (
              <Card
                key={val._id}
                id={val._id}
                url={`/blog/${val.slug?.current}`}
                image={val.image}
                title={val.title || "Untitled Post"}
                description={val.description || "No description available."}
                category={val.category || "Uncategorized"}
                views={val.views || 0}
                comments_no={val.comments_no || 0}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="my-20">
        <Tutorials />
      </section>
      <section>
        <Testimonial />
      </section>
    </main>
  );
};

export default HomePage;