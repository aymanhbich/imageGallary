import { Photo } from "@/model/Images";
import Image from "next/image";
import React from "react";
type Props = {
  photo: Photo;
};
export default function ImgContainer({ photo }: Props) {
  return (
    <div
      key={photo.id}
      className="h-64 bg-gray-200 rounded-xl relative overflow-hidden"
    >
      <Image
        src={photo.src.large}
        // width={photo.width}
        // height={photo.height}
        // width={250}
        // height={250}
        fill={true}
        alt={photo.alt}
        className="object-cover"
      />
    </div>
  );
}
