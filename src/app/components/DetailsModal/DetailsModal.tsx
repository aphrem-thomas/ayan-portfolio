import Image from "next/image";
import Button from "@mui/material/Button";
import contentData from "@/data/content.json";
import { Modal } from "@mui/material";
import { useState } from "react";

const DetailsModal = ({
  details=null, onClose
}: {
    details: any;
    onClose: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  
  // Combine videos and images into a gallery array
  const galleryItems = [];
  if (details?.demo) {
    galleryItems.push({ type: 'video', src: details.demo });
  }
  if (details?.image) {
    galleryItems.push({ type: 'image', src: details.image });
  }

  const handlePrevious = () => {
    setSlideDirection('right');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
      setSlideDirection(null);
    }, 300);
  };

  const handleNext = () => {
    setSlideDirection('left');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
      setSlideDirection(null);
    }, 300);
  };

  return (
    <Modal
    open={details !== null}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    slotProps={{
      backdrop: {
        sx: {
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
      }
    }}
>
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-[#1e1f20] text-white rounded-lg p-6 2xl:p-10 md:mx-4 relative w-full h-full md:w-[50vw] md:max-h-[80vh] overflow-y-auto"
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          border: "1.5px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <div className="w-full flex justify-end">
          <button
          onClick={onClose}
          className=" text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
        
        {/* Gallery Carousel */}
        {galleryItems.length > 0 && (
          <div className="mb-4 relative overflow-hidden rounded">
            {/* Carousel Container */}
            <div className="relative w-full">
              <div className="flex transition-transform duration-500 ease-in-out" 
                   style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {galleryItems.map((item, index) => (
                  <div key={index} className="min-w-full flex-shrink-0">
                    {item.type === 'video' ? (
                      <div className="relative w-full" style={{ height: "100%" }}>
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded"
                          src={`https://www.youtube.com/embed/${item.src.split('v=')[1]?.split('&')[0] || item.src.split('/').pop()}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <img
                        src={item.src}
                        alt={`${details.title} - ${index + 1}`}
                        className="rounded w-full h-auto object-scale-down"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows - only show if more than 1 item */}
            {galleryItems.length > 1 && (
              <div className="flex justify-center items-center gap-4 mt-4">
                <button
                  onClick={handlePrevious}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                  aria-label="Previous"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                
                <span className="text-sm text-gray-400">
                  {currentIndex + 1} / {galleryItems.length}
                </span>
                
                <button
                  onClick={handleNext}
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                  aria-label="Next"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
        
        <p className="mb-4">{details.detailedDescription || details.description}</p>
      </div>
    </div>  
</Modal>
  );
};

export default DetailsModal;
