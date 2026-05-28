export function Navbar() {
  return (
    <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
      <a href="#" className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-0.5">
  <img
    src="/images/logo-sisgra.png"
    alt="Logo SISGRA S.R.L."
    className="h-full w-full scale-125 object-contain"
  />
</div>
        <div>
          <h1 className="text-lg font-bold tracking-wide">SISGRA S.R.L.</h1>
          <p className="text-xs text-slate-400">Soluciones tecnológicas</p>
        </div>
      </a>

      <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
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
        className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Cotizar
      </a>
    </nav>
  );
}