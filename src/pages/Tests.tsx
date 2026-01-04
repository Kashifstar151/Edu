import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import TestSeriesCard from '@/components/cards/TestSeriesCard';
import { testSeries } from '@/data/mockData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Tests = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTests = testSeries.filter((test) =>
    test.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="container py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Tests & Mock Exams</h1>
          <p className="text-muted-foreground">
            Practice with real exam patterns and track your progress
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search test series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Tests</TabsTrigger>
            <TabsTrigger value="enrolled">Enrolled</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTests.map((test) => (
                <TestSeriesCard key={test.id} test={test} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="enrolled" className="mt-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-2">No enrolled tests yet</p>
              <p className="text-sm text-muted-foreground">
                Browse and enroll in test series to start practicing
              </p>
            </div>
          </TabsContent>

          <TabsContent value="ongoing" className="mt-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-2">No ongoing tests</p>
              <p className="text-sm text-muted-foreground">
                Your active tests will appear here
              </p>
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTests.slice(0, 2).map((test) => (
                <TestSeriesCard key={test.id} test={test} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tests found matching your search.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Tests;
