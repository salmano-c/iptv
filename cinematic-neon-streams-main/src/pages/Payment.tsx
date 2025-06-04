import React, { useState, useEffect, useRef } from "react";
import { 
  Check,
  CreditCard,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Custom Cursor Component
const NeonCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);
  
  return (
    <div 
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] transition-all duration-100 ease-linear transform -translate-x-1/2 -translate-y-1/2 ${
        isHovering 
          ? "w-10 h-10 bg-[rgba(217,70,239,0.15)] shadow-[0_0_15px_rgba(217,70,239,0.8),0_0_25px_rgba(217,70,239,0.5)]"
          : "w-6 h-6 bg-[rgba(139,92,246,0.1)] shadow-[0_0_10px_rgba(139,92,246,0.8),0_0_20px_rgba(139,92,246,0.5)]"
      }`}
      style={{
        borderRadius: "50%",
        mixBlendMode: "screen",
      }}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.9)]" />
    </div>
  );
};

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [formStep, setFormStep] = useState<'payment' | 'info' | 'success'>('payment');
  const [isLoading, setIsLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    device: ''
  });
  const [paymentOptions] = useState([
    { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'paypal', name: 'PayPal', icon: <img src="/lovable-uploads/a147efac-3c81-41e2-aaea-3279685554ab.png" alt="PayPal" className="h-5 w-5" /> },
    { id: 'bitcoin', name: 'Bitcoin', icon: <img src="/lovable-uploads/a9cdd86c-15c7-4ca3-abc3-472c3899a1d5.png" alt="Bitcoin" className="h-5 w-5" /> },
    { id: 'trial', name: 'Free Trial', icon: <Check className="h-5 w-5" /> },
  ]);
  
  const { toast } = useToast();
  const navigate = useNavigate();

  // Function to open WhatsApp with pre-filled message
  const activateFreeTrial = () => {
    const phoneNumber = "212643264633"; // Your WhatsApp number
    const message = encodeURIComponent("Hi, I'd like to activate my free trial for the streaming service.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePaymentSelect = (id: string) => {
    setSelectedPayment(id);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedPayment) {
      toast({
        title: "Payment method required",
        description: "Please select a payment method to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      
      // If free trial was selected
      if (selectedPayment === 'trial') {
        toast({
          title: "Free trial activated!",
          description: "Your free trial has been successfully activated.",
        });
        
        // Open WhatsApp to activate free trial
        activateFreeTrial();
        
        setFormStep('success');
      } else {
        // Otherwise, move to customer info form
        setFormStep('info');
      }
    }, 1500);
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validate form
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone || !customerInfo.device) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call to send WhatsApp notification
    setTimeout(() => {
      setIsLoading(false);
      setFormStep('success');
      
      // Display success message
      toast({
        title: "Order completed!",
        description: "Your order was successful. You'll receive account details shortly.",
      });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  // Add cursor-none class to body on mount
  useEffect(() => {
    document.body.classList.add('cursor-none');
    return () => {
      document.body.classList.remove('cursor-none');
    };
  }, []);

  return (
    <div className="min-h-screen bg-box-darkest py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Custom Cursor */}
      <NeonCursor />

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--box-neon-purple)_0%,transparent_70%)] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/c7b76c61-391a-491b-a4cd-7756be710fac.png')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-box-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-box-neon-purple/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header with step indicator */}
      <div className="w-full max-w-md mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-box-neon-blue via-box-neon-purple to-box-neon-pink">
            {formStep === 'payment' && "Complete Your Order"}
            {formStep === 'info' && "Your Information"}
            {formStep === 'success' && "Order Successful!"}
          </h1>
          <p className="text-white/70 mb-8">Secure & Fast Checkout</p>

          {/* Step indicator */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${formStep === 'payment' || formStep === 'info' || formStep === 'success' ? 'bg-box-neon-blue' : 'bg-gray-700'}`}>
                <Check className="h-5 w-5 text-white" />
              </div>
              <div className={`h-1 w-12 ${formStep === 'info' || formStep === 'success' ? 'bg-box-neon-blue' : 'bg-gray-700'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${formStep === 'info' || formStep === 'success' ? 'bg-box-neon-purple' : 'bg-gray-700'}`}>
                <Check className="h-5 w-5 text-white" />
              </div>
              <div className={`h-1 w-12 ${formStep === 'success' ? 'bg-box-neon-pink' : 'bg-gray-700'}`}></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${formStep === 'success' ? 'bg-box-neon-pink' : 'bg-gray-700'}`}>
                <Check className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {formStep === 'payment' && (
          <div className="bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">Payment Method</h2>
            
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              <div className="space-y-3">
                {paymentOptions.map((option) => (
                  <div 
                    key={option.id}
                    onClick={() => handlePaymentSelect(option.id)}
                    className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedPayment === option.id 
                        ? 'border-2 border-box-neon-purple bg-box-neon-purple/10 shadow-glow-sm' 
                        : 'border border-white/20 bg-black/30 hover:bg-black/40'
                    }`}
                  >
                    <div className="flex-shrink-0 mr-3">
                      {option.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-white">{option.name}</h3>
                      {option.id === 'trial' && (
                        <p className="text-xs text-box-neon-green">No credit card required</p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <div className={`w-5 h-5 rounded-full border ${
                        selectedPayment === option.id 
                          ? 'border-box-neon-purple bg-box-neon-purple' 
                          : 'border-white/40'
                      } flex items-center justify-center`}>
                        {selectedPayment === option.id && (
                          <div className="w-3 h-3 rounded-full bg-white"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button 
                type="submit" 
                disabled={isLoading || !selectedPayment}
                className="w-full bg-gradient-to-r from-box-neon-blue to-box-neon-purple hover:from-box-neon-purple hover:to-box-neon-blue text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {selectedPayment === 'trial' ? 'Start Free Trial' : 'Proceed to Payment'}
              </Button>
            </form>
            
            {/* Security badges */}
            <div className="mt-8 text-center">
              <div className="flex justify-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <img src="/lovable-uploads/5376cbf9-290d-47d7-b23d-3fc4751a16f1.png" alt="Secure" className="w-6 h-6" />
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <img src="/lovable-uploads/6f36df6e-de26-4e77-95f9-98187ac4ecfc.png" alt="Encrypted" className="w-6 h-6" />
                </div>
              </div>
              <p className="text-white/50 text-xs">All payments are secure and encrypted</p>
            </div>
          </div>
        )}

        {formStep === 'info' && (
          <div className="bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6 text-white">Your Information</h2>
            
            <form onSubmit={handleInfoSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-box-neon-blue focus:outline-none focus:ring-2 focus:ring-box-neon-blue/20"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-box-neon-blue focus:outline-none focus:ring-2 focus:ring-box-neon-blue/20"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-1">WhatsApp Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-box-neon-blue focus:outline-none focus:ring-2 focus:ring-box-neon-blue/20"
                  placeholder="Enter WhatsApp number with country code"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="device" className="block text-sm font-medium text-white/70 mb-1">Device</label>
                <input
                  type="text"
                  id="device"
                  name="device"
                  value={customerInfo.device}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-box-neon-blue focus:outline-none focus:ring-2 focus:ring-box-neon-blue/20"
                  placeholder="Smart TV, Android, etc."
                  required
                />
              </div>
              
              <div className="flex gap-3 pt-2">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setFormStep('payment')}
                  className="flex-1 border border-white/20 text-white hover:bg-black/30"
                >
                  Back
                </Button>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="flex-1 bg-gradient-to-r from-box-neon-blue to-box-neon-purple hover:from-box-neon-purple hover:to-box-neon-blue text-white"
                >
                  {isLoading ? "Processing..." : "Complete Order"}
                </Button>
              </div>
            </form>
          </div>
        )}

        {formStep === 'success' && (
          <div className="bg-black/40 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden shadow-lg p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-box-neon-green/20 rounded-full flex items-center justify-center">
              <Check className="h-10 w-10 text-box-neon-green" />
            </div>
            
            <h2 className="text-2xl font-bold mb-2 text-white">Thank You!</h2>
            
            <p className="text-white/70 mb-6">
              {selectedPayment === 'trial' 
                ? "Your free trial has been activated. Please check WhatsApp to complete activation."
                : "Your order has been received. You'll receive your account details shortly via email and WhatsApp."}
            </p>
            
            {/* Special button for free trial users */}
            {selectedPayment === 'trial' && (
              <Button 
                onClick={activateFreeTrial}
                className="mb-4 bg-gradient-to-r from-box-neon-green to-box-neon-blue hover:from-box-neon-blue hover:to-box-neon-green text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
              >
                Open WhatsApp to Activate
              </Button>
            )}
            
            <Button 
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-box-neon-blue to-box-neon-purple hover:from-box-neon-purple hover:to-box-neon-blue text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
            >
              Return to Home
            </Button>
            
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm text-white/50">Order Reference: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </div>
          </div>
        )}

        {/* Support information */}
        <div className="mt-8 text-center">
          <p className="text-white/70 mb-2">Need assistance?</p>
          <a 
            href="https://wa.me/212643264633"
            target="_blank"
            rel="noopener noreferrer"
            className="text-box-neon-blue hover:text-box-neon-purple transition-colors duration-300"
          >
            Contact Support via WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Payment;