
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Ashiyana PG feels like a second home. The staff is caring and the facilities are excellent. I've been staying here for 2 years now.",
      location: "Working Professional"
    },
    {
      name: "Rahul Kumar",
      rating: 5,
      text: "Safe, clean, and affordable. The food is homely and the location is perfect for my office commute. Highly recommended!",
      location: "Software Engineer"
    },
    {
      name: "Sneha Gupta",
      rating: 4,
      text: "Great place for students and working professionals. The WiFi is fast and the security is top-notch. Very satisfied!",
      location: "Student"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Residents Say
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from our happy residents
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonials[currentSlide].text}"
                </blockquote>

                {/* Author */}
                <div>
                  <div className="text-lg font-semibold text-gray-800">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentSlide].location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
