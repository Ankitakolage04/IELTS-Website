import React from 'react';

const Features = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: 'Speaking Practice', desc: 'Interactive AI-driven speaking sessions.', img: 'https://images.pexels.com/photos/4145203/pexels-photo-4145203.jpeg?auto=compress&cs=tinysrgb&h=150&w=150' },
          { title: 'Mock Tests', desc: 'Real exam-like tests to track progress.', img: 'https://images.pexels.com/photos/4145199/pexels-photo-4145199.jpeg?auto=compress&cs=tinysrgb&h=150&w=150' },
          { title: 'Writing Assistance', desc: 'Feedback to improve essays and reports.', img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=150&w=150' },
          { title: 'AI Band Score', desc: 'Instant performance scoring with AI.', img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&h=150&w=150' },
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img src={feature.img} alt={feature.title} className="mb-4" />
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
