import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../components/Context";
import { getClass } from "../utils/getClass";
function Photos() {
  const { allPhotos } = useContext(Context);

  const imgElement = allPhotos.map((photo, i) => (
    <Image key={photo.id} img={photo} className={getClass(i)} />
  ));
  return <main className="photos">{imgElement}</main>;
}

export default Photos;
