import BlogPostLayout from "@/components/BlogPostLayout";
import heroImg from "@/assets/blog/fb-cover-video.jpg";

const FbCoverVideo = () => (
  <BlogPostLayout
    title="Have you set up a Creative Facebook Cover Video"
    date="2017"
    heroImage={heroImg}
    currentPostLink="/blog/facebook-cover-video"
  >
    <p>Since May 2017, Users have had the option to turn their cover photo into a cover video. Facebook is focussing on video content, since this is the way that people today prefer to consume content. Videos immediately get attention and your cover photo can help represent your brand and portray your story in just a few seconds.</p>
    <p>Users can upload a cover video in the same way they upload a cover photo now. Facebook requires that cover videos dimensions are at least <strong>820 x 312 pixels</strong>, while the recommended size is <strong>820 x 462 pixels</strong>. Cover videos can be anywhere from 20-90 seconds long and can loop in any way you want. Cover videos are preset to have the sound muted.</p>
    <p>Uploading a video as your Facebook cover image is as simple as uploading a new photo. Hover your mouse over the cover image on your Facebook page and you'll see a camera icon pop up. Click the Change Cover icon and upload your video.</p>
    <h3>Do not have resources to shoot a video?</h3>
    <p>No problem. Just put together a series of images of size 820 x 312 pixels that tell your story. Import into Windows Movie Maker. Add any animations you desire, edit the duration of each image, and then save as video. It is as easy as that.</p>
  </BlogPostLayout>
);

export default FbCoverVideo;
