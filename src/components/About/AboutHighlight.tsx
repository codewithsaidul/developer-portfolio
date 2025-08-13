import { Card } from "../ui/card";
import { IconType } from "react-icons";

type AboutHighlightItem = {
  icon: IconType; // react-icons এর জন্য
  title: string;
  description: string;
};


export default function AboutHighlight( { item }: { item: AboutHighlightItem }) {
  return (
    <Card className="p-6 hover-lift border border-border/50 group">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-xl bg-primary duration-700 group-hover:bg-secondary group-hover:duration-700">
          <item.icon className="h-6 w-6 text-primary-foreground duration-1000 group-hover:text-primary group-hover:duration-1000" />
        </div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <p className="text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
