import aboutImg from "@/assets/about-team.jpg";

const AboutSection = () => (
  <section className="py-20 bg-navy text-navy-foreground">
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Your Trusted Digital Marketing Partner Since 2010
          </h2>
          <p className="text-navy-foreground/80 mb-6 leading-relaxed">
            Ananya SEO Services, established in 2010 in Bangalore, is a company committed to helping businesses succeed in the digital world. With a team of experienced professionals, Ananya SEO offers a range of digital marketing services, including search engine optimization, social media marketing, and Adwords PPC ads management.
          </p>
          <p className="text-navy-foreground/80 leading-relaxed">
            Their mission is to provide affordable, high-quality digital marketing solutions to businesses of all sizes. By leveraging their expertise in SEO and digital marketing, Ananya SEO helps businesses increase their online visibility, attract more customers, and achieve their business goals.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={aboutImg}
            alt="Ananya SEO Team"
            className="rounded-lg shadow-xl w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
