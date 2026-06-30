import Button from "./Button";

const Chip = ({ skill, onRemove }) => {
  return (
    <div className="flex items-center gap-2 bg-brand-primary/10 text-text-primary px-3 py-2 rounded-full">
      <span>{skill}</span>

      <Button
        variant="ghost"
        type="button"
        className="!p-0 text-status-danger hover:bg-transparent"
        onClick={onRemove}
      >
        ×
      </Button>
    </div>
  );
};

export default Chip;