export function Contact() {
  return (
    <section id="contacto" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 to-blue-600/10 p-6 md:rounded-[2rem] md:p-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Contacto
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              ¿Necesitás mejorar la infraestructura tecnológica de tu empresa?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Contanos qué necesitás resolver y un especialista de SISGRA se
              contactará para asesorarte.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
            <form className="space-y-4">
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                placeholder="Nombre y empresa"
              />

              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                placeholder="Email o teléfono"
              />

              <textarea
                className="min-h-32 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                placeholder="Contanos qué necesitás"
              />

              <button
                type="button"
                className="w-full rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}