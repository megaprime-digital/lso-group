import { useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"
import type { Project } from "../siteData"

type GalleryDisplay = "cover" | "grid"

function getProjectImages(project: Project) {
  return [
    {
      src: project.image,
      alt: project.imageAlt,
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
  const dialogRef = useRef<HTMLElement>(null)
  const lastFocusedElement = useRef<HTMLElement | null>(null)
  const titleId = useId()
  const dialogId = useId()
  const isOpen = activeIndex !== null

  const closeGallery = () => setActiveIndex(null)

  useEffect(() => {
    if (!isOpen) return

    lastFocusedElement.current = document.activeElement as HTMLElement
    const root = document.getElementById("root")
    const originalInert = root?.inert ?? false
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()
    if (root) root.inert = true

    const containFocus = (event: FocusEvent) => {
      if (!dialogRef.current?.contains(event.target as Node)) {
        closeButtonRef.current?.focus()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll<HTMLButtonElement>(
          "button:not([disabled])",
        )
        if (!buttons?.length) return
        const firstButton = buttons[0]
        const lastButton = buttons[buttons.length - 1]
        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault()
          lastButton.focus()
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault()
          firstButton.focus()
        }
      }

      if (event.key === "Escape") {
        event.preventDefault()
        closeGallery()
        return
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault()
        setActiveIndex((index) =>
          index === null ? null : (index - 1 + images.length) % images.length,
        )
      }

      if (event.key === "ArrowRight") {
        event.preventDefault()
        setActiveIndex((index) =>
          index === null ? null : (index + 1) % images.length,
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.addEventListener("focusin", containFocus)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("focusin", containFocus)
      if (root) root.inert = originalInert
      lastFocusedElement.current?.focus({ preventScroll: true })
    }
  }, [isOpen, images.length])

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
          aria-label={`View ${images.length} images from ${project.title} image gallery`}
          aria-haspopup="dialog"
          aria-controls={isOpen ? dialogId : undefined}
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
              aria-label={`View image ${index + 1} of ${images.length}: ${image.alt}`}
              aria-haspopup="dialog"
              aria-controls={isOpen ? dialogId : undefined}
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
              ref={dialogRef}
              id={dialogId}
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
                <p role="status" aria-atomic="true">
                  <strong>
                    {(activeIndex ?? 0) + 1} / {images.length}
                  </strong>
                  {activeImage.caption}
                </p>
                <div
                  className="project-lightbox__thumbnails"
                  role="group"
                  aria-label="Choose a project image"
                >
                  {images.map((image, index) => (
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View image ${index + 1}: ${image.alt}`}
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
