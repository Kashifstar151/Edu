import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Award,
  Atom,
  Stethoscope,
  FileText,
  Landmark,
  TrendingUp,
  Cpu,
  Train,
} from 'lucide-react';
import type { Category } from '@/data/mockData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Atom,
  Stethoscope,
  FileText,
  Landmark,
  TrendingUp,
  Cpu,
  Train,
};

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Icon = iconMap[category.icon] || Award;

  return (
    <Link to={`/categories/${category.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all hover:scale-105 h-full">
        <CardContent className="p-6 text-center">
          <div
            className={cn(
              'w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4',
              category.color
            )}
          >
            <Icon className="h-7 w-7 text-white" />
          </div>
          <h3 className="font-semibold mb-1">{category.name}</h3>
          <p className="text-sm text-muted-foreground">
            {category.coursesCount} Courses
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
