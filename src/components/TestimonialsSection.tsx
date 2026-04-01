import { Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  ...Array(9).fill(null).map((_, i) => ({
    id: i + 1,
    name: ['Isabella Rodriguez', 'Gabrielle Williams', 'Samantha Johnson', 'Natalie Martinez', 'Victoria Thompson', 'John Peter', 'Alex Rivera', 'Marcus Chen', 'Elena Petrova', 'David Smith'][i],
    role: 'Product Lead @ SIIP',
    content: [
      'Their ability to capture our brand essence in every project is unparalleled.',
      'Creative geniuses who truly understand our needs and vision.',
      'Exceeded our expectations with innovative designs that brought our vision to life.',
      'From concept to execution, their creativity knows no bounds.',
      'A refreshing agency that consistently delivers exceptional results.',
      'Their team\'s artistic flair and strategic approach are remarkable.',
      'Absolutely stunning work, the design language is incredibly cohesive.',
      'SIIP has transformed how we approach our community engagement.',
      'The attention to detail and pixel-perfect execution is top notch.',
      'Simply the best in the business for modern, premium design.'
    ][i % 10],
    avatar: `https://i.pravatar.cc/150?u=${i}`
  }))
];

const TestimonialsSection = () => {
  return (
    <section className="bg-black py-24 md:py-32 overflow-hidden min-h-screen flex flex-col items-center justify-center relative">
      {/* Header Section */}
      <div className="container mx-auto px-6 max-w-7xl relative z-20 mb-16 md:mb-24">
        <div className="flex flex-col items-center text-center space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">

          <div className="space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight text-display max-w-4xl">
              Join the movement.<br />
              <span className="text-blue-500 italic">Tag @siiplife.</span>
            </h2>

            <Button
              asChild
              className="bg-white text-black hover:bg-white/90 border-2 border-white transition-all duration-300 px-10 py-5 text-sm md:text-base font-bold uppercase tracking-[0.2em] rounded-none text-display"
            >
              <a href="https://instagram.com/siiplife" target="_blank" rel="noopener noreferrer">Follow us</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonials Display */}
      <div className="w-full relative px-6 md:px-10">

        {/* Responsive Grid for Mobile/Tablet/Small Laptop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:hidden gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.id} t={t} index={index} />
          ))}
        </div>

        {/* Fancy Overflow Rows for Large Desktop */}
        <div className="hidden xl:flex flex-col gap-12 overflow-hidden">
          {/* Row 1 */}
          <div className="flex justify-center gap-10 min-w-max items-start">
            {testimonials.slice(0, 5).map((t, index) => (
              <TestimonialCard key={t.id} t={t} index={index} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-10 min-w-max items-end translate-x-12">
            {testimonials.slice(5, 10).map((t, index) => (
              <TestimonialCard key={t.id} t={t} index={index + 5} />
            ))}
          </div>
        </div>
      </div>

      {/* Background Gradients for fade effect on edges - only on large screens where overflow happens */}
      <div className="hidden xl:block absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="hidden xl:block absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />
    </section>
  );
};

const TestimonialCard = ({ t, index }: { t: any; index: number }) => (
  <div
    className={`flex-shrink-0 w-full xl:w-[320px] h-auto min-h-[220px] md:min-h-[280px] bg-[#0D0D0D] border border-white/5 p-6 md:p-8 rounded-[2px] flex flex-col justify-between transition-all duration-500 hover:border-white/20 group relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-${(index % 5) * 100}`}
  >
    <div className="space-y-4">
      <Quote size={20} className="text-blue-500 opacity-80" />
      <p className="text-white/70 text-xs md:text-sm leading-relaxed font-medium text-body italic line-clamp-4 md:line-clamp-5">
        "{t.content}"
      </p>
    </div>

    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
      <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
        <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
      </div>
      <div className="overflow-hidden">
        <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-wider text-display truncate">{t.name}</h4>
        <p className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-tight font-bold text-display truncate mt-0.5">{t.role}</p>
      </div>
    </div>
  </div>
);

export default TestimonialsSection;
