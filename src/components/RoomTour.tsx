
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X, Play, Pause, RotateCcw } from 'lucide-react';

const RoomTour = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const roomImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Single Room with Study Area',
      title: 'Single Occupancy Room',
      description: 'Spacious single room with attached bathroom, study table, and wardrobe'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Common Living Area',
      title: 'Common Living Room',
      description: 'Comfortable seating area for relaxation and socializing'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Modern Kitchen',
      title: 'Shared Kitchen',
      description: 'Well-equipped kitchen with modern appliances and dining area'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Double Sharing Room',
      title: 'Double Sharing Room',
      description: 'Comfortable double occupancy room with individual storage spaces'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Study Area',
      title: 'Dedicated Study Space',
      description: 'Quiet study area with proper lighting and comfortable seating'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1564540574859-0dfb63293365?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Bathroom',
      title: 'Clean Bathrooms',
      description: 'Modern, well-maintained bathrooms with 24/7 hot water'
    }
  ];

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlay && selectedImage !== null) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % roomImages.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, selectedImage, roomImages.length]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsAutoPlay(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % roomImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + roomImages.length) % roomImages.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const resetTour = () => {
    setCurrentImageIndex(0);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Virtual Room Tour
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comfortable and well-furnished rooms through our interactive gallery
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <Button 
            onClick={toggleAutoPlay}
            variant="outline"
            className="flex items-center gap-2"
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isAutoPlay ? 'Pause Tour' : 'Start Auto Tour'}
          </Button>
          
          <Button 
            onClick={resetTour}
            variant="outline"
            className="flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset Tour
          </Button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {roomImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-lg overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-white text-black hover:bg-gray-100">
                      View Full Size
                    </Button>
                  </div>
                </div>
                {currentImageIndex === index && isAutoPlay && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Tour Status */}
        {isAutoPlay && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                Auto Tour Active - Image {currentImageIndex + 1} of {roomImages.length}
              </span>
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                onClick={closeLightbox}
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100"
              >
                <X className="w-4 h-4" />
              </Button>

              <div className="relative">
                <img
                  src={roomImages[currentImageIndex].src}
                  alt={roomImages[currentImageIndex].alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />

                {/* Navigation Buttons */}
                <Button
                  onClick={prevImage}
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <Button
                  onClick={nextImage}
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Image Info */}
              <div className="bg-white p-4 rounded-b-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {roomImages[currentImageIndex].title}
                </h3>
                <p className="text-gray-600">
                  {roomImages[currentImageIndex].description}
                </p>
                <div className="mt-2 text-sm text-gray-500">
                  Image {currentImageIndex + 1} of {roomImages.length}
                </div>
              </div>

              {/* Lightbox Controls */}
              <div className="flex justify-center gap-4 mt-4">
                <Button 
                  onClick={toggleAutoPlay}
                  variant="outline"
                  className="bg-white hover:bg-gray-100 flex items-center gap-2"
                >
                  {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isAutoPlay ? 'Pause' : 'Auto Play'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomTour;
