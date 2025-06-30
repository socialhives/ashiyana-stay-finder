
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ChevronLeft, ChevronRight, Quote, ThumbsUp, Heart } from 'lucide-react';

const TestimonialsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [likedTestimonials, setLikedTestimonials] = useState<number[]>([]);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      text: "Ashiyana PG feels like a second home. The staff is caring and the facilities are excellent. I've been staying here for 2 years now and couldn't be happier!",
      location: "Working Professional",
      profession: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9d5d5de?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bgImage: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      experience: "2 Years",
      highlights: ["Safety", "Food Quality", "WiFi Speed"]
    },
    {
      id: 2,
      name: "Rahul Kumar",
      rating: 5,
      text: "Safe, clean, and affordable. The food is homely and the location is perfect for my office commute. The community here is amazing!",
      location: "IT Professional",
      profession: "Data Analyst",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bgImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      experience: "1.5 Years",
      highlights: ["Location", "Food", "Community"]
    },
    {
      id: 3,
      name: "Sneha Gupta",
      rating: 4,
      text: "Great place for students and working professionals. The WiFi is fast and the security is top-notch. Very satisfied with my stay!",
      location: "Student",
      profession: "MBA Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bgImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      experience: "8 Months",
      highlights: ["WiFi", "Security", "Study Environment"]
    },
    {
      id: 4,
      name: "Arjun Patel",
      rating: 5,
      text: "The management is very understanding and helpful. The rooms are spacious and well-maintained. Highly recommend to anyone looking for quality PG accommodation.",
      location: "Working Professional",
      profession: "Marketing Executive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      bgImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      experience: "3 Years",
      highlights: ["Management", "Room Quality", "Maintenance"]
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length, isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleLike = (testimonialId: number) => {
    setLikedTestimonials(prev => 
      prev.includes(testimonialId) 
        ? prev.filter(id => id !== testimonialId)
        : [...prev, testimonialId]
    );
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Residents Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from our happy residents who call Ashiyana PG their home
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative">
            <Card className="border-0 shadow-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
              <div className="relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={currentTestimonial.bgImage} 
                    alt="Background"
                    className="w-full h-full object-cover opacity-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                </div>

                <CardContent className="relative p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Person Info */}
                    <div className="text-center lg:text-left">
                      <div className="relative inline-block mb-6">
                        <img 
                          src={currentTestimonial.image} 
                          alt={currentTestimonial.name}
                          className="w-24 h-24 rounded-full mx-auto lg:mx-0 object-cover border-4 border-white shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-2">
                          <Quote className="w-4 h-4" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-gray-600 mb-1">{currentTestimonial.profession}</p>
                      <p className="text-gray-500 text-sm mb-4">{currentTestimonial.location}</p>
                      
                      <div className="bg-blue-100 rounded-full px-4 py-2 text-blue-800 text-sm font-medium inline-block mb-4">
                        {currentTestimonial.experience} Experience
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {currentTestimonial.highlights.map((highlight, idx) => (
                          <div key={idx} className="bg-white/50 rounded-full px-3 py-1 text-xs text-gray-700">
                            ✓ {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="lg:col-span-2">
                      {/* Stars */}
                      <div className="flex justify-center lg:justify-start gap-1 mb-6">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                        "{currentTestimonial.text}"
                      </blockquote>

                      {/* Interactive Elements */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleLike(currentTestimonial.id)}
                            className={`hover:bg-red-50 ${
                              likedTestimonials.includes(currentTestimonial.id) 
                                ? 'text-red-600' 
                                : 'text-gray-400'
                            }`}
                          >
                            <Heart className={`w-5 h-5 mr-1 ${
                              likedTestimonials.includes(currentTestimonial.id) ? 'fill-current' : ''
                            }`} />
                            {likedTestimonials.includes(currentTestimonial.id) ? 'Liked' : 'Like'}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-600">
                            <ThumbsUp className="w-5 h-5 mr-1" />
                            Helpful
                          </Button>
                        </div>

                        <div className="text-sm text-gray-500">
                          {currentSlide + 1} of {testimonials.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <Button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg z-10"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonial Thumbnails */}
          <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentSlide(index)}
                className={`flex-shrink-0 p-3 rounded-lg transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                    : 'bg-white hover:bg-gray-50 text-gray-600 shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs opacity-75">{testimonial.profession}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="text-center mt-6">
            <Button
              variant="outline"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="bg-white/50 backdrop-blur-sm"
            >
              {isAutoPlay ? 'Pause' : 'Play'} Auto-slide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
