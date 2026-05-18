import { cn } from "@/shared/lib/cn";
import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

type LoadableImageProps = ComponentPropsWithoutRef<"img">;

export const LoadableImage = ({
  className,
  onError,
  onLoad,
  src,
  ...props
}: LoadableImageProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loadedSrc, setLoadedSrc] = useState<string>();
  const isLoaded = Boolean(src && loadedSrc === src);

  useEffect(() => {
    const image = imageRef.current;

    if (image?.complete && image.naturalWidth > 0) {
      setLoadedSrc(src);
    }
  }, [src]);

  return (
    <img
      ref={imageRef}
      {...props}
      src={src}
      className={cn(
        className,
        "transition-opacity duration-200",
        isLoaded ? "opacity-100" : "opacity-0",
      )}
      onLoad={(event) => {
        setLoadedSrc(src);
        onLoad?.(event);
      }}
      onError={(event) => {
        setLoadedSrc(undefined);
        onError?.(event);
      }}
    />
  );
};
