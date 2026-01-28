import Image from "next/image";
import Button from "@mui/material/Button";
import contentData from "@/data/content.json";
import { Modal } from "@mui/material";

const DetailsModal = ({
  details=null, onClose
}: {
    details: any;
    onClose: () => void;
}) => {
  

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
        className="bg-[#1e1f20] text-white rounded-lg p-6 md:mx-4 relative w-full h-full md:w-[50vw] md:h-auto md:max-h-full overflow-y-auto"
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
        {details.image && (
          <div className="mb-4">
            <img
              src={details.image}
              alt={details.title}
              width={600}
              height={400}
              className="rounded"
            />
          </div>
        )}
        <p className="mb-4">{details.detailedDescription || details.description}</p>
        {details.demo && (
          <div className="mb-4">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded"
                src={`https://www.youtube.com/embed/${details.demo.split('v=')[1]?.split('&')[0] || details.demo.split('/').pop()}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>  
</Modal>
  );
};

export default DetailsModal;
