import { X } from "lucide-react";
import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "active" | "suggested";
  onRemove?: () => void;
  onClick?: () => void;
  title?: string;
}

export default function Tag({
  children,
  variant = "suggested",
  onRemove,
  onClick,
  title,
}: TagProps) {
  const baseStyles =
    "inline-flex items-center px-2 py-1 rounded cursor-pointer transition";
  const variantStyles = {
    active: "bg-green-100 text-green-800 hover:bg-green-200",
    suggested: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]}`}
      onClick={onClick}
      title={title}
    >
      {children}
      {variant === "active" && onRemove && (
        <X
          className="ml-1 w-3 h-3"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        />
      )}
    </span>
  );
}
