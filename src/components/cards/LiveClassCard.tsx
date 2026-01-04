import { Clock, Calendar, PlayCircle, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { LiveClass } from '@/data/mockData';

interface LiveClassCardProps {
  liveClass: LiveClass;
}

const LiveClassCard = ({ liveClass }: LiveClassCardProps) => {
  const statusConfig = {
    live: {
      label: 'Live Now',
      className: 'bg-destructive animate-pulse',
      buttonText: 'Join Now',
      buttonVariant: 'default' as const,
    },
    upcoming: {
      label: 'Upcoming',
      className: 'bg-warning',
      buttonText: 'Set Reminder',
      buttonVariant: 'secondary' as const,
    },
    completed: {
      label: 'Recorded',
      className: 'bg-muted text-muted-foreground',
      buttonText: 'Watch Now',
      buttonVariant: 'outline' as const,
    },
  };

  const config = statusConfig[liveClass.status];

  return (
    <Link to={`/live-classes/${liveClass.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
        <div className="relative aspect-video">
          <img
            src={liveClass.image}
            alt={liveClass.title}
            className="w-full h-full object-cover"
          />
          <Badge className={cn('absolute top-3 left-3', config.className)}>
            {liveClass.status === 'live' && (
              <span className="mr-1 h-2 w-2 rounded-full bg-white inline-block" />
            )}
            {config.label}
          </Badge>
          {liveClass.status === 'completed' && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <PlayCircle className="h-12 w-12 text-white" />
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <Badge variant="outline" className="mb-2">
            {liveClass.subject}
          </Badge>
          <h3 className="font-semibold line-clamp-2 mb-2 min-h-[2.5rem]">
            {liveClass.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            by {liveClass.instructor}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(liveClass.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{liveClass.time}</span>
            </div>
          </div>

          <Button className="w-full" variant={config.buttonVariant}>
            {liveClass.status === 'live' && <Video className="h-4 w-4 mr-2" />}
            {config.buttonText}
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default LiveClassCard;
