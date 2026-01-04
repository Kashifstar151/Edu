import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import LiveClassCard from '@/components/cards/LiveClassCard';
import { liveClasses } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const LiveClasses = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClasses = liveClasses.filter((c) =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const liveNow = filteredClasses.filter((c) => c.status === 'live');
  const upcoming = filteredClasses.filter((c) => c.status === 'upcoming');
  const recorded = filteredClasses.filter((c) => c.status === 'completed');

  return (
    <Layout>
      <div className="container py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Live Classes</h1>
          <p className="text-muted-foreground">
            Join interactive live sessions or watch recorded lectures
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search classes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Classes</TabsTrigger>
            <TabsTrigger value="live" className="relative">
              Live Now
              {liveNow.length > 0 && (
                <span className="ml-2 h-2 w-2 rounded-full bg-destructive" />
              )}
            </TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="recorded">Recorded</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((liveClass) => (
                <LiveClassCard key={liveClass.id} liveClass={liveClass} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="live" className="mt-6">
            {liveNow.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {liveNow.map((liveClass) => (
                  <LiveClassCard key={liveClass.id} liveClass={liveClass} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-2">No live classes at the moment</p>
                <p className="text-sm text-muted-foreground">
                  Check upcoming classes or watch recorded lectures
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="mt-6">
            {upcoming.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcoming.map((liveClass) => (
                  <LiveClassCard key={liveClass.id} liveClass={liveClass} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No upcoming classes scheduled</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="recorded" className="mt-6">
            {recorded.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recorded.map((liveClass) => (
                  <LiveClassCard key={liveClass.id} liveClass={liveClass} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No recorded classes available</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {filteredClasses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No classes found matching your search.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LiveClasses;
