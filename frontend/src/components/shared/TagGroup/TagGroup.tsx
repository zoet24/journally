import { Label } from "@/components/ui/label";
import Tag from "../Tag/Tag";

interface TagGroupProps {
  label?: string;
  tags: string[];
  variant?: "active" | "suggested";
  emptyMessage?: string;
  onTagClick?: (tag: string) => void;
  onTagRemove?: (tag: string) => void;
}

export default function TagGroup({
  label,
  tags,
  variant = "suggested",
  emptyMessage = "No tags",
  onTagClick,
  onTagRemove,
}: TagGroupProps) {
  return (
    <div className="mb-2">
      {label && <Label>{label}</Label>}
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.length === 0 && (
          <span className="text-gray-400">{emptyMessage}</span>
        )}
        {tags.map((tag) => (
          <Tag
            key={tag}
            variant={variant}
            onClick={onTagClick ? () => onTagClick(tag) : undefined}
            onRemove={onTagRemove ? () => onTagRemove(tag) : undefined}
            title={variant === "active" ? "Remove tag" : "Add tag"}
          >
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
}
