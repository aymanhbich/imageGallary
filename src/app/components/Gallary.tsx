import fetchImages from "@/lib/fetchImages";
import { ImagesResults } from "@/model/Images";
import ImgContainer from "./ImgContainer";

export default async function Gallary() {
  const url = "https://api.pexels.com/v1/curated";
  const images: ImagesResults | undefined = await fetchImages(url);
  if (!images) <h1>no</h1>;
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {images?.photos.map((photo) => (
        <ImgContainer photo={photo} />
      ))}
    </section>
  );
}
