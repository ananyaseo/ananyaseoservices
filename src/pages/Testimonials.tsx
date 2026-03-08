import { Star, Quote } from "lucide-react";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/testimonials-hero.jpg";

const testimonials = [
  {
    text: "We are an NGO in Kurnool, Andhra Pradesh. Ananya has developed our website serudsindia.org, integrated payment gateway, implemented blog as well as done SEO work. They are ethical in approach and cost is very affordable. They have created copy for site as well as blog, press releases and articles. We are happy to see that we outrank bigger NGOs in Google organic search rankings for several keywords.",
    author: "Mallikarjuna Gorla",
    role: "Founder President, SERUDS India",
  },
  {
    text: "Ananya is my Third vendor on SEO. With every vendor with whom i had interacted, i got the same commitments that with x no of keywords i will bring you on top within 3 months. After 6 months not even 10% of the keywords made it to the top. All false commitments. After working closely with Ananya, i saw the kind of efforts that goes into making a website come on top for a keyword, is amazing. Results so far have been good and i have every reasons to believe that in due course the results will exceed my expectations.",
    author: "Ajay Dewan",
    role: "Founder, Alcove Service Apartments",
  },
  {
    text: "Anand Rao has been helping samarthanam as a volunteer for the past 2 years. He has given excellent advise on website design, SEO, and social media marketing. I would recommend him to any NGO for digital marketing.",
    author: "Mahantesh G. K",
    role: "Founder, Samarthanam Trust for the Disabled",
  },
  {
    text: "Thanks for the update and the other updates in the previous 2 mails. Thanks a ton to you that the SEO exercise is showing results, and that too with poor involvement on my part.",
    author: "Mayur Marda",
    role: "Director, Elements Educare Private Limited",
  },
  {
    text: "Ananya SEO Services has been instrumental in growing my business through their social media marketing strategies. They have helped me increase my brand visibility, engage with my target audience, and drive more traffic to my website. Their team is professional, knowledgeable, and always goes above and beyond to deliver exceptional results.",
    author: "Karighar's Interior Designers",
    role: "Client",
  },
  {
    text: "I have been working with Ananya SEO Services for the past year, and I am extremely impressed with their expertise in SEO. They have helped my website rank higher on search engine results, resulting in increased organic traffic and leads. I highly recommend their services to anyone looking to improve their online presence.",
    author: "Mamtha",
    role: "C4D Partners",
  },
];

const Testimonials = () => (
  <div className="min-h-screen flex flex-col">
    <TopBar />
    <Header />

    {/* Hero */}
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Client testimonials" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(var(--navy))]/80" />
      </div>
      <div className="container relative z-10 text-center">
        <p className="text-accent font-semibold mb-2 uppercase tracking-wider text-sm">What Our Clients Say</p>
        <h1 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
          Testimonials from Satisfied Clients
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto">
          Hear directly from our clients about how Ananya SEO Services has helped transform their digital presence.
        </p>
      </div>
    </section>

    {/* Testimonials Grid */}
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-background border rounded-xl p-8 shadow-sm relative hover:shadow-md transition-shadow"
            >
              <Quote className="text-primary/15 absolute top-4 right-4" size={56} />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={18} />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-foreground font-heading">— {t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-primary">
      <div className="container text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary-foreground mb-4">
          Ready to Join Our Satisfied Clients?
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Let us help you achieve your digital marketing goals with proven strategies and dedicated support.
        </p>
        <a
          href="/contact"
          className="inline-block bg-accent text-accent-foreground font-bold px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>

    <Footer />
  </div>
);

export default Testimonials;
