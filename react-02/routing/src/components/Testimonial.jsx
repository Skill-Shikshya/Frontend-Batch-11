import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO, Example Inc.",
    image: "https://via.placeholder.com/150",
    message:
      "This blog offers amazing insights and truly inspires me to think outside the box.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Director, Acme Corp.",
    image: "https://via.placeholder.com/150",
    message:
      "I love the creative approach and the useful tips shared in every post!",
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full mr-4"
          src={testimonial.image}
          alt={`${testimonial.name} profile`}
        />
        <div>
          <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">{testimonial.title}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial.message}"</p>
    </div>
  );
};

const TestimonialComponent = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponent;
