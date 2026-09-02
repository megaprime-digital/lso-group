import { useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"
import type { Project } from "../siteData"

type GalleryDisplay = "cover" | "grid"

function getProjectImages(project: Project) {
  return [
    {
      src: project.image,
      alt: `${project.title} cover image`,
      caption: "Project overview image",
    },
    ...project.gallery,
  ]
}

export function getProjectImageCount(project: Project) {
  return getProjectImages(project).length
}

export default function ProjectImageGallery({
  project,
  display,
}: {
  project: Project
  display: GalleryDisplay
}) {
  const images = getProjectImages(project)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const lastFocusedElement = useRef<HTMLElement | null>(null)
  const titleId = useId()

  const closeGallery = () => setActiveIndex(null)

  useEffect(() => {
    if (activeIndex === null) return

    lastFocusedElement.current = (document.activeElement as HTMLElement)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery()
        return
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null ? null : (index - 1 + images.length) % images.length,
        )
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? null : (index + 1) % images.length,
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
      lastFocusedElement.current?.focus()
    }
  }, [activeIndex, images.length])

  const activeImage = activeIndex === null ? null : images[activeIndex]
  const previousImage = () => {
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + images.length) % images.length,
    )
  }
  const nextImage = () => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % images.length,
    )
  }

  return (
    <>
      {display === "cover" ? (
        <button
          className="project-card__media"
          type="button"
          onClick={() => setActiveIndex(0)}
          aria-label={`Open ${project.title} image gallery, ${images.length} images`}
        >
          <img src={images[0].src} alt={images[0].alt} />
          <span className="project-card__gallery-count" aria-hidden="true">
            View {images.length} images <span>↗</span>
          </span>
        </button>
      ) : (
        <div className="project-gallery__grid">
          {images.map((image, index) => (
            <button
              className="project-gallery__image"
              type="button"
              onClick={() => setActiveIndex(index)}
              key={image.src}
              aria-label={`Open image ${index + 1} of ${images.length} from ${project.title}`}
            >
              <img src={image.src} alt={image.alt} />
              <span aria-hidden="true">View image</span>
            </button>
          ))}
        </div>
      )}

      {activeImage &&
        createPortal(
          <div
            className="project-lightbox"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeGallery()
            }}
          >
            <section
              className="project-lightbox__dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
            >
              <div className="project-lightbox__topbar">
                <div>
                  <p className="project-lightbox__eyebrow">Project gallery</p>
                  <h2 id={titleId}>{project.title}</h2>
                </div>
                <button
                  className="project-lightbox__close"
                  type="button"
                  onClick={closeGallery}
                  ref={closeButtonRef}
                >
                  <span aria-hidden="true">×</span>
                  Close
                </button>
              </div>

              <div className="project-lightbox__image-wrap">
                <img src={activeImage.src} alt={activeImage.alt} />
                {images.length > 1 && (
                  <>
                    <button
                      className="project-lightbox__nav project-lightbox__nav--previous"
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous project image"
                    >
                      <span aria-hidden="true">←</span>
                    </button>
                    <button
                      className="project-lightbox__nav project-lightbox__nav--next"
                      type="button"
                      onClick={nextImage}
                      aria-label="Next project image"
                    >
                      <span aria-hidden="true">→</span>
                    </button>
                  </>
                )}
              </div>

              <div className="project-lightbox__footer">
                <p>
                  <strong>
                    {activeIndex + 1} / {images.length}
                  </strong>
                  {activeImage.caption}
                </p>
                <div
                  className="project-lightbox__thumbnails"
                  aria-label="Choose a project image"
                >
                  {images.map((image, index) => (
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View image ${index + 1}`}
                      aria-current={index === activeIndex ? "true" : undefined}
                      key={image.src}
                    >
                      <img src={image.src} alt="" />
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>,
          document.body,
        )}
    </>
  )
}
