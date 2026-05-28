import { services } from "../data/services";

export function Services() {
  return (
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
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-cyan-300/40 hover:bg-white/[0.07]"
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
  );
}