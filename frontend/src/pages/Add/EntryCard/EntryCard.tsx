import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ElementType, ReactNode } from "react";

interface EntryCardProps {
  icon: ElementType;
  title: string;
  colour: string;
  children: ReactNode;
}

export default function EntryCard({
  icon: Icon,
  title,
  colour,
  children,
}: EntryCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <Icon className={`w-6 h-6 ${colour}`} />
        <CardTitle className="text-xl font-bold text-left">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}
