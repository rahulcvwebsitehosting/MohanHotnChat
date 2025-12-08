import React from 'react';
import { REVIEWS, QUICK_STATS, CONTACT_INFO } from '../constants';
import { Star, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

const RatingData = [
  { stars: '5★', count: 45 },
  { stars: '4★', count: 30 },
  { stars: '3★', count: 15 },
  { stars: '2★', count: 7 },
  { stars: '1★', count: 3 },
];

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Stats Column */}
          <div>
            <h2 className="text-4xl font-bold font-heading text-white mb-6">
              Why West Mambalam <span className="text-primary">Loves Us</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We don't just sell food; we serve memories. From college students to families, 
              everyone finds their comfort spot here.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {QUICK_STATS.map((stat, idx) => (
                <div key={idx} className="bg-card p-4 rounded-xl border border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="text-secondary" size={20} />
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
            
            <a 
              href={CONTACT_INFO.googleMapsLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary font-bold hover:text-orange-400 transition-colors p-2 -ml-2 rounded-lg hover:bg-white/5"
            >
              Read all Google Reviews <ArrowRight className="ml-2" size={18} />
            </a>
          </div>

          {/* Chart Column */}
          <div className="bg-card p-8 rounded-2xl border border-gray-800 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Rating Breakdown</h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={RatingData} layout="vertical" margin={{ top: 0, right: 30, left: 10, bottom: 0 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="stars" type="category" stroke="#9CA3AF" tick={{ fill: '#9CA3AF' }} width={30} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#333', color: '#fff' }}
                    itemStyle={{ color: '#FF6B35' }}
                  />
                  <Bar dataKey="count" barSize={20} radius={[0, 4, 4, 0]}>
                    {RatingData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#39FF14' : index === 1 ? '#00D26A' : '#FF6B35'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-gray-500 text-xs mt-4">Based on 1,600+ authentic reviews</p>
          </div>
        </div>

        {/* Review Cards Carousel (Horizontal Scroll) */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">What People Are Saying</h3>
          <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x">
            {REVIEWS.map((review) => (
              <div 
                key={review.id} 
                className="min-w-[300px] md:min-w-[400px] bg-card p-6 rounded-xl border border-gray-800 snap-center"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <span className="text-xs text-gray-500">{review.source} Review • {review.date}</span>
                  </div>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;