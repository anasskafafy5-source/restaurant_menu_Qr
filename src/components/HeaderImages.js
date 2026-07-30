import Image from "next/image";

export default function HeaderImages({ cover, logo }) {
  return (
    // the images
    <div className="relative pb-12">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral">
        <Image
          src={cover}
          alt="Restaurant cover"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 size-24 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
        <Image
          src={logo}
          alt="Restaurant logo"
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
