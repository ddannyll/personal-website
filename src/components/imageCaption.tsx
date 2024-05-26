export enum Camera {
  OLYMPUS_OM2N = "Olympus OM2n",
  MINOLTA_SRT_202 = "Minolta SR-T 202",
}

export enum Lens {
  ZUIKO_50MM_1_8 = "Zuiko 50mm 1:1.8",
  MC_ROKKOR_50MM_1_4 = "MC Rokkor 50mm 1:1.4",
}

export enum Film {
  CINESTILL_800T = "CineStill 800T 35mm",
  FUJI_200 = "Fuji 200 35mm",
}

interface ImageCaptionProps {
  camera: Camera;
  lens: Lens;
  film: Film;
}
export default function ImageCaption({
  camera,
  film,
  lens,
}: ImageCaptionProps) {
  return (
    <div className="flex tracking-tighter font-light">
      <p className="grow">{camera}</p>
      <p className="grow">{lens}</p>
      <p className="grow"></p>
      <p className="grow text-right">{film}</p>
    </div>
  );
}
