import { ProjectImage } from "@/features/portfolio/components/project/ProjectImage";
import { isProjectItem } from "@/features/portfolio/lib/portfolio-routing";
import type { DetailItem } from "@/features/portfolio/types";
import { ImageLightbox } from "@/shared/components/media/ImageLightbox";
import { LoadableImage } from "@/shared/components/media/LoadableImage";
import { Maximize2 } from "lucide-react";
import { useState } from "react";

export const PortfolioDetailMedia = ({
  item,
  org,
  projectImages,
  title,
}: {
  item: DetailItem;
  org?: string;
  projectImages: string[];
  title: string;
}) => {
  const [failedImageSrc, setFailedImageSrc] = useState<string | null>(null);
  const [imageLightboxOpen, setImageLightboxOpen] = useState(false);
  const imageAlt = `${org || title} preview`;

  if (isProjectItem(item)) {
    return projectImages.length > 0 ? (
      <div>
        <ProjectImage images={projectImages} alt={`${title} preview`} />
      </div>
    ) : null;
  }

  if (!item.img || failedImageSrc === item.img) {
    return null;
  }

  return (
    <>
      <figure className="overflow-hidden rounded-sm border border-border bg-muted/40">
        <button
          type="button"
          aria-label="Open image viewer"
          onClick={() => setImageLightboxOpen(true)}
          className="group relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <LoadableImage
            key={item.img}
            src={`/${item.img}`}
            alt={imageAlt}
            className="aspect-video w-full object-cover object-center"
            loading="eager"
            onError={() => setFailedImageSrc(item.img ?? null)}
          />
          <span className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-background/85 text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 className="h-4 w-4" strokeWidth={1.8} />
          </span>
        </button>
      </figure>

      <ImageLightbox
        alt={imageAlt}
        images={[item.img]}
        open={imageLightboxOpen}
        onImageError={() => setFailedImageSrc(item.img ?? null)}
        onOpenChange={setImageLightboxOpen}
      />
    </>
  );
};
