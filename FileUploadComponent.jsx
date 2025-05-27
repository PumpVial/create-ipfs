import { useState } from "react";

const FileUploadComponent = () => {
  const [imageString, setImageString] = useState("");

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => setImageString(reader.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  return <input type="file" onChange={handleFileUpload} />;
};

export default FileUploadComponent;
