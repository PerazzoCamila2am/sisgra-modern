export function Navbar() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md md:px-5 md:py-4">
      <a href="#" className="flex min-w-0 items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-0.5 md:h-14 md:w-14">
          <img
            src="/images/logo-sisgra.png"
            alt="Logo SISGRA S.R.L."
            className="h-full w-full scale-125 object-contain"
          />
        </div>

        <div className="min-w-0">
          <h1 className="truncate text-base font-bold tracking-wide md:text-lg">
            SISGRA S.R.L.
          </h1>
          <p className="hidden text-xs text-slate-400 sm:block">
            Soluciones tecnológicas
          </p>
        </div>
      </a>

      <div className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
        <a href="#servicios" className="transition hover:text-cyan-300">
          Servicios
        </a>

        <a href="#soluciones" className="transition hover:text-cyan-300">
          Soluciones
        </a>

        <a href="#contacto" className="transition hover:text-cyan-300">
          Contacto
        </a>
      </div>

      <a
        href="#contacto"
        className="shrink-0 rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300 md:px-5 md:text-sm"
      >
        Cotizar
      </a>
    </nav>
  );
}