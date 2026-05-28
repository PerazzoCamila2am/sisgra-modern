import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
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
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
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
        <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/20 blur-3xl" />

        <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
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
  );
}