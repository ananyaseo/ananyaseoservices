import BlogPostLayout from "@/components/BlogPostLayout";
import heroImg from "@/assets/blog/fb-audience-targeting.jpg";

const FbAudienceTargeting = () => (
  <BlogPostLayout
    title="The Secret Power of Facebook Audience Targeting for Ads"
    date="2017"
    heroImage={heroImg}
  >
    <p>Reaching users has not been free for businesses on Facebook since couple of years. Users began to complain that their News Feeds were becoming clogged up with promotional content and Facebook listened.</p>
    <p>Over the past few years Facebook has reduced the number of people who actually see a post, even if they are fans of your page. Because of updates to EdgeRank algorithm, only 8 percent of people who "like" your page will see a post. To reach your marketing objectives with Facebook, you need to spend on advertising.</p>
    <p>There are multiple ways to advertise on Facebook, including boosting posts. What makes advertising on Facebook powerful are the targeting options.</p>

    <h2>Lookalike Audience</h2>
    <p>A Lookalike Audience is a way to reach new people who are likely to be interested in your business because they're similar to your best existing customers. You can create one based on a data partner, your pixel data, your mobile app data or fans of your Page.</p>
    <p>Using the power of targeting in Facebook and Google Ads, a media agency helped Alternative for Germany (AfD) win 12.6% of votes in German elections by creating Lookalike Audiences based on fans of the AfD Facebook page, then paid for specific ads targeted to multiple groups like mothers.</p>

    <h2>Audience Categories</h2>
    <p>'Audience categories' are based on user-provided data such as names of employers, schools, job titles and fields of study. Facebook's algorithm crawls users' profiles, identifies patterns, and creates audience segments.</p>
    <p>Since it is an algorithm, it cannot make meaning out of the data. ProPublica reported that Facebook had approved ads targeted using offensive audience categories. After this report, Facebook removed the ability for advertisers to target based on four free-form text fields.</p>
    <p>In a related development, Facebook faced its greatest crisis over revelations that Facebook ads were used to meddle in US elections.</p>
    <p><strong>Facebook Marketing can be used to make history. It can also win you customers.</strong></p>
  </BlogPostLayout>
);

export default FbAudienceTargeting;
