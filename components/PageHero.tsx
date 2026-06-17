import Image from "next/image";
import Hero3DLite from "@/components/Hero3DLite";

export default function PageHero({
  title,
  subtitle,
  image,
  imageAlt,
  eyebrow,
  variant,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
  variant?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink grain">
      {image && (
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          className="animate-hero-zoom object-cover opacity-[0.14]"
          priority
          sizes="100vw"
        />
      )}
      {/* live 3D motion backdrop — premium, varies per page */}
      <div className="absolute inset-0">
        <Hero3DLite variant={variant ?? title} />
      </div>
      {/* animated brand aurora layered over the 3D for added depth */}
      <div className="aurora pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

      <div className="container-site relative py-24 sm:py-28">
        {eyebrow && (
          <span className="animate-fade-up mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            {eyebrow}
          </span>
        )}
        <h1
          className="max-w-3xl text-4xl font-extrabold tracking-tight text-white animate-fade-up sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75 animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
