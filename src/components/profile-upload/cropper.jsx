/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function CropperDemo({ src, getCroppedFile }) {
  const cropperRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    const img = cropper.getCroppedCanvas().toDataURL();
    getCroppedFile(img);
  };

  return (
    <>
      {loading && <p>loading...</p>}
      <Cropper
        src={src}
        style={{ maxHeight: 400, width: "100%" }}
        initialAspectRatio={16 / 9}
        guides={false}
        ready={() => {
          setLoading(false);
        }}
        ref={cropperRef}
      ></Cropper>
      <button
        style={{
          float: "right",
          margin: "24px 0",
          fontFamily: "Readex Pro, sans-serif",
          background: "red",
          color: "#fff",
          border: "none",
          borderRadius: 10,
          minWidth: 135,
          height: 38,
          backgroundColor: "#6417B0",
        }}
        onClick={handleClick}
        autoFocus
        color="red"
      >
        Qirqish
      </button>
    </>
  );
}
