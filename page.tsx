
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const rescueImages = [
    {
      url: "https://readdy.ai/api/search-image?query=heartwarming%20scene%20of%20rescued%20stray%20dog%20being%20cared%20for%20by%20volunteers%2C%20emotional%20rescue%20moment%2C%20veterinary%20care%2C%20soft%20lighting%2C%20hope%20and%20compassion%2C%20realistic%20photography%2C%20warm%20colors%2C%20healing%20environment&width=375&height=200&seq=rescue1&orientation=landscape",
      caption: "Every rescue brings hope"
    },
    {
      url: "https://readdy.ai/api/search-image?query=before%20and%20after%20transformation%20of%20rescued%20stray%20dog%2C%20healthy%20happy%20dog%20after%20medical%20treatment%2C%20veterinary%20success%20story%2C%20emotional%20transformation%2C%20realistic%20photography%2C%20warm%20healing%20colors&width=375&height=200&seq=rescue2&orientation=landscape", 
      caption: "From pain to joy"
    },
    {
      url: "https://readdy.ai/api/search-image?query=volunteers%20feeding%20stray%20dogs%20with%20love%20and%20care%2C%20community%20helping%20animals%2C%20compassionate%20people%20with%20rescued%20dogs%2C%20heartwarming%20scene%2C%20realistic%20photography%2C%20soft%20warm%20lighting&width=375&height=200&seq=rescue3&orientation=landscape",
      caption: "Love heals everything"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % rescueImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-heart-fill text-orange-500 text-xl"></i>
            </div>
            <h1 className="text-lg font-pacifico text-orange-600">ShivKripa Care</h1>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-20">
        <div className="px-4 py-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Saving Lives, One Paw at a Time</h2>
          <p className="text-gray-600 text-sm">Help us rescue and care for stray dogs who need love</p>
        </div>

        <div className="relative mb-8">
          <div className="overflow-hidden rounded-xl mx-4 shadow-lg">
            <img 
              src={rescueImages[currentSlide].url}
              alt="Dog rescue"
              className="w-full h-48 object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-sm font-medium">{rescueImages[currentSlide].caption}</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-4">
            {rescueImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="px-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Link href="/donate" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-xl shadow-lg !rounded-button">
              <div className="text-center">
                <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-heart-fill text-2xl"></i>
                </div>
                <p className="font-semibold">Donate</p>
                <p className="text-xs opacity-90">Feed & heal</p>
              </div>
            </Link>
            
            <Link href="/volunteer" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-lg !rounded-button">
              <div className="text-center">
                <div className="w-8 h-8 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-hand-heart-line text-2xl"></i>
                </div>
                <p className="font-semibold">Volunteer</p>
                <p className="text-xs opacity-90">Join us</p>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Link href="/stories" className="bg-white p-4 rounded-xl shadow-md border border-gray-100 !rounded-button">
              <div className="text-center">
                <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-image-line text-xl text-purple-500"></i>
                </div>
                <p className="text-sm font-medium text-gray-700">Stories</p>
              </div>
            </Link>
            
            <Link href="/donors" className="bg-white p-4 rounded-xl shadow-md border border-gray-100 !rounded-button">
              <div className="text-center">
                <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-trophy-line text-xl text-yellow-500"></i>
                </div>
                <p className="text-sm font-medium text-gray-700">Donors</p>
              </div>
            </Link>
            
            <Link href="/updates" className="bg-white p-4 rounded-xl shadow-md border border-gray-100 !rounded-button">
              <div className="text-center">
                <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
                  <i className="ri-notification-line text-xl text-green-500"></i>
                </div>
                <p className="text-sm font-medium text-gray-700">Updates</p>
              </div>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-xl border border-orange-200 mt-6">
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-orange-500 rounded-full">
                <i className="ri-heart-pulse-line text-white text-2xl"></i>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every stray dog deserves love, care, and a chance at a better life. Through rescue, medical care, and community support, we're making a difference one paw at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-0 py-2">
        <div className="grid grid-cols-4 gap-0">
          <Link href="/" className="flex flex-col items-center justify-center py-2 px-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-home-fill text-orange-500 text-lg"></i>
            </div>
            <span className="text-xs text-orange-500 font-medium mt-1">Home</span>
          </Link>
          
          <Link href="/donate" className="flex flex-col items-center justify-center py-2 px-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-heart-line text-gray-400 text-lg"></i>
            </div>
            <span className="text-xs text-gray-400 mt-1">Donate</span>
          </Link>
          
          <Link href="/contact" className="flex flex-col items-center justify-center py-2 px-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-phone-line text-gray-400 text-lg"></i>
            </div>
            <span className="text-xs text-gray-400 mt-1">Contact</span>
          </Link>
          
          <Link href="/share" className="flex flex-col items-center justify-center py-2 px-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-share-line text-gray-400 text-lg"></i>
            </div>
            <span className="text-xs text-gray-400 mt-1">Share</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
