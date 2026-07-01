import React, { useState, useRef, useEffect } from "react";
import Card from "../common/Card";

import Button from "../common/Button";
import { Minus, Plus } from "lucide-react";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { templates } from "../../templates";

const PAPER_WIDTH = 794;
const PAPER_HEIGHT = 1123;

const ResumePreview = ({
  formData,
  resumeName,
  setResumeName,
  selectedTemplate,
}) => {

  // Template Selection
  const template = templates[selectedTemplate];
  const PreviewComponent = template.Preview;
  const PDFComponent = template.PDF;

  // null = Fit Mode
  const [zoom, setZoom] = useState(null);

  // Automatically calculated fit
  const [fitScale, setFitScale] = useState(1);

  const previewContainerRef = useRef(null);

  /* ---------------------------------------------------- */
  /* Calculate Auto Fit                                    */
  /* ---------------------------------------------------- */

  useEffect(() => {
    if (!previewContainerRef.current) return;

    const container = previewContainerRef.current;

    const updateFitScale = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      const scale = Math.min(width / PAPER_WIDTH, height / PAPER_HEIGHT);

      // Never scale up past 1 in fit mode, and guard against 0/negative
      setFitScale(scale > 0 ? Math.min(scale, 1) : 1);
    };

    updateFitScale();

    const observer = new ResizeObserver(updateFitScale);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);


  /* ---------------------------------------------------- */

  const currentScale = zoom ?? fitScale;

  /* ---------------- Zoom In ---------------- */

  const handleZoomIn = () => {
    const current = zoom ?? fitScale;
    setZoom(Math.min(current + 0.1, 2));
  };

  /* ---------------- Zoom Out ---------------- */

  const handleZoomOut = () => {
    const current = zoom ?? fitScale;
    const next = current - 0.1;

    // Return to Auto Fit
    if (next <= fitScale) {
      setZoom(null);
      return;
    }

    setZoom(next);
  };

  return (
    <div className="relative h-full min-h-0 w-full">
      <Card
        noPadding
        className="absolute inset-0 flex flex-col overflow-hidden bg-gray-100"
      >
        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between border-b bg-white px-6 py-4">
          <h2 className="text-lg font-semibold text-text-primary">
            Resume Preview
          </h2>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleZoomOut}
              disabled={zoom === null}
            >
              <Minus size={18} />
            </Button>

            <div className="w-16 text-center text-sm font-semibold">
              {zoom === null ? "Fit" : `${Math.round(currentScale * 100)}%`}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={handleZoomIn}
              disabled={currentScale >= 2}
            >
              <Plus size={18} />
            </Button>
          </div>
        </div>

        {/* ================= PREVIEW ================= */}

        <div
          ref={previewContainerRef}
          className="min-h-0 flex-1 overflow-auto p-6"
        >
          <div
            style={{
              width: PAPER_WIDTH * currentScale,
              height: PAPER_HEIGHT * currentScale,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                width: PAPER_WIDTH,
                height: PAPER_HEIGHT,
                transform: `scale(${currentScale})`,
                transformOrigin: "top left",
                transition: "transform 0.2s ease",
              }}
            >
              <PreviewComponent formData={formData} />
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}

        <div className="border-t bg-white p-5">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={resumeName}
              onChange={(e) => setResumeName(e.target.value)}
              placeholder="My Resume"
              className="
                flex-1
                rounded-xl
                border
                border-brand-primary/30
                px-5
                py-3
                text-sm
                focus:border-brand-primary
                focus:outline-none
              "
            />

            <PDFDownloadLink
              document={<PDFComponent formData={formData} />}
              fileName={`${resumeName || "Resume"}.pdf`}
              >
                {({ loading }) => (
                  <Button 
                    variant="primary">
                      {loading ? "Generating" : "Download PDF"}
                    </Button>
                )}
            </PDFDownloadLink>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResumePreview;