import heroImage from "../assets/project_thumbnails/happiness_long.png"
import ProjectBanner from "../components/ProjectBanner"
import HeaderSection from "../components/HeaderSection"
import sketch from "../assets/happiness/ideation.jpg"
import demoGif from "../assets/happiness/demo.gif"
import code1 from "../assets/happiness/code/1.png"
import code2 from "../assets/happiness/code/2.png"
import mobile from "../assets/happiness/mobile.jpeg"
import desktop from "../assets/happiness/desktop.png"
import ImageSection from "../components/ImageSection"
import useScrollToTop from '../hooks/useScrollToTop';
import SeeMoreButton from "../components/SeeMoreButton";

const HappinessStory = () => {

  const headerInfo = {
    title: "Discovering Brown University's Happy Places",
    tldr: "I helped build the front-end for a Brown Daily Herald article about students' happy places at Brown. We combined the reporting with HTML/CSS and jQuery to create a beautiful and immersive visual essay.",
    tools: ["HTML/CSS", "jQuery"],
    team: ["playful polar bear", "peaceful prairie dog"],
    timeline: "3 weeks"
  }

  // useScrollToTop()
  return (
  <div>
    <ProjectBanner imgSrc={heroImage} />
    <div className="project-content">
        <HeaderSection headerInfo={headerInfo} />
        <div className="project-section">
          <h2 className="small-section-title">background</h2>
          <h2 className="big-section-title">What is the Brown Daily Herald's Data Desk?</h2>
          <p>I'm part of the Data Desk at the <a href="https://www.browndailyherald.com/">Brown Daily Herald</a>, Brown University's daily newspaper. As part of the data desk, we work together with reporters to create interactive stories. We help build a story's front-end, scrape data and create graphics. The Data Desk's previous projects include a story about the <a href="https://projects.browndailyherald.com/2022/10/23/poll/"> newspaper's biannual poll</a> as well as <a href="https://projects.browndailyherald.com/2022/12/13/brown-property-footprint/">Brown's  property footprint</a>.</p>.
          </div>
        </div>
        <div className="project-section">
          <h2 className="small-section-title">task</h2>
          <h2 className="big-section-title">A Visual Essay about Happy Places</h2>
          <p>At the time I was brought onto the project, the <b>reporting for the story had already been completed</b>. BDH reporters had interviewed a series of Brown Students about locations on campus that made them happy. To accompany the interviews, a set of photos were taken of each happy place.</p>
          <p>Our task was to use our <b>front-end powers</b> to find a way to <b>integrate</b> the interviews and photos into a <b>joyful</b> and <b>immersive</b> visual essay.</p>
        </div>
        <div className="project-section">
          <h2 className="small-section-title">ideation</h2>
          <h2 className="big-section-title">Finding the Story's Format</h2>
          <p>We spent a substantial amount of time brainstorming how to organize the components of the story. We had an interesting statistic about the percentage of happy undergrads, which we knew we wanted to lead the story. </p>

          <p>When we thought about how to format the content of the story, the decision to place the text and photos side-by-side came pretty naturally. The tougher design choice stemmed from the fact that there were two photos of each location—one wide shot and one close-up—both of which we wanted to incorporate in the story. How could we make the switch between them interesting?</p>

          <ImageSection
            data={[{id: sketch, path: sketch, caption: "A very rough sketch generated during brainstorming." }]}
            margin={0}
            width={"50%"}
            separate={true}
            frame={false}
          />

          <p>Ultimately, we decided to make the wide shots grayscale, while keeping the close shots in color. When a reader has scrolled halfway through a given interview, the photo switches to the color image at the same time background color turns from black to a bright hue from the color image. We thought these color transitions would effectively convey the joy that these locations spark.</p>

        </div>
        <div className="project-section">
          <h2 className="small-section-title">development</h2>
          <h2 className="big-section-title">Leveraging jQuery to create Joyful Transitions </h2>
          <p>I used <b>jQuery</b> to implement the <b>image and background color transitions.</b> jQuery is a small Javascript library that makes it easier to manipulate HTML elements and their CSS styling.</p> 
          
          <ImageSection
            data={[{id: demoGif, path: demoGif, caption: "The article includes image and color transitions for each interview." }]}
            margin={"-6%"}
            width={"100%"}
            separate={true}
            frame={false}
          />

          <p>To detect when an HTML element has scrolled into view, I calculated the scroll position by adding together $(this).scrollTop() (the number of pixels scrolled on the document) and $(window).height() (the height of current viewport). If the scroll position is greater than an HTML element's position (which you can calculate with $(#id).offset().top), this means that the element has scrolled past the bottom of the window.</p>

          <ImageSection
            data={[{id: code1, path: code1, caption: "Detecting whether you've scrolled past an element." }]}
            margin={"0"}
            width={"80%"}
            separate={true}
            frame={false}
          />

          <div className="text-block tip-block">
            <p><b>Tip:</b> To make the transition less jarring, add an offset so the transition occurs a little later, when the element has scrolled past the bottom fourth of the page or so.</p>
          </div>

          <p>I was saddened to find out you can't transition between two images by altering the img element's src attribute. You swap the images, of course, but there's no way to put an transition between them, at least that I've found. If you want the new image to fade in, you have to 1) append a new img element within your desired div, 2) fade out the old img element, and 3) fade in the new img element. After the old image has faded, you should remove it from the HTML document so you're only ever dealing with two images at once</p>

          <p>It sounds pretty complicated—and it certainly was to figure out—but thankfully there are a lot of helpful jQuery methods which abstract away a lot of the process.</p>

          <ImageSection
            data={[{id: code2, path: code2, caption: "Fading out and removing an old image to fade in a new one." }]}
            margin={"0"}
            width={"80%"}
            separate={true}
            frame={false}
          />

           
        </div>
        <div className="project-section">
          <h2 className="small-section-title">responsive design</h2>
          <h2 className="big-section-title">Making the Story Responsive on Mobile</h2>
          <p>Once we had built out the HTML/CSS and Javascript for the desktop site, we had to ensure it also looked good on your phone. The biggest layout changes involved placing elements on top of each other than side-by-side. For example, we had to change the layout of the article title and chart. Similarly, we placed the story images at the top of the screen and the interview text below it, rather than side-by-side. </p>

          <div className="inline-section" style={{marginLeft: "-14%", marginRight: "-14%"}} >
            <div className="img-wrapper" style={{width: "70%"}}>
              <img src={desktop} />
              <p className="caption">Desktop layout</p>
            </div>
            <div className="img-wrapper" style={{width: "20%"}}>
              <img src={mobile} />
              <p className="caption">Mobile layout</p>
            </div>
          </div>

          <p>Fortunately, we had made extensive use of flexboxes, which made our lives a lot easier. The bulk of the changes could be accomplished with a few simple media queries that switched the CSS from flex-direction: row to flex-direction: column.</p>

        </div>
        <div className="project-section">
          <h2 class="small-section-title">reflection</h2>
          <h2 class="big-section-title">Takeaways</h2>
          <p>This was one of the most fulfilling projects I've ever completed, I think in large part because it was actually published for the wider Brown community to read. It was an amazing feeling to open up the BDH website and the site I had helped create on the front page!</p>
              <ol>
                  <li><b>Even simple interactions can create powerful storytelling.</b> Ultimately, the only interaction in the article comes from the amount you've scrolled. Yet even relatively simple dynamic elements like background and images transitions makes article so much more emotionally resonant than if it had been entirely static, at least in my opinion.</li>
                  <li><b>Don't underestimate simple Javascript libraries.</b> My instinct is often to immediately go to the most powerful framework to accomplish a task (i.e. React). However, due to the BDH's infrastructure, we could only use vanilla Javascript and small libraries that could be easily imported. But I never felt particularly limited by this constraint—if anything, I felt like it pushed me to be more creative in my implementation choices. </li>
              </ol>
              <SeeMoreButton />
        </div>
  </div>
  )
}

export default HappinessStory