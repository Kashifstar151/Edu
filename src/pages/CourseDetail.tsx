import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { courses } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Star,
  Clock,
  BookOpen,
  Users,
  Play,
  ShoppingCart,
  Share2,
  Heart,
  CheckCircle,
  ChevronLeft,
} from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <p className="text-muted-foreground">Course not found</p>
          <Link to="/courses">
            <Button className="mt-4">Browse Courses</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100
  );

  const curriculum = [
    { title: 'Introduction to the Course', duration: '15 mins', isFree: true },
    { title: 'Fundamentals & Basics', duration: '45 mins', isFree: false },
    { title: 'Core Concepts Deep Dive', duration: '2 hours', isFree: false },
    { title: 'Practice Problems & Solutions', duration: '3 hours', isFree: false },
    { title: 'Mock Tests & Analysis', duration: '4 hours', isFree: false },
    { title: 'Final Preparation Tips', duration: '1 hour', isFree: false },
  ];

  const features = [
    'Lifetime access to course content',
    'Certificate of completion',
    'Doubt clearing sessions',
    'Downloadable resources',
    'Mobile & desktop access',
    'Practice questions with solutions',
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container py-4">
        <Link
          to="/courses"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Courses
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge className="mb-3">{course.category}</Badge>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-muted-foreground mb-4">
                Master all concepts with comprehensive video lessons, practice problems, and expert guidance.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-warning text-warning" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-muted-foreground">
                    ({course.students.toLocaleString()} students)
                  </span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>

              <p className="text-sm">
                Created by <span className="text-primary font-medium">{course.instructor}</span>
              </p>
            </div>

            {/* Purchase Card */}
            <Card className="lg:sticky lg:top-20 h-fit">
              <div className="aspect-video relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary fill-primary" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold">₹{course.price.toLocaleString()}</span>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{course.originalPrice.toLocaleString()}
                  </span>
                  <Badge variant="destructive">{discount}% OFF</Badge>
                </div>
                <p className="text-sm text-destructive mb-4">⏰ Sale ends in 2 days!</p>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Buy Now
                  </Button>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4 mr-1" />
                    Wishlist
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="container py-8">
        <div className="lg:w-2/3">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">What you'll learn</h3>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-muted-foreground">
                    This comprehensive course is designed to help you master all the essential concepts and prepare thoroughly for your exams. With expert instruction, detailed explanations, and plenty of practice materials, you'll be well-equipped to succeed.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="curriculum">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground mb-4">
                  {curriculum.length} sections • {course.lessons} lessons • {course.duration} total
                </p>
                {curriculum.map((item, i) => (
                  <Card key={i}>
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium">
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.duration}</p>
                        </div>
                      </div>
                      {item.isFree && <Badge variant="secondary">Free Preview</Badge>}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="instructor">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-full bg-muted" />
                    <div>
                      <h3 className="font-semibold text-lg">{course.instructor}</h3>
                      <p className="text-muted-foreground mb-2">Expert Educator</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-warning" />
                          4.8 Instructor Rating
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          50,000+ Students
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold">{course.rating}</p>
                    <div className="flex justify-center my-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 fill-warning text-warning"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Course Rating</p>
                  </div>
                </div>
                <p className="text-muted-foreground">Student reviews will appear here.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
