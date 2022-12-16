import heroImage from "../assets/project_thumbnails/redesign_long.png"
import problemsImg from "../assets/troop/usability_problems.svg"
import desktopWf from "../assets/troop/wireframes/desktop.svg"
import tabletWf from  "../assets/troop/wireframes/tablet.svg"
import mobileWf from  "../assets/troop/wireframes/mobile.svg"
import styleGuideImg from "../assets/troop/style_guide.svg"
import desktopHifi from "../assets/troop/hifi/desktop.png"
import tabletHifi from "../assets/troop/hifi/tablet.png"
import mobileHifi from "../assets/troop/hifi/mobile.svg"
import siteGif from "../assets/troop/site.gif"
import interiorImg from "../assets/troop/interior.jpeg"
import HeaderSection from "../components/HeaderSection"
import ProjectBanner from "../components/ProjectBanner"
import ImageSection from "../components/ImageSection"
import useScrollToTop from '../hooks/useScrollToTop';
import SeeMoreButton from "../components/SeeMoreButton"

const TroopRedesign = () => {
  const headerInfo = {
    title: "Troop PVD's Landing Page",
    tldr: "I redesigned a restaurant's landing page to be responsive and elegant on desktop, tablet, and mobile screens. To begin, I identified the usability problems with the original page. I then used lofi wireframes to ideate a new design that would address these problems. I used Figma to create hifi mockups of the website, and finally built the page using handcoded HTML/CSS!",
    tools: ["Figma", "Balsamiq"],
    team: ["just me!"],
    timeline: "2 weeks"
  }

  useScrollToTop()
  return (
    <div>
      <ProjectBanner imgSrc={heroImage} />
      <div className="project-content">
        <HeaderSection headerInfo={headerInfo} />
        <div className="project-section">
          <h2 className="small-section-title">problem</h2>
          <h2 className="big-section-title">Troop's Original Website is Unusable</h2>
          <p>Troop is a website in Providence, RI which Google describes as a <i>"chill hangout with funky decor for eclectic street food fare & cheekily named craft cocktails."</i></p>

          <p>If you look up pictures of the restaurant and bar online, you'll see a ton of care was put into the Troop's interior design, with grafitti and other artwork lining the walls, with cool light fixtures hanging from the ceiling.</p>

          <ImageSection 
            data={[{id: interiorImg, path: interiorImg, caption: "An image of Troop's interior."}]}
            margin={0}
            width={"70%"}
            separate={false}
            frame={false}
          />

          <p>The same cannot be said for its website. The oversaturated orange color scheme and floating vertical layout is aesthetically unpleasant, and the site faces a laundry list of usability issues that make it difficult to navigate.</p>

          <p>Ultimately, the design of Troop's website creates a <b>bad impression</b> of the restaurant, and its <b>poor usability</b> could frustrate and <b>drive away potential customers</b> who might have otherwise reserved a table or attended an event.</p>

          <p>So, I decided to <b>redesign</b> Troop's homepage to make it <b>usable and responsive across device sizes</b>, bringing the website in line with the amount of care that was put into the restaurant's interior. In the end, I created an improved design language that could be expanded across the site.</p>
        </div>
        <div className="project-section">
          <h2 className="small-section-title">research</h2>
          <h2 className="big-section-title">What makes Troop hard to use?</h2>

          <p>To build the foundation for an effective redesign, I first identified the specific aspects of the interface that hindered the site's usability. When identifying problems, I specifically thought about usability along the axes of <b>learnability, memorability,</b> and <b>efficiency.</b></p>
          
          <ImageSection 
            data={[{id: 0, path: problemsImg}]} 
            separate={true}
            oversize={true}
            width={"100%"}
          />
        </div>
        <div className="project-section">
          <h2 className="small-section-title">ideation</h2>
          <h2 className="big-section-title">Brainstorming Design Solutions</h2>
          <p>Having identified seven major usability concerns in the site's interface, I began ideating designs that would address all seven issues. Since I wanted to ensure the site was <b>responsive on a range of screen sizes</b>, I created wireframes for <b>desktop, tablet,</b> and <b>mobile</b> versions of the site.</p>
          <ImageSection
            data={[{id: 1, path: desktopWf}]}
            margin={"-14%"}
            width={"100%"}
            separate={true}
            frame={false}
          />
          <div className="tip-block text-block">
            <p><b>Tip:</b> Don't get attached to your wireframes! Embrace their messiness, and discard them early and often as you iterate through multiple designs. I spent way too much time crafting my initial wireframes, only totally change their layout later.</p>
          </div>
          <ImageSection 
            data={[{id: 2, path: tabletWf}, {id: 3, path: mobileWf}]}
            margin={"-30%"}
            width={"50%"}
            separate={true}
            frame={false}
          />
        </div>
        <div className="project-section">
          <h2 className="small-section-title">visual design style</h2>
          <h2 className="big-section-title">Finding Troop's Visual Identity</h2>
          <p>Next, I created a visual design style guide to define the overall look and feel of the site. The style guide also includes the <b>base states</b> and <b>interaction states</b> of the interface components, so that a future designer could pick up my redesign without wondering what a button that's moused over should look like.</p>
          <div className="text-block tip-block">
            <p><b>Tip:</b> I used <a href="https://fontawesome.com/">Font Awesome</a> for all of my icons, which offers a really great toolset of free icons you can use in both Figma and HTML.</p>
          </div>
          <ImageSection 
            data={[{id: 4, path: styleGuideImg, caption: "The visual design style guide for Troop's homepage."}]}
            margin={0}
            width={"100%"}
            separate={false}
            frame={false}
          />
          <p>I took inspiration from the restaurant's decor, incorporating the rich blues found on Troop's walls. Otherwise, I opted to keep the visual design fairly simple to keep the focus on the site's <b>core tasks</b>, such as reserving a table, which <b>drive business</b>.</p>
        </div>
        <div className="project-section">
          <h2 className="small-section-title">high-fidelity prototyping</h2>
          <h2 className="big-section-title">Mocking up the Redesigns</h2>
          <p>Once I had created the visual style guide. I combined the guide with my wireframes to create <b>high-fidelity mockups</b> in Figma. I created mockups for each screen size so I would know what CSS media queries I would have to use to ensure the site felt great on every device.</p>
          <ImageSection 
            data={[{id: 5, path: desktopHifi}]}
            margin={"-14"}
            width={"100%"}
            separate={false}
            frame={false}
          />
          <div className="text-block tip-block">
            <p><b>Tip:</b> I personally try to create a Figma Component as soon as I use a design element more than once. This is because there's no easy way to convert a group into a Component instance. If you only use the Component a couple times, you only spent a little extra effort—whereas copying even a slight design change manually across multiple elements can be grueling.</p>
          </div>
          <div className="inline-section img-and-text">
            <div className="text-wrapper-left">
              <h2 className="small-section-title">tablet mockup</h2>
              <p>Since a tablet is much narrower than a desktop screen, I chose to overlay the text on the splash page on top of the photo rather than leaving them side by side. Similarly, I laid out the event calendar and accent image vertically rather than horizontally.</p>
            </div>
            <div className="img-wrapper img-wrapper-right">
              <img src={tabletHifi} />
            </div>
          </div>
          <div className="inline-section img-and-text">
            <div className="text-wrapper-left">
              <h2 className="small-section-title">mobile mockup</h2>
              <p>There's even less space on a phone screen, so I decided to overlay the restaurant title directly over the splash image. I moved the info that used to be available below the order/reserve buttons into an "Hours & Info" overlay found on the navbar.</p>

              <p>As a result, I also removed the gray footer, as all the information it contained was now always accessible via the "Hours & Info" overlay.</p>
            </div>
            <div className="img-wrapper img-wrapper-right">
              <img src={mobileHifi} />
            </div>
          </div>
        </div>
        <div className="project-section">
          <h2 className="small-section-title">front-end development</h2>
          <h2 className="big-section-title">Building the Final Website</h2>
          <p>Finally, I followed my Figma mockups to code the homepage using hand-build HTML/CSS.</p>

          <p>Although it took a lot of classes and media queries, I'm really happy with how the final result turned out! A responsive website was this project's primary goal, and I feel that I achieved that.</p>
          
          <div className="inline-section rounded-section">
            <div className="img-wrapper">
              <img src={siteGif} />
            </div>
          </div>

          <div className="inline-section">
            <a class="card-button" href="https://sillysloth888.github.io/cs130-responsive-redesign/">View the deployed site here!</a>
          </div>
         
        </div>
        <div className="project-section">
          <h2 class="small-section-title">reflection</h2>
          <h2 class="big-section-title">Reflections</h2>
          <p>Here were my main lessons learned from redesigning Troop's website.</p>
              <ol>
                  <li><b>Taking away info is as important as adding it.</b> Many of the improvements to the interface were based around removing, rather than adding additional information, for example, by distilling down the navbar options. I think the end result is a  sleeker interface that is much less confusing to use.</li>
                  <li><b>There are many time sucks in interface design.</b> I spent too long on UI decisions that were ultimately inconsequential, such as font type or the specific shade of blue I should use for the background. In the end, many of these decisions only marginally impacted the aethestic impact of the site, and had no bearing on its usability whatsover. I learned from this project the importance of not letting these choices derail your project.</li>
              </ol>
              <SeeMoreButton />
        </div>
      </div>
    </div>
  )
}

export default TroopRedesign