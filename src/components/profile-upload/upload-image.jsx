/* eslint-disable react/prop-types */
import styled from "styled-components";
import { ReactComponent as IconPencil } from "@/assets/pencil.svg";

const Input = styled("input")`
  display: none;
`;

export const UploadImage = ({ getUploadedFile, setPhoto }) => {
  const onChange = (e) => {
    e.preventDefault();
    setPhoto(e.target.files[0]);
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    if (files.length === 0) {
      return alert("Please select a file.");
    }
    const reader = new FileReader();
    reader.onload = () => {
      getUploadedFile(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  return (
    <label htmlFor="contained-button-file">
      <Input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        onChange={onChange}
      />
      <span className="edit-pencil">
        <IconPencil />
      </span>
    </label>
  );
};
