import { useEffect, useState } from "react";

import { ImageLightbox } from "@/shared/components/media/ImageLightbox";
import { LoadableImage } from "@/shared/components/media/LoadableImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/shared/components/ui/Carousel";
import { sortProjectImages } from "@/features/portfolio/lib/portfolio-images";
import { Maximize2 } from "lucide-react";

export const ProjectImage = ({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) => {
  const [failedImages, setFailedImages] = useState<string[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const resolvedImages = sortProjectImages(images);
  const visibleImages = resolvedImages.filter(
    (image) => !failedImages.includes(image),
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    const syncPosition = () => {
      const nextIndex = Math.min(
        api.selectedScrollSnap(),
        Math.max(visibleImages.length - 1, 0),
      );

      if (api.selectedScrollSnap() !== nextIndex) {
        api.scrollTo(nextIndex);
      }

      setSelectedIndex(nextIndex);
    };

    syncPosition();
    api.on("reInit", syncPosition);
    api.on("select", syncPosition);

    return () => {
      api.off("reInit", syncPosition);
      api.off("select", syncPosition);
    };
  }, [api, visibleImages.length]);

  const handleImageError = (image: string) => {
    setFailedImages((current) =>
      current.includes(image) ? current : [...current, image],
    );
  };

  const openLightbox = (index: number) => {
    setLightboxInitialIndex(index);
    setLightboxOpen(true);
  };

  if (!visibleImages.length) return null;

  if (visibleImages.length === 1) {
    const [image] = visibleImages;

    return (
      <>
        <figure className="overflow-hidden rounded-sm border border-border bg-muted/40">
          <button
            type="button"
            aria-label="Open image viewer"
            onClick={() => openLightbox(0)}
            className="group relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <LoadableImage
              key={image}
              src={`/${image}`}
              alt={alt}
              className="aspect-video w-full object-cover object-top"
              loading="eager"
              onError={() => handleImageError(image)}
            />
            <span className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <Maximize2 className="h-4 w-4" strokeWidth={1.8} />
            </span>
          </button>
        </figure>

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
  }

  return (
    <>
      <figure className="overflow-hidden rounded-sm border border-border bg-muted/40">
        <Carousel setApi={setApi} className="w-full">
          <div className="absolute right-3 top-3 z-10 rounded-full bg-background/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
            {selectedIndex + 1} / {visibleImages.length}
          </div>

          <CarouselContent className="ml-0">
            {visibleImages.map((image, index) => (
              <CarouselItem key={image} className="pl-0">
                <button
                  type="button"
                  aria-label={`Open image ${index + 1} of ${visibleImages.length}`}
                  onClick={() => openLightbox(index)}
                  className="group relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <LoadableImage
                    key={image}
                    src={`/${image}`}
                    alt={`${alt} ${index + 1} of ${visibleImages.length}`}
                    className="aspect-video w-full object-cover object-top"
                    loading={index === 0 ? "eager" : "lazy"}
                    onError={() => handleImageError(image)}
                  />
                  <span className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-3 top-auto bottom-3 translate-y-0 bg-background/85 backdrop-blur-sm hover:bg-background" />
          <CarouselNext className="right-3 top-auto bottom-3 translate-y-0 bg-background/85 backdrop-blur-sm hover:bg-background" />
        </Carousel>
      </figure>

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
