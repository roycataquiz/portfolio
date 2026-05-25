import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
          404
        </p>
        <h1 className="font-display text-4xl font-bold mb-3">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          This page doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}
