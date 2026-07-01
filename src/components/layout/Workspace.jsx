import React, { useState } from "react";

const Workspace = ({ leftPanel, rightPanel }) => {
  const [mobileView, setMobileView] = useState("form"); // 'form' | 'preview'

  return (
    <main className="h-full min-h-0 bg-bg-workspace">
      <div className="rf-container flex h-full min-h-0 flex-col py-4 lg:py-8">
        {/* Mobile tab switcher — hidden at lg and above */}
        <div className="mb-4 flex shrink-0 gap-2 lg:hidden">
          {["form", "preview"].map((view) => (
            <button
              key={view}
              type="button"
              onClick={() => setMobileView(view)}
              className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                mobileView === view
                  ? "bg-brand-primary text-white"
                  : "bg-white text-text-secondary"
              }`}
            >
              {view === "form" ? "Edit" : "Preview"}
            </button>
          ))}
        </div>

        <div className="grid h-full min-h-0 flex-1 gap-6 lg:grid-cols-12">
          {/* Form Panel */}
          <section
            className={`h-full min-h-0 lg:col-span-6 lg:flex ${
              mobileView === "form" ? "flex" : "hidden"
            }`}
          >
            {leftPanel}
          </section>

          {/* Resume Preview */}
          <section
            className={`h-full min-h-0 lg:col-span-6 lg:flex ${
              mobileView === "preview" ? "flex" : "hidden"
            }`}
          >
            {rightPanel}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Workspace;