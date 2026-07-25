import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center space-x-4 rounded-full border border-border/50 bg-background/80 p-2 shadow-lg backdrop-blur-md">
        <Link
          href="#about"
          className="rounded-full text-sm text-muted-foreground transition-colors hover:text-foreground px-2 py-1"
        >
          About
        </Link>

        <Link
          href="#skills"
          className="rounded-full text-sm text-muted-foreground transition-colors hover:text-foreground px-2 py-1"
        >
          Skills
        </Link>

        <Link
          href="#projects"
          className="rounded-full text-sm text-muted-foreground transition-colors hover:text-foreground px-2 py-1"
        >
          Projects
        </Link>

        <Link
          href="#contact"
          className="rounded-full text-sm text-muted-foreground transition-colors hover:text-foreground px-2 py-1"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
