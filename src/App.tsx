import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative min-h-screen px-4 py-4 md:px-6 md:py-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.16),_transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(148,163,184,0.08)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(148,163,184,0.08)_1px,_transparent_1px)] bg-[size:70px_70px] opacity-30" />

        <Navbar />
        <Hero />
      </section>

      <Services />

      <section id="soluciones" className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 md:rounded-[2rem] md:p-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Soluciones
          </p>

          <h2 className="max-w-4xl text-3xl font-bold md:text-5xl">
            Integramos tecnología para que cada área de tu empresa trabaje mejor.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Conectividad y redes",
              "Seguridad y control",
              "Soporte tecnológico",
              "Software y automatización",
            ].map((solution) => (
              <div
                key={solution}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-6"
              >
                <p className="text-lg font-semibold text-white">{solution}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Soluciones pensadas para empresas que necesitan eficiencia,
                  continuidad operativa y control técnico.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}

export default App;