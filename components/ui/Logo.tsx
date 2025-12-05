import React from "react";
import Image, { ImageProps } from "next/image";

interface LogoProps extends Omit<ImageProps, "src" | "alt"> {
  /** Source URL or path to the PNG image */
  src: string;
  /** Alt text for accessibility - required for better UX */
  alt: string;
  /** Optional custom styles for the container */
  containerStyle?: React.CSSProperties;
  /** Container class name */
  containerClassName?: string;
  /** Whether to use priority loading (for LCP) */
  priority?: boolean;
  /** Quality of the image (1-100) */
  quality?: number;
}

/**
 * Logo component using Next.js Image for optimized PNG rendering
 *
 * @example
 * // Basic usage with local image
 * <Logo src="/logo.png" alt="Company Logo" width={150} height={50} />
 *
 * @example
 * // With external image and priority loading
 * <Logo
 *   src="https://example.com/logo.png"
 *   alt="External Logo"
 *   width={200}
 *   height={60}
 *   priority={true}
 *   containerClassName="custom-logo-container"
 * />
 */
const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  containerStyle,
  containerClassName = "",
  priority = false,
  quality = 90,
  ...imageProps
}) => {
  // Determine if the image is external (needs next.config.js configuration)
  const isExternal = src.startsWith("http://") || src.startsWith("https://");

  // Default sizes if not provided
  const defaultWidth = width || 150;
  const defaultHeight = height || 50;

  return (
    <div
      className={`logo-container ${containerClassName}`}
      style={{
        position: "relative",
        display: "inline-block",
        lineHeight: 0,
        ...containerStyle,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={typeof defaultWidth === "number" ? defaultWidth : 150}
        height={typeof defaultHeight === "number" ? defaultHeight : 50}
        className={`logo ${className}`}
        priority={priority}
        quality={quality}
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
        {...(isExternal ? { unoptimized: true } : {})}
        {...imageProps}
      />
    </div>
  );
};

export default Logo;
