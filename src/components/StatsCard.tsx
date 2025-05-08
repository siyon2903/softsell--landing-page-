import React from 'react';

const StatsCard: React.FC = () => {
  return (
    <div className="relative">
      {/* Background cards for layered effect */}
      <div className="absolute -bottom-3 -right-3 w-full h-full bg-yellow-200 rounded-2xl"></div>
      <div className="absolute -bottom-1.5 -right-1.5 w-full h-full bg-yellow-300 rounded-2xl"></div>
      
      {/* Main card */}
      <div className="relative bg-white rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-2 gap-8">
          {/* Stats items */}
          <div className="space-y-2">
            <h3 className="text-yellow-600 text-4xl font-bold">$2.3M+</h3>
            <p className="text-gray-600">Paid to Sellers</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-yellow-600 text-4xl font-bold">2800+</h3>
            <p className="text-gray-600">Licenses Sold</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-yellow-600 text-4xl font-bold">99%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-yellow-600 text-4xl font-bold">48h</h3>
            <p className="text-gray-600">Avg. Turnaround</p>
          </div>
        </div>
        
        {/* Live updates indicator */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Live marketplace updates</span>
          </div>
          <span className="text-green-500">Active Now</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;