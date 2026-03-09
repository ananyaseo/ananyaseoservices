import BlogPostLayout from "@/components/BlogPostLayout";
import heroImg from "@/assets/blog/seo-agency-harm.jpg";

const SeoAgencyHarm = () => (
  <BlogPostLayout
    title="Is your SEO Agency Helping or Harming your Website"
    date="2017"
    heroImage={heroImg}
    currentPostLink="/blog/seo-agency-helping-or-harming"
  >
    <p>You may be surprised to hear this: your SEO agency can actually be hurting your website. We have been contacted by many businesses who have invested lot of time and money, and then realize that something is going wrong. They notice that their website rankings have dropped steadily, organic traffic has been on a decline, or even worse, they do not know what their organic traffic is.</p>

    <h2>What are the signs that your SEO agency is not doing its job?</h2>

    <h3>1. You do not get any monthly SEO reports</h3>
    <p>Many clients do not get detailed SEO reports showing what activities were done. The agency should explain exactly what they are doing. If they refuse stating it's confidential or too technical, fire them fast! They could be doing black hat SEO.</p>
    <p>You should be getting:</p>
    <ul>
      <li>An SEO audit of website</li>
      <li>Analysis of your site's link profile</li>
      <li>Keywords that both parties agree to</li>
      <li>Link building — what links to your site have been published on other sites</li>
      <li>Organic traffic comparison</li>
      <li>Website optimization: titles, heading tags, etc.</li>
      <li>SEO optimized content</li>
    </ul>

    <h3>2. They do not ask you for anything or involve you</h3>
    <p>They should ask for:</p>
    <ul>
      <li>Access to your website host server and CMS</li>
      <li>Access to Google Analytics (or set it up)</li>
      <li>Access to Google Webmaster Tools (or set it up)</li>
      <li>Access to social accounts (or set them up)</li>
      <li>Both you and agency should research and agree to target keywords</li>
    </ul>
    <p>If they have not done this, they may be building only spammy links, which will hurt you over time.</p>

    <h3>3. You notice drop in rankings or organic traffic</h3>
    <p>A sudden drop could be due to Google algorithm changes penalizing your site or a manual penalty. Ask your agency and investigate.</p>
    <p><strong>Are the keywords being targeted right for your business?</strong> Many SEO consultants promise top rankings but after you sign the contract, you'll see they target long tail keywords with low potential.</p>
    <p>Ask for organic traffic reports regularly. You should see steady increases. Keywords should be high potential ones that indicate intent to buy.</p>

    <h3>4. You see unnatural links to your site</h3>
    <p>Unnatural links appearing that weren't there before is a sure sign of black hat SEO:</p>
    <ul>
      <li>High percentage of links with keywords as anchor text</li>
      <li>Links from unrelated or spammy sites</li>
    </ul>

    <p><strong>You run a legitimate business and have invested valuable resources into it. You expect growth in revenues and profits; SEO done right will boost both.</strong></p>
  </BlogPostLayout>
);

export default SeoAgencyHarm;
