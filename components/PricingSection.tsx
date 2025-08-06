"use client";
import Button from '@/components/Button';

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for individuals trying things out.",
    features: ["1 AI App", "Community Access", "Basic Support"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    description: "Great for startups and growing teams.",
    features: ["Unlimited AI Apps", "Advanced Support", "Custom Branding"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solution for enterprises.",
    features: ["Everything in Pro", "Dedicated Engineer", "SLAs & Consulting"],
  },
];

const PricingSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Simple Pricing for Everyone</h2>
        <p className="text-gray-300 mb-12">Start for free, upgrade as you grow.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-6 shadow-lg transition transform hover:scale-105 ${
                plan.highlighted
                  ? "bg-white text-black border-2 border-primary"
                  : "bg-white/10 backdrop-blur-lg text-white"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <p className="text-sm mb-6">{plan.description}</p>
              <ul className="mb-6 space-y-2 text-sm text-left">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✅ {f}</li>
                ))}
              </ul>
             <Button
  variant={plan.highlighted ? "default" : "secondary"}
  className="w-full"
>
  {plan.price === "Free" ? "Get Started" : "Choose Plan"}
</Button>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
