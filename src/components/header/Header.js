import React, { useState } from "react";
import "../header/header.scss";
import { Modal } from "../modal/Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <nav className="flex justify-end">
        <button className="text-sm btn" onClick={openModal}>
          experience
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </nav>
    </>
  );
};

export default Header;
