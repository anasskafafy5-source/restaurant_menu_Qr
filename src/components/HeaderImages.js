"use client";

import Image from "next/image";
import { useState } from "react";

const SUPABASE_IMAGE_PATHS = [
  "/storage/v1/object/public/",
  "/storage/v1/render/image/public/",
];

function getSafeImageSource(source) {
  if (typeof source !== "string" || !source.trim()) {
    return null;
  }

  const normalizedSource = source.trim();

  if (normalizedSource.startsWith("/") && !normalizedSource.startsWith("//")) {
    return normalizedSource;
  }

  try {
    const imageUrl = new URL(normalizedSource);
    const supabaseUrl = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL);
    const isSupabaseImage = SUPABASE_IMAGE_PATHS.some((path) =>
      imageUrl.pathname.startsWith(path),
    );

    if (
      imageUrl.protocol === "https:" &&
      imageUrl.hostname === supabaseUrl.hostname &&
      isSupabaseImage
    ) {
      return normalizedSource;
    }
  } catch {
    return null;
  }

  return null;
}

function SafeHeaderImage({ src, alt, sizes, preload = false, fallback }) {
  const safeSource = getSafeImageSource(src);
  const [failedSource, setFailedSource] = useState(null);

  if (!safeSource || failedSource === safeSource) {
    return fallback;
  }

  return (
    <Image
      src={safeSource}
      alt={alt}
      fill
      preload={preload}
      sizes={sizes}
      className="object-cover"
      onError={() => setFailedSource(safeSource)}
    />
  );
}

function RestaurantIcon({ className = "size-10" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="24" cy="25" r="11" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 14V9m-3 1.5V14m6-3.5V14M11 10v11m0 0c-2.2 0-4-1.8-4-4v-7m4 11v17m26-28v28m0-28c-3.2 3.5-4.5 8.2-4 14h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CoverFallback() {
  return (
    <div
      role="img"
      aria-label="Restaurant cover unavailable"
      className="absolute inset-0 overflow-hidden bg-gradient-to-br from-primary/25 via-secondary/15 to-tertiary/15"
    >
      <div className="absolute -left-10 -top-12 size-40 rounded-full bg-secondary/15 blur-2xl" />
      <div className="absolute -bottom-14 -right-8 size-44 rounded-full bg-primary/20 blur-2xl" />
      <div className="absolute inset-0 flex items-center justify-center text-primary/80">
        <div className="flex size-20 items-center justify-center rounded-full border border-white/60 bg-white/45 shadow-sm backdrop-blur-sm">
          <RestaurantIcon />
        </div>
      </div>
    </div>
  );
}

function getRestaurantInitials(name) {
  if (typeof name !== "string") {
    return "";
  }

  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function LogoFallback({ name }) {
  const initials = getRestaurantInitials(name);

  return (
    <div
      role="img"
      aria-label="Restaurant logo unavailable"
      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral via-secondary/20 to-primary/20 text-primary"
    >
      {initials ? (
        <span className="font-serif text-2xl font-semibold tracking-wide">
          {initials}
        </span>
      ) : (
        <RestaurantIcon className="size-9" />
      )}
    </div>
  );
}

export default function HeaderImages({ cover, logo, name }) {
  const restaurantName =
    typeof name === "string" && name.trim() ? name.trim() : "Restaurant";

  return (
    // the images
    <div className="relative pb-12">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral">
        <SafeHeaderImage
          src={cover}
          alt={`${restaurantName} cover`}
          preload
          sizes="100vw"
          fallback={<CoverFallback />}
        />
      </div>

      <div className="absolute bottom-0 left-1/2 size-24 -translate-x-1/2 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg">
        <SafeHeaderImage
          src={logo}
          alt={`${restaurantName} logo`}
          sizes="96px"
          fallback={<LogoFallback name={restaurantName} />}
        />
      </div>
    </div>
  );
}
