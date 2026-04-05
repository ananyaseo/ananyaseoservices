import { useSEO } from "@/hooks/use-seo";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ClipboardCheck, ShieldCheck, TrendingUp, GraduationCap, Search, Users } from "lucide-react";
import heroImg from "@/assets/microfinance-hero.jpg";

const services = [
  {
    icon: ClipboardCheck,
    title: "Diagnostic Assessment & Due Diligence",
    points: [
      "Conducting in-depth diagnostic studies for NBFCs and MFIs to identify areas for improvement and growth.",
      "Performing thorough due diligence for wholesale lending to NBFCs, ensuring sound investment decisions.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Risk Management & Operational Efficiency",
    points: [
      "Designing and implementing end-to-end Microfinance process audits to minimize operational risks and prevent fraud.",
      "Developing and enhancing individual lending portfolios, including policy drafting and training in financial analysis for lending to small businesses.",
      "Streamlining microfinance program design and improving operational processes for greater efficiency.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth & Performance Enhancement",
    points: [
      "Assisting MFIs in enhancing their overall performance, planning strategic growth, and introducing new products and expanding into new geographies.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Capacity Building & Training Solutions",
    points: [
      "Providing specialized training in the Loan Portfolio Audit Toolkit of MicroSave.",
      "Conducting comprehensive training for staff across all aspects of microfinance operations and management.",
      "Offering customised training programs in Stress Management, Time Management, and Presentation & Communication Skills.",
    ],
  },
];

const highlights = [
  "Led training for an MFI's Individual Lending team on financial analysis, empowering them to effectively assess and lend to MSME clients nationwide.",
  "Designed and delivered financial analysis training to an MFI's Individual Lending team, enhancing their capacity to support MSME clients across India.",
  "Consulted with an MFI to strengthen their Individual Lending operations by training their team in advanced financial analysis for MSME onlending throughout India.",
];

const MicrofinanceConsulting = () => {
  const seoSchemas = useSEO({
    title: "Microfinance Consulting | NBFC MFI Advisory | Ananya SEO",
    description: "Expert microfinance consulting services for NBFCs and MFIs. Diagnostic assessment, due diligence, risk management, loan portfolio audit, and capacity building.",
    breadcrumbs: [
      { name: "Home", url: "/" },
      { name: "Microfinance Consulting", url: "/microfinance-consulting" },
    ],
  });

  return (
    <div className="min-h-screen">
    {seoSchemas}
    <TopBar />
    <Header />

    {/* Hero */}
    <section className="relative">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Microfinance consulting session" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="relative container py-24 md:py-32 text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/80 mb-3">Expert Advisory</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-foreground mb-6">
          Microfinance Consulting
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-primary-foreground/90 leading-relaxed">
          Specialized expertise in optimizing microfinance operations and performing rigorous loan portfolio audits for large NBFC MFIs — backed by 40+ years of experience across microfinance and development banking.
        </p>
      </div>
    </section>

    {/* About the Consultant */}
    <section className="py-16 md:py-20 bg-muted/40">
      <div className="container max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">S Lalita Rao</h2>
          <p className="text-primary font-semibold">Independent Microfinance Consultant</p>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
          <p>
            A seasoned top management executive with over 40 years of experience across microfinance and development banking. Her background as AGM at Small Industries Development Bank of India (SIDBI), and Head of Audit of Ujjivan Financial Services, coupled with more than 18 years of advising and training NBFC MFIs, positions S Lalita Rao to deliver significant value through enhanced efficiency, risk mitigation, and strategic growth.
          </p>
          <p className="text-sm font-medium text-foreground">
            Individual Lending &bull; Due Diligence &bull; Loan Portfolio Audit &bull; NBFC MFI Advisory
          </p>
        </div>
      </div>
    </section>

    {/* Experience Section */}
    <section className="py-16 md:py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-10">Experience</h2>
        <p className="text-center text-muted-foreground mb-8">
          <span className="font-semibold text-foreground">Independent Microfinance Consultant</span> — Past experience from 2004 till 2008 and again, June 2010 onwards
        </p>
        <div className="space-y-6">
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-foreground">Due Diligence & Wholesale Lending</h3>
            <p className="text-muted-foreground leading-relaxed">
              Served as a full-time Consultant, for over a year, conducting comprehensive due diligence on NBFCs across India for Ujjivan SFB's wholesale lending initiatives.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-foreground">Strategic Advisory to NBFC-MFI</h3>
            <p className="text-muted-foreground leading-relaxed">
              For two years, advised the MD of an all-India NBFC-MFI, offering strategic guidance and process improvements for microfinance lending through regular, detailed branch reviews.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-foreground">Women's World Banking (WWB) Consultant</h3>
            <p className="text-muted-foreground leading-relaxed">
              Engaged by Women's World Banking (WWB), New York, as a local consultant in India (March 2013 - April 2014; October 2015 - November 2016) to enhance Individual Lending processes for a prominent MFI operating nationwide.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-foreground">Internal Audit Transformation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Led the transformation of internal audit functions for two NBFC-MFIs by mentoring their Heads of Audit and providing extensive practical and classroom training to their full audit teams. Also developed customized Audit Manuals to institutionalize improved processes.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-foreground">MFIN Enforcement Committee</h3>
            <p className="text-muted-foreground leading-relaxed">
              Served as an Independent Member on the Enforcement Committee of the Microfinance Institutions Network (MFIN), India.
            </p>
          </div>
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-3 text-foreground">Audit Systems & Training</h3>
            <ul className="space-y-3 text-muted-foreground leading-relaxed">
              <li className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Designed and implemented comprehensive audit systems
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Trained pan-India audit teams, handheld each team member with on-the-job trainings
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Provided ongoing monitoring of audit activities
              </li>
              <li className="flex gap-3 items-start">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                Developed a Branch Risk Profile as a critical monitoring tool
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Consultancy Services */}
    <section className="py-16 md:py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">Consultancy Services</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Comprehensive microfinance consulting services tailored to the needs of NBFCs, MFIs, and development finance institutions.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((svc) => (
            <div key={svc.title} className="bg-card border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svc.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">{svc.title}</h3>
              <ul className="space-y-3">
                {svc.points.map((pt, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Key Highlights */}
    <section className="py-16 md:py-20 bg-muted/40">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-10">Key Engagements</h2>
        <div className="space-y-6">
          {highlights.map((h, i) => (
            <div key={i} className="flex gap-4 items-start bg-card border rounded-lg p-6 shadow-sm">
              <span className="text-2xl font-bold text-primary shrink-0">{i + 1}</span>
              <p className="text-muted-foreground leading-relaxed">{h}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
  </div>
  );
};

export default MicrofinanceConsulting;
