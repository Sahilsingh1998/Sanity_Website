"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "../components/TestimonialCard";
import client from "../sanity/client";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "testimonials"]{
        _id,
        name,
        description,
        designation
      }`;
      try {
        const data = await client.fetch(query);
        console.log("Fetched testimonials:", data); // Check in console
        setTestimonials(data);
      } catch (err) {
        console.error("Error fetching data from Sanity:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font bg-[#ebebeb]">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Testimonials
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>

        {loading ? (
          <p>Loading testimonials.....</p>
        ) : testimonials.length === 0 ? (
          <p>No testimonials available.</p>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500 }}
            loop={true}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial._id}>
                <TestimonialCard
                  description={testimonial.description}
                  name={testimonial.name}
                  designation={testimonial.designation}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Testimonial;
