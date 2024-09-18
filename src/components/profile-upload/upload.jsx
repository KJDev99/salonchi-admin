/* eslint-disable react/prop-types */
import * as React from "react";
import Popup from "./popup";
import { UploadImage } from "./upload-image";
import { Wrapper } from "./style";
import IconUser from "@/assets/user.png";

export const ProfileUpload = ({ setPhoto, image, setImage }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  console.log(open, "open");
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src={image === null ? IconUser : image}
            alt="cropped"
            width={169}
            height={169}
            className="upload-image"
          />
        </div>

        <UploadImage
          setPhoto={setPhoto}
          getUploadedFile={(image) => {
            setOpen(true);
            setImage(image);
          }}
        />
        <Popup
          open={open}
          handleClose={handleClose}
          image={image}
          getCroppedFile={(image) => {
            setImage(image);
            handleClose();
          }}
        />
      </div>
    </Wrapper>
  );
};
