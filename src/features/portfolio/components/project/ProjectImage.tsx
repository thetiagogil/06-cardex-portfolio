import { useState } from "react";

import { sortProjectImages } from "@/features/portfolio/lib/portfolio-images";
import { ImageLightbox } from "@/shared/components/media/ImageLightbox";
import { LoadableImage } from "@/shared/components/media/LoadableImage";
import { Maximize2 } from "lucide-react";

export const ProjectImage = ({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) => {
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);
  const visibleImages = sortProjectImages(images).filter(
    (image) => !failedImages.includes(image),
  );

  const handleImageError = (image: string) => {
    setFailedImages((current) =>
      current.includes(image) ? current : [...current, image],
    );
  };

  const openLightbox = (index: number) => {
    setLightboxInitialIndex(index);
    setLightboxOpen(true);
  };

  if (visibleImages.length === 0) return null;

  return (
    <>
      <div className="space-y-8 md:space-y-12">
        {visibleImages.map((image, index) => {
          const imageNumber = index + 1;

          return (
            <figure
              key={image}
              className="border-border bg-muted/40 overflow-hidden rounded-sm border"
            >
              <button
                type="button"
                aria-label={`Open image ${imageNumber} of ${visibleImages.length}`}
                onClick={() => openLightbox(index)}
                className="group focus-visible:ring-ring relative block w-full cursor-zoom-in focus-visible:ring-2 focus-visible:outline-none"
              >
                <LoadableImage
                  src={`/${image}`}
                  alt={
                    index === 0
                      ? alt
                      : `${alt} ${imageNumber} of ${visibleImages.length}`
                  }
                  className="aspect-[16/10] w-full object-cover object-top md:aspect-video"
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={() => handleImageError(image)}
                />
                <span className="bg-background/85 text-foreground absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="h-4 w-4" strokeWidth={1.8} />
                </span>
              </button>
            </figure>
          );
        })}
      </div>

      <ImageLightbox
        alt={alt}
        images={visibleImages}
        initialIndex={lightboxInitialIndex}
        open={lightboxOpen}
        onImageError={handleImageError}
        onOpenChange={setLightboxOpen}
      />
    </>
  );
};
