const Modal = ({ isOpen, onClose, children, positionStyles }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose} // Close modal when clicking outside
      >
        <div
          className="absolute bg-gray-800 rounded-lg p-6 shadow-lg"
          style={positionStyles} // Dynamically set position
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-white bg-red-500 px-3 py-1 rounded-full"
            onClick={onClose}
          >
            X
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  