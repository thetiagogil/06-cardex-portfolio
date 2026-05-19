import { LoadableImage } from "@/shared/components/media/LoadableImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/shared/components/ui/Carousel";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const getClampedIndex = (index: number, total: number) =>
  Math.min(Math.max(index, 0), Math.max(total - 1, 0));

export const ImageLightbox = ({
  alt,
  images,
  initialIndex = 0,
  open,
  onImageError,
  onOpenChange,
}: {
  alt: string;
  images: string[];
  initialIndex?: number;
  open: boolean;
  onImageError?: (image: string) => void;
  onOpenChange: (open: boolean) => void;
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(
    getClampedIndex(initialIndex, images.length),
  );
  const initialActiveIndex = getClampedIndex(initialIndex, images.length);
  const activeIndex = getClampedIndex(
    api ? selectedIndex : initialActiveIndex,
    images.length,
  );

  useEffect(() => {
    if (!open || images.length > 0) {
      return;
    }

    onOpenChange(false);
  }, [images.length, onOpenChange, open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    api?.scrollTo(initialActiveIndex);
  }, [api, initialActiveIndex, open]);

  useEffect(() => {
    if (!open || !api) {
      return;
    }

    const syncPosition = () => {
      setSelectedIndex(
        getClampedIndex(api.selectedScrollSnap(), images.length),
      );
    };

    syncPosition();
    api.on("reInit", syncPosition);
    api.on("select", syncPosition);

    return () => {
      api.off("reInit", syncPosition);
      api.off("select", syncPosition);
    };
  }, [api, images.length, open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
        return;
      }

      if (!api || images.length <= 1) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        api.scrollPrev();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        api.scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [api, images.length, onOpenChange, open]);

  if (!open || images.length === 0) {
    return null;
  }

  const counterLabel =
    images.length > 1 ? `${activeIndex + 1} / ${images.length}` : null;

  return createPortal(
    <div
      className="bg-background/95 text-foreground fixed inset-0 z-100 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} image viewer`}
      onMouseDown={() => onOpenChange(false)}
    >
      <div
        className="flex h-dvh flex-col px-4 py-4 md:px-8 md:py-6"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="min-h-6">
            {counterLabel && (
              <p className="bg-background/85 text-foreground rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase">
                {counterLabel}
              </p>
            )}
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close image viewer"
            onClick={() => onOpenChange(false)}
            className="border-border bg-background/85 text-foreground hover:bg-foreground hover:text-background focus-visible:ring-ring flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:outline-none"
          >
            <X className="h-4 w-4" strokeWidth={1.8} />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center pt-4">
          {images.length === 1 ? (
            <LoadableImage
              key={images[0]}
              src={`/${images[0]}`}
              alt={alt}
              className="max-h-[calc(100dvh-7rem)] max-w-full object-contain"
              loading="eager"
              onError={() => onImageError?.(images[0])}
            />
          ) : (
            <Carousel
              opts={{ startIndex: activeIndex }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem
                    key={image}
                    className="flex items-center justify-center pl-0"
                  >
                    <LoadableImage
                      src={`/${image}`}
                      alt={`${alt} ${index + 1} of ${images.length}`}
                      className="max-h-[calc(100dvh-7rem)] max-w-full object-contain"
                      loading={index === activeIndex ? "eager" : "lazy"}
                      onError={() => onImageError?.(image)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="bg-background/85 hover:bg-background top-1/2 left-2 h-10 w-10 -translate-y-1/2 backdrop-blur-sm md:left-4" />
              <CarouselNext className="bg-background/85 hover:bg-background top-1/2 right-2 h-10 w-10 -translate-y-1/2 backdrop-blur-sm md:right-4" />
            </Carousel>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};
