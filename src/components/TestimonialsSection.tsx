import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Ananya SEO Services has been instrumental in growing my business through their social media marketing strategies. They have helped me increase my brand visibility, engage with my target audience, and drive more traffic to my website. Their team is professional, knowledgeable, and always goes above and beyond to deliver exceptional results.",
    author: "Karighar's Interior Designers",
  },
  {
    text: "I have been working with Ananya SEO Services for the past year, and I am extremely impressed with their expertise in SEO. They have helped my website rank higher on search engine results, resulting in increased organic traffic and leads. I highly recommend their services to anyone looking to improve their online presence.",
    author: "Mamtha, C4D Partners",
  },
];

const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
          What Our Clients Say
        </h2>
        <p className="text-foreground/80 text-lg">Read feedback from our valued clients who trust us with their digital marketing needs.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div key={t.author} className="bg-light-green border border-primary/20 rounded-xl p-8 shadow-sm relative">
            <Quote className="text-primary/20 absolute top-4 right-4" size={48} />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-accent fill-accent" size={18} />
              ))}
            </div>
            <p className="text-foreground italic mb-6 leading-relaxed text-base">"{t.text}"</p>
            <p className="font-bold text-foreground font-heading">— {t.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
