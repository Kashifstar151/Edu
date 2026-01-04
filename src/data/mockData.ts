export interface Course {
  id: string;
  title: string;
  instructor: string;
  price: number;
  originalPrice: number;
  rating: number;
  students: number;
  duration: string;
  lessons: number;
  image: string;
  category: string;
  level: string;
  isFeatured?: boolean;
}

export interface TestSeries {
  id: string;
  title: string;
  tests: number;
  questions: number;
  price: number;
  originalPrice: number;
  enrolled: number;
  category: string;
  duration: string;
  image: string;
}

export interface LiveClass {
  id: string;
  title: string;
  instructor: string;
  date: string;
  time: string;
  duration: string;
  status: 'upcoming' | 'live' | 'completed';
  subject: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  coursesCount: number;
  color: string;
}

export interface CartItem {
  id: string;
  type: 'course' | 'test';
  title: string;
  price: number;
  image: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete UPSC CSE Preparation 2024',
    instructor: 'Dr. Rajesh Kumar',
    price: 9999,
    originalPrice: 19999,
    rating: 4.8,
    students: 12500,
    duration: '180 hours',
    lessons: 320,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400',
    category: 'Competitive Exams',
    level: 'Comprehensive',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'JEE Main & Advanced Crash Course',
    instructor: 'Prof. Amit Sharma',
    price: 7499,
    originalPrice: 14999,
    rating: 4.9,
    students: 8900,
    duration: '120 hours',
    lessons: 200,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
    category: 'Engineering',
    level: 'Advanced',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'NEET Biology Complete Course',
    instructor: 'Dr. Priya Patel',
    price: 5999,
    originalPrice: 11999,
    rating: 4.7,
    students: 15600,
    duration: '90 hours',
    lessons: 150,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400',
    category: 'Medical',
    level: 'Intermediate',
  },
  {
    id: '4',
    title: 'SSC CGL Complete Preparation',
    instructor: 'Vikram Singh',
    price: 3999,
    originalPrice: 7999,
    rating: 4.6,
    students: 22000,
    duration: '80 hours',
    lessons: 180,
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400',
    category: 'Government Jobs',
    level: 'Beginner',
  },
  {
    id: '5',
    title: 'CAT MBA Preparation Course',
    instructor: 'Ananya Gupta',
    price: 8499,
    originalPrice: 16999,
    rating: 4.8,
    students: 6700,
    duration: '100 hours',
    lessons: 220,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400',
    category: 'MBA',
    level: 'Advanced',
  },
  {
    id: '6',
    title: 'Banking & Finance Fundamentals',
    instructor: 'Rahul Mehta',
    price: 4499,
    originalPrice: 8999,
    rating: 4.5,
    students: 18200,
    duration: '60 hours',
    lessons: 120,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
    category: 'Banking',
    level: 'Beginner',
  },
];

export const testSeries: TestSeries[] = [
  {
    id: '1',
    title: 'UPSC Prelims Test Series 2024',
    tests: 30,
    questions: 3000,
    price: 1999,
    originalPrice: 3999,
    enrolled: 8500,
    category: 'UPSC',
    duration: '3 months',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400',
  },
  {
    id: '2',
    title: 'JEE Main Mock Test Series',
    tests: 25,
    questions: 2250,
    price: 1499,
    originalPrice: 2999,
    enrolled: 12300,
    category: 'JEE',
    duration: '2 months',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400',
  },
  {
    id: '3',
    title: 'NEET Full Syllabus Tests',
    tests: 20,
    questions: 3600,
    price: 1799,
    originalPrice: 3599,
    enrolled: 9800,
    category: 'NEET',
    duration: '2 months',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
  },
  {
    id: '4',
    title: 'SSC CGL Tier 1 & 2 Tests',
    tests: 40,
    questions: 4000,
    price: 999,
    originalPrice: 1999,
    enrolled: 25600,
    category: 'SSC',
    duration: '3 months',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400',
  },
];

export const liveClasses: LiveClass[] = [
  {
    id: '1',
    title: 'Indian Polity - Constitutional Framework',
    instructor: 'Dr. Rajesh Kumar',
    date: '2024-01-15',
    time: '10:00 AM',
    duration: '90 mins',
    status: 'live',
    subject: 'Polity',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400',
  },
  {
    id: '2',
    title: 'Physics - Mechanics Problem Solving',
    instructor: 'Prof. Amit Sharma',
    date: '2024-01-15',
    time: '2:00 PM',
    duration: '120 mins',
    status: 'upcoming',
    subject: 'Physics',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
  },
  {
    id: '3',
    title: 'Biology - Human Physiology',
    instructor: 'Dr. Priya Patel',
    date: '2024-01-15',
    time: '4:00 PM',
    duration: '90 mins',
    status: 'upcoming',
    subject: 'Biology',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400',
  },
  {
    id: '4',
    title: 'Quantitative Aptitude Masterclass',
    instructor: 'Vikram Singh',
    date: '2024-01-14',
    time: '10:00 AM',
    duration: '60 mins',
    status: 'completed',
    subject: 'Maths',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400',
  },
];

export const categories: Category[] = [
  { id: '1', name: 'UPSC', icon: 'Award', coursesCount: 45, color: 'bg-primary' },
  { id: '2', name: 'JEE', icon: 'Atom', coursesCount: 32, color: 'bg-secondary' },
  { id: '3', name: 'NEET', icon: 'Stethoscope', coursesCount: 28, color: 'bg-accent' },
  { id: '4', name: 'SSC', icon: 'FileText', coursesCount: 38, color: 'bg-warning' },
  { id: '5', name: 'Banking', icon: 'Landmark', coursesCount: 25, color: 'bg-primary' },
  { id: '6', name: 'CAT/MBA', icon: 'TrendingUp', coursesCount: 18, color: 'bg-secondary' },
  { id: '7', name: 'GATE', icon: 'Cpu', coursesCount: 22, color: 'bg-accent' },
  { id: '8', name: 'Railways', icon: 'Train', coursesCount: 15, color: 'bg-warning' },
];

export const userProfile = {
  name: 'Rahul Sharma',
  email: 'rahul.sharma@email.com',
  phone: '+91 98765 43210',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  enrolledCourses: 4,
  completedTests: 18,
  certificatesEarned: 3,
};
