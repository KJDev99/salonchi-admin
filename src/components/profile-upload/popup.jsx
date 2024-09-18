/* eslint-disable react/prop-types */
import { Modal } from "antd";
import CropperDemo from "./cropper";

export default function Popup({ open, image, handleClose, getCroppedFile }) {
  return (
    <div>
      <Modal
        open={open}
        onOk={() => console.log("click")}
        onCancel={handleClose}
        footer={null}
        width={902}
      >
        <CropperDemo
          handleClose={handleClose}
          src={image}
          getCroppedFile={getCroppedFile}
        />
      </Modal>
    </div>
  );
}
