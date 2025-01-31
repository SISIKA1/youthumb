import next from 'next';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />

          {/* Added text */}
          <div>
            <h1>YouTube Thumbnail Downloader</h1>
            <p>▷ Save YT Video Thumbnails</p>
            <p>Get free thumbnail image of any youtube videos in Full HD(1080), HD (720), SD, and also in small size. it's currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos</p>

            <h2>What is the use of this YouTube Thumbnail Grabber website?</h2>
            <p>People use this YouTube thumbnail downloader website for getting thumbnail from any youtube videos. That can be used in presentation, animation work or many other activities.</p>

            <h2>How to use this YouTube thumbnail downloader website?</h2>
            <p>I have shared some of screenshot in which I have guided you on how you can use this YouTube downloader website. It's quite easy. The first step is to copy any YouTube link whose thumbnail you want. Easily you can download YouTube cover.</p>
            <p>Now paste that URL in the input box, the moment you paste that link, it's automatically going to generate different sizes of thumbnails for you. Now click on the thumbnail download button, and it's going to automatically download in your system. If you are using an Android phone, then you have to save those images, and if you are using an iPhone, then I don't know how you can do it?</p>

            <h2>Is it legal to download YouTube thumbnails?</h2>
            <p>Of course, it's 100% legal to download any YouTube video's thumbnails, but as you know, thumbnails and videos are copyrighted products. You should take the author's permissions first in order to reuse them.</p>

            <h2>Compatibility of this YT thumbnail grabber website</h2>
            <p>This YouTube thumbnail downloader website is going to work well on all devices except iPhones because iPhones don't allow images to be saved on the device. But if you're using a jailbroken iPhone, then there is no problem. On the other hand, it's going to work fine on almost all kinds of Android devices and laptop or desktop systems.</p>

            <h2>Is there any Copyright risk on YouTube Thumbnails?</h2>
            <p>Whatever YouTube screenshot you are downloading is copyrighted by the respective owner of that video. If you want to use it in your work, then you should ask for permission.</p>
            <p>Especially if you are reusing it on YouTube, then it can create problems. But if your plan is outside of YouTube, like using it on a website for creating logos or any Photoshop types of stuff, then there is no problem. You hardly receive any DMCA complaints related to that particular YouTube thumbnail.</p>

            <h2>Is reusing YouTube thumbnails SEO-friendly?</h2>
            <p>No, it's not. In short, it's not SEO-friendly because almost all thumbnails on YouTube are indexed by Google. So, which one is unique and which one is duplicate, Google knows it. So, it's not SEO-friendly as you know. But you can do some stuff on that thumbnail, I mean getting some unique effects using Photoshop or any other software that can make your thumbnail unique again, so that can be reused and make it SEO-friendly again.</p>
          </div>
          {/* End of added text */}

        </body>
      </Html>
    );
  }
}

export default MyDocument;
