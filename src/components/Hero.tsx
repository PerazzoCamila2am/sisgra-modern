import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:py-32">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs text-cyan-200 md:text-sm"
        >
          Infraestructura IT, redes y seguridad electrónica
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
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
          className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:mt-6 md:text-lg md:leading-8"
        >
          Diseñamos, instalamos y mantenemos soluciones de conectividad,
          infraestructura tecnológica, soporte IT, fibra óptica y seguridad
          electrónica para empresas e industrias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8"
        >
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:px-7 md:py-4 md:text-base"
          >
            Solicitar asesoramiento
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </a>

          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/5 md:px-7 md:py-4 md:text-base"
          >
            Ver servicios
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative mx-auto w-full max-w-md lg:max-w-none"
      >
        <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/20 blur-3xl md:-inset-6" />

        <div className="relative rounded-[1.5rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl md:rounded-[2rem] md:p-6">
          <div className="rounded-3xl border border-cyan-300/20 bg-slate-950/80 p-4 md:p-6">
            <div className="mb-5 flex items-center justify-between md:mb-6">
              <div>
                <p className="text-xs text-slate-400 md:text-sm">
                  Estado de red
                </p>
                <h3 className="text-xl font-bold text-cyan-300 md:text-2xl">
                  Operación estable
                </h3>
              </div>

              <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,0.9)] md:h-4 md:w-4" />
            </div>

            <div className="space-y-3 md:space-y-4">
              {[
                "Infraestructura certificada",
                "Monitoreo y soporte técnico",
                "Conectividad de alto rendimiento",
                "Seguridad electrónica integrada",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 md:px-4 md:py-4"
                >
                  <span className="text-xs text-slate-300 md:text-sm">
                    {item}
                  </span>

                  <span className="shrink-0 rounded-full bg-cyan-300/10 px-2.5 py-1 text-[10px] text-cyan-200 md:px-3 md:text-xs">
                    Activo
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 md:mt-6 md:gap-3">
              <div className="rounded-2xl bg-white/5 p-3 text-center md:p-4">
                <p className="text-xl font-bold text-white md:text-2xl">24/7</p>
                <p className="text-[10px] text-slate-400 md:text-xs">
                  Continuidad
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-3 text-center md:p-4">
                <p className="text-xl font-bold text-white md:text-2xl">IT</p>
                <p className="text-[10px] text-slate-400 md:text-xs">
                  Soporte
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-3 text-center md:p-4">
                <p className="text-xl font-bold text-white md:text-2xl">FO</p>
                <p className="text-[10px] text-slate-400 md:text-xs">
                  Fibra óptica
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}