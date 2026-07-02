import { useState, useRef, useEffect } from "react";
import { ChevronDown, Palette } from "lucide-react";

import TemplateMenuItem from "./TemplateMenuItem";

const TemplateMenu = ({
  templates,
  selected,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      ref={menuRef}
      className="relative"
    >

      <button
        onClick={() => setOpen(!open)}
        className="
          group
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-border
          bg-white
          px-5
          py-3
          shadow-sm
          transition-all
          duration-200

          hover:border-brand-primary
          hover:shadow-md
          hover:translate-y-[1px]

          focus:outline-none
          focus:ring-2
          focus:ring-brand-primary/20
        "
      >
      
      <Palette
  size={18}
  className="text-brand-primary"
/>

<div className="flex flex-col items-start leading-tight">
  <span className="text-[11px] uppercase tracking-wider text-text-secondary">
    Resume Design
  </span>

  <span className="font-semibold text-text-primary">
    {templates[selected].name}
  </span>
</div>

<ChevronDown
  size={18}
  className={`
    ml-auto
    text-brand-primary
    transition-transform
    duration-200
    ${open ? "rotate-180" : ""}
  `}
/>

      </button>

      {open && (
        <div
          className="
            absolute
            left-0
            top-full
            z-50
            mt-2
            w-[360px]
            rounded-2xl
            border
            bg-white
            p-0
            shadow-2xl
          "
        >
          {Object.values(templates).map(
            (template) => (
              <TemplateMenuItem
                key={template.id}
                template={template}
                selected={
                  template.id === selected
                }
                onClick={() => {
                  onChange(template.id);
                  setOpen(false);
                }}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default TemplateMenu;