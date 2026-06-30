import React from "react";

const Workspace = ({ leftPanel, rightPanel }) => {
  return (
    <main className="min-h-screen bg-bg-workspace">
      <div className="rf-container py-8">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            h-[calc(100vh-8rem)]
          "
        >
          {/* Form Panel */}
          <section
            className="
              lg:col-span-5
              h-[calc(100vh-4rem)]
            "
          >
            {leftPanel}
          </section>

          {/* Resume Preview */}
          <section
            className="
              lg:col-span-7
              h-[calc(100vh-4rem)]
            "
          >
            {rightPanel}
          </section>
        </div>

      </div>
    </main>
  );
};

export default Workspace;