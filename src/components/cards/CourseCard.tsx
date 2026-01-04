import { Star, Clock, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Course } from '@/data/mockData';

interface CourseCardProps {
  course: Course;
  variant?: 'default' | 'horizontal';
}

const CourseCard = ({ course, variant = 'default' }: CourseCardProps) => {
  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  if (variant === 'horizontal') {
    return (
      <Link to={`/courses/${course.id}`}>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="flex">
            <div className="relative w-32 h-32 flex-shrink-0">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              {course.isFeatured && (
                <Badge className="absolute top-2 left-2 bg-warning text-warning-foreground">
                  Featured
                </Badge>
              )}
            </div>
            <CardContent className="flex-1 p-4">
              <h3 className="font-semibold text-sm line-clamp-2 mb-1">
                {course.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">
                {course.instructor}
              </p>
              <div className="flex items-center gap-1 mb-2">
                <Star className="h-3 w-3 fill-warning text-warning" />
                <span className="text-xs font-medium">{course.rating}</span>
                <span className="text-xs text-muted-foreground">
                  ({course.students.toLocaleString()})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">₹{course.price}</span>
                <span className="text-xs text-muted-foreground line-through">
                  ₹{course.originalPrice}
                </span>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/courses/${course.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
        <div className="relative aspect-video">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          {course.isFeatured && (
            <Badge className="absolute top-3 left-3 bg-warning text-warning-foreground">
              Featured
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="absolute top-3 right-3 bg-destructive">
              {discount}% OFF
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2 text-xs">
            {course.category}
          </Badge>
          <h3 className="font-semibold line-clamp-2 mb-2 min-h-[2.5rem]">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{course.instructor}</p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              <span>{course.lessons} lessons</span>
            </div>
          </div>

          <div className="flex items-center gap-1 mb-3">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span className="font-medium">{course.rating}</span>
            <span className="text-muted-foreground">
              ({course.students.toLocaleString()} students)
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-primary">
                ₹{course.price.toLocaleString()}
              </span>
              <span className="text-sm text-muted-foreground line-through ml-2">
                ₹{course.originalPrice.toLocaleString()}
              </span>
            </div>
            <Button size="sm">Enroll</Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CourseCard;
