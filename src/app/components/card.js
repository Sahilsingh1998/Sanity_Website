import { urlFor } from "@/app/sanity/client";
import Link from "next/link";

const Card = ({ id, url, image, comments, views, description, category, title }) => {
  return (
<div className="p-4 md:w-1/3" key={id}>
  <div className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center"
      src={image ? urlFor(image).url() : "https://via.placeholder.com/400x300"}
      alt={title || "blog"}
    />
    <div className="p-6">
      <h2 className="tracking-widest text-xs font-semibold text-indigo-600 uppercase mb-1">
        {category}
      </h2>
      <h1 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
        {title}
      </h1>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
      <div className="flex items-center justify-between">
        <Link href={url} className="text-indigo-500 font-medium text-sm hover:underline inline-flex items-center">
          Learn More
          <svg
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
        <div className="flex gap-3 text-sm text-gray-500">
          <span>👁 {views}</span>
          <span>💬 {comments}</span>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Card;