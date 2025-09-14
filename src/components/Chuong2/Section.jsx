import React from "react";

const Section = ({ title, subtitle, children }) => (
  <section className="py-12 border-t border-surface">
    <div className="text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-text-main">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-text-secondary max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
    <div>{children}</div>
  </section>
);

export default Section;
