import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { testSeries } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  FileText,
  Clock,
  Users,
  ChevronLeft,
  ShoppingCart,
  CheckCircle,
  Lock,
} from 'lucide-react';

const TestDetail = () => {
  const { id } = useParams();
  const test = testSeries.find((t) => t.id === id);

  if (!test) {
    return (
      <Layout>
        <div className="container py-12 text-center">
          <p className="text-muted-foreground">Test series not found</p>
          <Link to="/tests">
            <Button className="mt-4">Browse Tests</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const discount = Math.round(
    ((test.originalPrice - test.price) / test.originalPrice) * 100
  );

  const mockTests = [
    { id: 1, title: 'Full Length Test 1', questions: 100, duration: '180 mins', status: 'available' },
    { id: 2, title: 'Full Length Test 2', questions: 100, duration: '180 mins', status: 'available' },
    { id: 3, title: 'Sectional Test - Maths', questions: 50, duration: '60 mins', status: 'locked' },
    { id: 4, title: 'Sectional Test - Reasoning', questions: 50, duration: '60 mins', status: 'locked' },
    { id: 5, title: 'Previous Year Paper 2023', questions: 100, duration: '180 mins', status: 'locked' },
    { id: 6, title: 'Previous Year Paper 2022', questions: 100, duration: '180 mins', status: 'locked' },
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="container py-4">
        <Link
          to="/tests"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Tests
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge className="mb-3">{test.category}</Badge>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{test.title}</h1>
              <p className="text-muted-foreground mb-4">
                Comprehensive test series with {test.tests} tests and {test.questions} questions covering the complete syllabus.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <FileText className="h-4 w-4" />
                  <span>{test.tests} Tests</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{test.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{test.enrolled.toLocaleString()} enrolled</span>
                </div>
              </div>
            </div>

            {/* Purchase Card */}
            <Card className="lg:sticky lg:top-20 h-fit">
              <div className="aspect-video relative">
                <img
                  src={test.image}
                  alt={test.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold">₹{test.price.toLocaleString()}</span>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{test.originalPrice.toLocaleString()}
                  </span>
                  <Badge variant="destructive">{discount}% OFF</Badge>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    Start Free Test
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tests List */}
      <section className="container py-8">
        <div className="lg:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Tests in this Series</h2>
          <div className="space-y-3">
            {mockTests.map((mockTest) => (
              <Card key={mockTest.id}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      {mockTest.status === 'available' ? (
                        <CheckCircle className="h-5 w-5 text-accent" />
                      ) : (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{mockTest.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {mockTest.questions} Questions • {mockTest.duration}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant={mockTest.status === 'available' ? 'default' : 'outline'}
                    size="sm"
                    disabled={mockTest.status === 'locked'}
                  >
                    {mockTest.status === 'available' ? 'Start Test' : 'Unlock'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestDetail;
