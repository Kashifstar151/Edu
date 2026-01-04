import Layout from '@/components/layout/Layout';
import { userProfile, courses, testSeries } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import CourseCard from '@/components/cards/CourseCard';
import {
  BookOpen,
  FileText,
  Award,
  Settings,
  LogOut,
  ChevronRight,
  Bell,
  HelpCircle,
  Shield,
  CreditCard,
} from 'lucide-react';

const Profile = () => {
  const stats = [
    { icon: BookOpen, label: 'Enrolled Courses', value: userProfile.enrolledCourses },
    { icon: FileText, label: 'Tests Completed', value: userProfile.completedTests },
    { icon: Award, label: 'Certificates', value: userProfile.certificatesEarned },
  ];

  const menuItems = [
    { icon: Bell, label: 'Notifications', badge: '3' },
    { icon: CreditCard, label: 'Payment Methods' },
    { icon: Shield, label: 'Privacy Settings' },
    { icon: HelpCircle, label: 'Help & Support' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <Layout>
      <div className="container py-6">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={userProfile.avatar} />
                <AvatarFallback className="text-2xl">RS</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-2xl font-bold mb-1">{userProfile.name}</h1>
                <p className="text-muted-foreground mb-2">{userProfile.email}</p>
                <p className="text-sm text-muted-foreground">{userProfile.phone}</p>
              </div>
              <Button variant="outline">Edit Profile</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-4 text-center">
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <Tabs defaultValue="courses" className="mb-6">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="tests">My Tests</TabsTrigger>
            <TabsTrigger value="history">Test History</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.slice(0, 3).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            {courses.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-2">No enrolled courses yet</p>
                <Button>Browse Courses</Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="tests" className="mt-6">
            <div className="space-y-4">
              {testSeries.slice(0, 2).map((test) => (
                <Card key={test.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={test.image}
                        alt={test.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{test.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {test.tests} Tests • {test.questions} Questions
                        </p>
                      </div>
                    </div>
                    <Button size="sm">Continue</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Test Attempts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'UPSC Prelims Mock 1', score: 78, date: '2024-01-10', status: 'passed' },
                    { title: 'SSC CGL Tier 1 Test', score: 85, date: '2024-01-08', status: 'passed' },
                    { title: 'JEE Main Practice', score: 65, date: '2024-01-05', status: 'passed' },
                  ].map((attempt, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-b last:border-0"
                    >
                      <div>
                        <p className="font-medium">{attempt.title}</p>
                        <p className="text-sm text-muted-foreground">{attempt.date}</p>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={attempt.score >= 70 ? 'default' : 'secondary'}
                          className={attempt.score >= 70 ? 'bg-accent' : ''}
                        >
                          {attempt.score}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardContent className="p-0">
                {menuItems.map((item, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center justify-between p-4 hover:bg-muted transition-colors border-b last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                      <span>{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <Badge className="bg-destructive">{item.badge}</Badge>
                      )}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Button variant="destructive" className="w-full mt-4">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Profile;
