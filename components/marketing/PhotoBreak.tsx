import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function PhotoBreak({
  image,
  imageAlt,
  quote,
  attribution,
  imagePosition = "center",
}: {
  image: string;
  imageAlt: string;
  quote: string;
  attribution?: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative h-[280px] md:h-[360px] overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,7,10,0.78) 0%, rgba(7,7,10,0.55) 60%, rgba(7,7,10,0.30) 100%)",
        }}
      />
      <Container className="relative z-10 h-full flex items-center">
        <blockquote className="max-w-2xl">
          <p className="t-feature text-[var(--ink-on-dark)] balance">
            &ldquo;{quote}&rdquo;
          </p>
          {attribution && (
            <footer className="mt-3 t-caption text-[var(--ink-on-dark-muted)]">
              — {attribution}
            </footer>
          )}
        </blockquote>
      </Container>
    </section>
  );
}
