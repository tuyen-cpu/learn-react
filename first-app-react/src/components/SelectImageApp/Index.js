import React, { useEffect, useState } from "react";

function Index() {
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  function handleChooseFile(e) {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    console.log(file);
  }
  return (
    <div>
      <input type="file" onChange={handleChooseFile} />
      {avatar && <img src={avatar.preview} alt="" with="100px" />}
    </div>
  );
}

export default Index;
