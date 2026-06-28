import React from 'react'

const Workspace = ({leftPanel, rightPanel}) => {
  return (
    <main className="rf-container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Form Panel */}
            <section className="lg:col-span-5">
                {leftPanel}
            </section>

            {/* Resume Preview */}
            <section className="lg:col-span-7">
                {rightPanel}
            </section>
        </div>
    </main>
  )
}

export default Workspace
