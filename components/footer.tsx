import Link from "next/link"

const footerLinks = {
  program: [
    { href: "/coaches", label: "Meet the Coaches" },
    { href: "/prep", label: "Pre-Call Prep" },
    { href: "https://form.typeform.com/to/C2ruNSz7#ref=adi", label: "Apply Now", external: true },
  ],
  resources: [
    { href: "/#faq", label: "FAQ" },
    { href: "/#what-you-get", label: "What You Get" },
    { href: "/#how-it-works", label: "Process" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-foreground">
                Streamline
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A hands-on coaching program built to help creators pick winning products, 
              create content that converts, and scale consistently on TikTok Shop.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Program</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.program.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Streamline. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
