'use client';

const testimonials = [
  {
    name: "Anjali R.",
    role: "CMO at XTech",
    quote: "ADmyBRAND's AI Suite completely transformed our marketing efforts. We launched faster and saw 3x ROI!",
  },
  {
    name: "Rohit M.",
    role: "Founder at StartIQ",
    quote: "The automation features saved us days of manual work every week. It's a game-changer for startups.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4 text-black">Loved by Founders & Teams</h2>
      <p className="text-gray-400 mb-12">See what others are saying about ADmyBRAND.</p>
      <div className="grid gap-10 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-[#1a1a1a] p-6 rounded-xl shadow">
            <p className="text-lg italic mb-4 text-white">“{t.quote}”</p>
            <p className="font-semibold text-white">{t.name}</p>
            <p className="text-sm text-gray-300">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
