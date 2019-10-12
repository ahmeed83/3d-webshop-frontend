import React, { useState } from "react";
import { FormGroup, CustomInput, FormText} from "reactstrap";

const AdminUploadPic = params => {

  const [imageName, setImageName] = useState("");

  const uploadPicture = e => {
    e.preventDefault();
    params.setImage(e.target.files[0])
    setImageName(e.target.files[0].name)
  };

  return (
      <FormGroup>
        <FormText color="muted">
          Please use only files thats end up with .jpg, .jpeg or .png
        </FormText>
        <CustomInput
          accept=".jpg,.jpeg,.png"
          type="file"
          name="file"
          label={imageName}
          id="exampleFile"
          onChange={uploadPicture}
        />
      </FormGroup>
  );
}

export default AdminUploadPic;
