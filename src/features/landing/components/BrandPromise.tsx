export const BrandPromise = () => {
  return (
    <section className="bg-background-dark overflow-hidden relative">
      {/* Subtle red glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

          {/* Left — section number */}
          <div className="lg:col-span-3 flex lg:flex-col lg:justify-end gap-4 lg:gap-0">
            <span className="font-heading font-bold text-[6rem] md:text-[8rem] leading-none text-white/5 select-none">
              07
            </span>
            <div className="lg:mt-4">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-red border border-brand-red/30 rounded-full px-4 py-1.5">
                The Brand Promise
              </span>
            </div>
          </div>

          {/* Right — statement */}
          <div className="lg:col-span-9">
            <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-tight">
              At ProGen, we don&apos;t promise
              <br />
              <span className="text-white/40">just better grades.</span>
            </p>
            <p className="mt-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white leading-tight">
              We promise{' '}
              <span className="text-brand-red">direction,</span>
              <br />
              <span className="text-brand-red">discipline,</span> and{' '}
              <span className="text-brand-red">career clarity.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
