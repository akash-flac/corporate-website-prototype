import React from "react";
import Hero from "../../components/Hero";
import { TestimonialCard } from "../../components/TestimonialCard";
import { reviews } from "../../data/about/clientReviews";
import Footer from "../../components/Footer";

const ClientReviews = () => {
  return (
    <div>
      <Hero
        bgImage={`/src/images/client-reviews.jpeg`}
        heading={`Client Reviews`}
        content={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quam quos at fuga ea expedita, optio similique eaque. Voluptatum rem dolorum doloribus tempora voluptas animi nostrum modi quae aperiam sed.`}
      />
      <div className="m-4 p-4 flex justify-evenly flex-wrap">
        {reviews.map((reviewer) => (
          <TestimonialCard
            key={reviewer.id}
            reviewer={`${reviewer.name}`}
            reviewerDesc={`${reviewer.reviewerDesc}`}
            review={`${reviewer.review}`}
            reviewerIcon={`${reviewer.icon}`}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default ClientReviews;
