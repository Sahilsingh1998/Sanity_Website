import TutorialsCard from "../components/TutorialsCard";
import { fetchTutorials } from "../sanity/api";

const Tutorials = async () => {
  const res = await fetchTutorials(`*[_type == "tutorials"]`);

  return (
    <section className="text-gray-600 body-font my-20">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Popular Tutorials
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>

        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {res.map((val) => (
              <TutorialsCard
                key={val._id}
                id={val._id}
                title={val.title}
                description={val.description}
                category={val.category}
                image={val.image}
                views={val.views}
                comments_no={val.comments_no}
                url={`/blog/${val.slug?.current}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;