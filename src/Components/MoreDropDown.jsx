import { createPortal } from "react-dom";

const MoreDropdown = ({ children, position, dropdownRef }) => {
  return createPortal(
    <div
      ref={dropdownRef}
      className="fixed bg-white z-[9999] shadow-lg rounded-lg p-6"
      style={{ top: position.top, left: position.left }}
    >
      {children}
    </div>,
    document.body
  );
};

export default MoreDropdown;