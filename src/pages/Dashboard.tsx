import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/section-header';
import CourseCard from '@/components/cards/CourseCard';
import TestSeriesCard from '@/components/cards/TestSeriesCard';
import LiveClassCard from '@/components/cards/LiveClassCard';
import CategoryCard from '@/components/cards/CategoryCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { courses, testSeries, liveClasses, categories } from '@/data/mockData';
import { GraduationCap, Trophy, Users, BookCheck } from 'lucide-react';

const Dashboard = () => {
  const featuredCourses = courses.filter((c) => c.isFeatured);
  const ongoingClasses = liveClasses.filter((c) => c.status === 'live' || c.status === 'upcoming');

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200')] bg-cover bg-center opacity-10" />
        <div className="container relative py-12 md:py-20">
          <div className="max-w-2xl text-white">
            <Badge className="bg-white/20 text-white mb-4">
              New Year Sale - 50% OFF
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Unlock Your Potential with Expert Learning
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Join millions of students preparing for competitive exams with India's best educators.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Explore Courses
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container -mt-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Users, label: 'Students', value: '2M+' },
            { icon: BookCheck, label: 'Courses', value: '500+' },
            { icon: GraduationCap, label: 'Educators', value: '200+' },
            { icon: Trophy, label: 'Success Rate', value: '95%' },
          ].map((stat, i) => (
            <Card key={i} className="text-center">
              <CardContent className="p-4">
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mt-10">
        <SectionHeader
          title="Browse Categories"
          subtitle="Find courses by exam type"
          viewAllLink="/categories"
        />
        <ScrollArea className="w-full">
          <div className="flex gap-4 pb-4">
            {categories.map((category) => (
              <div key={category.id} className="w-[140px] flex-shrink-0">
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Featured Courses */}
      <section className="container mt-10">
        <SectionHeader
          title="Featured Crash Courses"
          subtitle="Intensive preparation for upcoming exams"
          viewAllLink="/courses"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Live Classes */}
      <section className="container mt-10">
        <SectionHeader
          title="Ongoing & Upcoming Classes"
          subtitle="Join live interactive sessions"
          viewAllLink="/live-classes"
        />
        <ScrollArea className="w-full">
          <div className="flex gap-4 pb-4">
            {ongoingClasses.map((liveClass) => (
              <div key={liveClass.id} className="w-[300px] flex-shrink-0">
                <LiveClassCard liveClass={liveClass} />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Test Series */}
      <section className="container mt-10">
        <SectionHeader
          title="Popular Test Series"
          subtitle="Practice with real exam patterns"
          viewAllLink="/tests"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testSeries.slice(0, 4).map((test) => (
            <TestSeriesCard key={test.id} test={test} />
          ))}
        </div>
      </section>

      {/* All Courses */}
      <section className="container mt-10 mb-10">
        <SectionHeader
          title="Explore All Courses"
          subtitle="Choose from our wide range of courses"
          viewAllLink="/courses"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 6).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
