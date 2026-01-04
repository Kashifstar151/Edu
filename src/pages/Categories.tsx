import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/cards/CategoryCard';
import CourseCard from '@/components/cards/CourseCard';
import { categories, courses } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categoryCourses = selectedCategory
    ? courses.filter((c) =>
        c.category.toLowerCase().includes(
          categories.find((cat) => cat.id === selectedCategory)?.name.toLowerCase() || ''
        )
      )
    : [];

  return (
    <Layout>
      <div className="container py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Browse Categories</h1>
          <p className="text-muted-foreground">
            Find courses and tests by exam category
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedCategory(null);
            }}
            className="pl-10"
          />
        </div>

        {/* Categories Grid */}
        {!selectedCategory && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className="cursor-pointer"
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        )}

        {/* Selected Category Courses */}
        {selectedCategory && (
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-sm text-primary mb-4 hover:underline"
            >
              ← Back to all categories
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {categories.find((c) => c.id === selectedCategory)?.name} Courses
            </h2>
            {categoryCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No courses available in this category yet
                </p>
              </div>
            )}
          </div>
        )}

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No categories found matching your search.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Categories;
