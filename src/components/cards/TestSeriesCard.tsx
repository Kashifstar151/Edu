import { FileText, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { TestSeries } from '@/data/mockData';

interface TestSeriesCardProps {
  test: TestSeries;
}

const TestSeriesCard = ({ test }: TestSeriesCardProps) => {
  const discount = Math.round(
    ((test.originalPrice - test.price) / test.originalPrice) * 100
  );

  return (
    <Link to={`/tests/${test.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
        <div className="relative aspect-video">
          <img
            src={test.image}
            alt={test.title}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-3 left-3 bg-secondary">
            {test.category}
          </Badge>
          {discount > 0 && (
            <Badge className="absolute top-3 right-3 bg-destructive">
              {discount}% OFF
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-2 mb-3 min-h-[2.5rem]">
            {test.title}
          </h3>

          <div className="grid grid-cols-3 gap-2 mb-4 text-center">
            <div className="bg-muted rounded-lg p-2">
              <FileText className="h-4 w-4 mx-auto mb-1 text-primary" />
              <p className="text-sm font-semibold">{test.tests}</p>
              <p className="text-xs text-muted-foreground">Tests</p>
            </div>
            <div className="bg-muted rounded-lg p-2">
              <Clock className="h-4 w-4 mx-auto mb-1 text-secondary" />
              <p className="text-sm font-semibold">{test.questions}</p>
              <p className="text-xs text-muted-foreground">Questions</p>
            </div>
            <div className="bg-muted rounded-lg p-2">
              <Users className="h-4 w-4 mx-auto mb-1 text-accent" />
              <p className="text-sm font-semibold">{test.enrolled.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Enrolled</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-primary">
                ₹{test.price.toLocaleString()}
              </span>
              <span className="text-sm text-muted-foreground line-through ml-2">
                ₹{test.originalPrice.toLocaleString()}
              </span>
            </div>
            <Button size="sm" variant="secondary">
              Start Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TestSeriesCard;
