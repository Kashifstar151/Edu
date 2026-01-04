import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { courses, testSeries } from '@/data/mockData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Trash2, ShoppingBag, Tag, ChevronLeft } from 'lucide-react';

interface CartItem {
  id: string;
  type: 'course' | 'test';
  title: string;
  price: number;
  originalPrice: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: courses[0].id,
      type: 'course',
      title: courses[0].title,
      price: courses[0].price,
      originalPrice: courses[0].originalPrice,
      image: courses[0].image,
    },
    {
      id: testSeries[0].id,
      type: 'test',
      title: testSeries[0].title,
      price: testSeries[0].price,
      originalPrice: testSeries[0].originalPrice,
      image: testSeries[0].image,
    },
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + item.originalPrice, 0);
  const discount = originalTotal - subtotal;
  const couponDiscount = appliedCoupon ? subtotal * 0.1 : 0;
  const total = subtotal - couponDiscount;

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'save10') {
      setAppliedCoupon(couponCode);
    }
  };

  return (
    <Layout>
      <div className="container py-6">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Continue Shopping
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-6">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 md:w-32 md:h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <span className="text-xs text-muted-foreground uppercase">
                              {item.type}
                            </span>
                            <h3 className="font-medium line-clamp-2">{item.title}</h3>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-muted-foreground hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-lg font-bold text-primary">
                            ₹{item.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal ({cartItems.length} items)</span>
                      <span>₹{originalTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm text-accent">
                      <span>Discount</span>
                      <span>-₹{discount.toLocaleString()}</span>
                    </div>
                    {appliedCoupon && (
                      <div className="flex justify-between text-sm text-accent">
                        <span>Coupon ({appliedCoupon})</span>
                        <span>-₹{couponDiscount.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <Separator className="my-4" />

                  {/* Coupon */}
                  <div className="mb-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter coupon code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        disabled={!!appliedCoupon}
                      />
                      <Button
                        variant="outline"
                        onClick={applyCoupon}
                        disabled={!!appliedCoupon || !couponCode}
                      >
                        <Tag className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Try "SAVE10" for 10% off
                    </p>
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between font-semibold text-lg mb-4">
                    <span>Total</span>
                    <span className="text-primary">₹{total.toLocaleString()}</span>
                  </div>

                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    30-day money-back guarantee
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Browse our courses and test series to find something you like
            </p>
            <Link to="/courses">
              <Button size="lg">Browse Courses</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
