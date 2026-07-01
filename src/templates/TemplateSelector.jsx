import { templates } from "../../templates";

const TemplateSelector = ({
  selectedTemplate,
  setSelectedTemplate,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Object.values(templates).map((template) => (
        <button
          key={template.id}
          onClick={() => setSelectedTemplate(template.id)}
          className={`
            rounded-xl
            border-2
            p-4
            text-left
            transition-all

            ${
              selectedTemplate === template.id
                ? "border-brand-primary shadow-md"
                : "border-gray-200 hover:border-brand-primary/40"
            }
          `}
        >
          <h3 className="font-semibold">
            {template.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {template.description}
          </p>
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;