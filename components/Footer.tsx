export default function Footer() {
  return (
    <footer className="border-t border-moss-800 bg-moss-950 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start gap-6 text-sm text-gray-300 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; 2026 TEEK Group Limited, trading as Lapwing Common
          </p>

          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-6">
            <address className="not-italic">Peter Lane, York</address>
            <a
              href="mailto:contact@lapwingcommon.com"
              className="transition-colors hover:text-cream"
            >
              contact@lapwingcommon.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
