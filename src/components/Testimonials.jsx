import React from 'react';

const Testimonials = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'Alice', feedback: 'I improved my band score thanks to IELTSPro!', img: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=80&w=80' },
          { name: 'Bob', feedback: 'Amazing courses and helpful teachers!', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=80&w=80' },
          { name: 'Charlie', feedback: 'Highly recommend this institute for IELTS prep.', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=80&w=80' },
        ].map((testi, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl text-center">
            <img src={testi.img} alt={testi.name} className="mx-auto rounded-full mb-4" />
            <p className="italic mb-2">"{testi.feedback}"</p>
            <p className="font-semibold">{testi.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
