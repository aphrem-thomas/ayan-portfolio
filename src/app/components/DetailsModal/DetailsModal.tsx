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
>
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-[#1e1f20] text-white rounded-lg p-6 md:mx-4 relative w-full h-full md:w-[50vw] md:h-auto md:max-h-full overflow-y-auto"
        style={{
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          border: "1.5px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
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
        <h2 className="text-2xl font-bold mb-4">{details.title}</h2>
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
            <iframe
              width="100%"
              height="315"
              src={details.demo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded"
            ></iframe>
          </div>
        )}
      </div>
    </div>  
</Modal>
  );
};

export default DetailsModal;
