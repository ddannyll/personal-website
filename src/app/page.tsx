import DisplayName from "@/components/displayName";
import Header from "@/components/header";
import ImageCaption, { Camera, Film, Lens } from "@/components/imageCaption";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-orange-50/20">
      <div className="max-w-screen-xl px-2 md:px-8 mx-auto text-red-400 pt-12">
        <Header pageTitle="swe portfolio" canGoBack></Header>
        <Image
          src={"/background_dev.jpg"}
          alt="background"
          width={1920}
          height={1080}
          className="max-w-full max-h-[60vh] object-cover rounded-3xl my-4 shadow"
        ></Image>
        <ImageCaption
          camera={Camera.OLYMPUS_OM2N}
          lens={Lens.ZUIKO_50MM_1_8}
          film={Film.CINESTILL_800T}
        ></ImageCaption>
        <DisplayName></DisplayName>
      </div>
    </div>
  );
}
