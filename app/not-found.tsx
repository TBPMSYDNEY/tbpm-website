import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32 text-center">
      <div className="container-site">
        <p className="section-label">404</p>
        <h1 className="text-4xl font-extrabold tracking-tight">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-mute">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
