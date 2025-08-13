import { Button } from "../ui/button";

interface IProjectCategoryProps {
  category: string;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function ProjectCategory({
  category,
  activeCategory,
  setActiveCategory,
}: IProjectCategoryProps) {
  return (
    <Button
      variant={activeCategory === category ? "default" : "outline"}
      onClick={() => setActiveCategory(category)}
      className={`transition-all duration-300 ${
        activeCategory === category
          ? "bg-primary shadow-glow"
          : "hover:border-primary/50"
      }`}
    >
      {category}
    </Button>
  );
}
