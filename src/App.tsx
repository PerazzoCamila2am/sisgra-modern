import { motion } from "framer-motion";
import {
  ArrowRight,
  Cable,
  ShieldCheck,
  Server,
  Cpu,
  Network,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Cable,
    title: "Cableado estructurado",
    description:
      "Diseño e instalación de infraestructura de red para empresas, oficinas e industrias.",
  },
  {
    icon: Network,
    title: "Fibra óptica",
    description:
      "Tendidos, fusiones, mediciones y certificación para conexiones de alto rendimiento.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad electrónica",
    description:
      "Sistemas de cámaras, control de acceso, alarmas y soluciones de monitoreo.",
  },
  {
    icon: Server,
    title: "Soporte IT",
    description:
      "Mantenimiento preventivo y correctivo para equipos, redes y puestos de trabajo.",
  },
  {
    icon: Cpu,
    title: "Desarrollo de software",
    description:
      "Soluciones digitales adaptadas a procesos internos y necesidades operativas.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento tecnológico",
    description:
      "Asistencia técnica integral para asegurar continuidad operativa y disponibilidad.",
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <section className="relative min-h-screen px-6 py-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.25),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.16),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(148,163,184,0.08)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(148,163,184,0.08)_1px,_transparent_1px)] bg-size-[70px_70px] opacity-30" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
              <Network size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-wide">SISGRA</h1>
              <p className="text-xs text-slate-400">Soluciones tecnológicas</p>
            </div>
          </div>

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

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-200"
            >
              Infraestructura IT, redes y seguridad electrónica
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl"
            >
              Tecnología que mantiene tu empresa{" "}
              <span className="bg-linear-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                conectada, segura y operativa.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
            >
              Diseñamos, instalamos y mantenemos soluciones de conectividad,
              infraestructura tecnológica, soporte IT, fibra óptica y seguridad
              electrónica para empresas e industrias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Solicitar asesoramiento
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5"
              >
                Ver servicios
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-4xl bg-cyan-400/20 blur-3xl" />

            <div className="relative rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-3xl border border-cyan-300/20 bg-slate-950/80 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Estado de red</p>
                    <h3 className="text-2xl font-bold text-cyan-300">
                      Operación estable
                    </h3>
                  </div>
                  <div className="h-4 w-4 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,0.9)]" />
                </div>

                <div className="space-y-4">
                  {[
                    "Infraestructura certificada",
                    "Monitoreo y soporte técnico",
                    "Conectividad de alto rendimiento",
                    "Seguridad electrónica integrada",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      <span className="text-sm text-slate-300">{item}</span>
                      <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
                        Activo
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/5 p-4 text-center">
                    <p className="text-2xl font-bold text-white">24/7</p>
                    <p className="text-xs text-slate-400">Continuidad</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 text-center">
                    <p className="text-2xl font-bold text-white">IT</p>
                    <p className="text-xs text-slate-400">Soporte</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 text-center">
                    <p className="text-2xl font-bold text-white">FO</p>
                    <p className="text-xs text-slate-400">Fibra óptica</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servicios" className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Servicios
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">
              Soluciones tecnológicas para cada punto crítico de tu operación.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Integramos infraestructura, conectividad, seguridad y soporte para
              que las empresas puedan operar con mayor eficiencia y control.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group rounded-3xl border border-white/10 bg-white/4 p-7 transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.07]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <Icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>

                  <p className="leading-7 text-slate-400">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-4xl border border-cyan-300/20 bg-linear-to-br from-cyan-300/15 to-blue-600/10 p-10 md:p-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Contacto
              </p>
              <h2 className="text-4xl font-bold md:text-5xl">
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
    </main>
  );
}

export default App;