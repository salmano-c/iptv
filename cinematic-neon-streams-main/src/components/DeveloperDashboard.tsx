
import { useEffect, useState } from 'react';
import TypedText from './ui/TypedText';
import GlassCard from './ui/GlassCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, PieChart, Pie, Cell } from 'recharts';

export function DeveloperDashboard() {
  // Performance metrics simulated data
  const [performanceData, setPerformanceData] = useState({
    loadTime: 0,
    fps: 0,
    memoryUsage: 0,
    cpuUsage: 0
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  // Simulated usage data
  const usageData = [
    { name: 'Mon', visits: 4000, bandwidth: 2400 },
    { name: 'Tue', visits: 3000, bandwidth: 1398 },
    { name: 'Wed', visits: 2000, bandwidth: 9800 },
    { name: 'Thu', visits: 2780, bandwidth: 3908 },
    { name: 'Fri', visits: 1890, bandwidth: 4800 },
    { name: 'Sat', visits: 2390, bandwidth: 3800 },
    { name: 'Sun', visits: 3490, bandwidth: 4300 },
  ];
  
  const regionData = [
    { name: 'North America', value: 35 },
    { name: 'Europe', value: 30 },
    { name: 'Middle East', value: 20 },
    { name: 'Asia', value: 10 },
    { name: 'Other', value: 5 },
  ];
  
  const deviceData = [
    { name: 'Smart TVs', value: 40 },
    { name: 'Mobile', value: 30 },
    { name: 'Desktop', value: 15 },
    { name: 'Tablets', value: 10 },
    { name: 'Other', value: 5 },
  ];
  
  const COLORS = ['#8B5CF6', '#1EAEDB', '#D946EF', '#22C55E', '#FCD34D'];
  
  // Simulate performance data updates
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let frameId: number;
    
    const updateMetrics = () => {
      const now = performance.now();
      frameCount++;
      
      // Update FPS every second
      if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));
        frameCount = 0;
        lastTime = now;
        
        // Simulate other metrics
        setPerformanceData({
          loadTime: Math.round(performance.now()) / 1000,
          fps,
          memoryUsage: Math.floor(25 + Math.random() * 40), // 25-65%
          cpuUsage: Math.floor(10 + Math.random() * 30)     // 10-40%
        });
      }
      
      frameId = requestAnimationFrame(updateMetrics);
    };
    
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
      
      if (entry.isIntersecting) {
        frameId = requestAnimationFrame(updateMetrics);
      } else {
        cancelAnimationFrame(frameId);
      }
    });
    
    const element = document.getElementById('developer-dashboard');
    if (element) observer.observe(element);
    
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, []);
  
  return (
    <section id="developer-dashboard" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient heading-glow">
            <TypedText text="Developer Dashboard" delay={300} typingSpeed={40} />
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            <TypedText 
              text="Real-time performance metrics and analytics for boxIPTV platform." 
              delay={1000}
              typingSpeed={20}
            />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Performance Metrics */}
          <GlassCard className="p-4" glowOnHover neonColor="blue">
            <div className="text-center">
              <h3 className="text-sm font-medium text-white/70 mb-1">Page Load Time</h3>
              <p className="text-2xl font-bold text-box-neon-blue">{performanceData.loadTime.toFixed(2)}s</p>
            </div>
          </GlassCard>
          
          <GlassCard className="p-4" glowOnHover neonColor="purple">
            <div className="text-center">
              <h3 className="text-sm font-medium text-white/70 mb-1">FPS</h3>
              <p className="text-2xl font-bold text-box-neon-purple">{performanceData.fps}</p>
            </div>
          </GlassCard>
          
          <GlassCard className="p-4" glowOnHover neonColor="green">
            <div className="text-center">
              <h3 className="text-sm font-medium text-white/70 mb-1">Memory Usage</h3>
              <p className="text-2xl font-bold text-box-neon-green">{performanceData.memoryUsage}%</p>
            </div>
          </GlassCard>
          
          <GlassCard className="p-4" glowOnHover neonColor="pink">
            <div className="text-center">
              <h3 className="text-sm font-medium text-white/70 mb-1">CPU Usage</h3>
              <p className="text-2xl font-bold text-box-neon-pink">{performanceData.cpuUsage}%</p>
            </div>
          </GlassCard>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Usage Chart */}
          <GlassCard className="p-4 h-[300px]" glowOnHover neonColor="purple">
            <h3 className="text-lg font-semibold mb-4 text-white">Platform Usage</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(139,92,246,0.5)',
                    borderRadius: '8px'
                  }} 
                />
                <Legend />
                <Line type="monotone" dataKey="visits" stroke="#8B5CF6" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="bandwidth" stroke="#1EAEDB" />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>
          
          {/* Bandwidth Usage */}
          <GlassCard className="p-4 h-[300px]" glowOnHover neonColor="blue">
            <h3 className="text-lg font-semibold mb-4 text-white">Bandwidth Usage</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(30,174,219,0.5)',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="bandwidth" fill="url(#bandwidthGradient)" />
                <defs>
                  <linearGradient id="bandwidthGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1EAEDB" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#1EAEDB" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traffic by Region */}
          <GlassCard className="p-4 h-[300px]" glowOnHover neonColor="green">
            <h3 className="text-lg font-semibold mb-4 text-white">Traffic by Region</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(34,197,94,0.5)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </GlassCard>
          
          {/* Device Usage */}
          <GlassCard className="p-4 h-[300px]" glowOnHover neonColor="pink">
            <h3 className="text-lg font-semibold mb-4 text-white">Device Usage</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(217,70,239,0.5)',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-box-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-box-neon-green/10 rounded-full blur-3xl"></div>
    </section>
  );
}

export default DeveloperDashboard;
