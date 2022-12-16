import ProjectBanner from "../components/ProjectBanner"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import HeaderSection from "../components/HeaderSection"
import roomkastImg from "../assets/project_thumbnails/roomkast_long.png"
import sketches1 from "../assets/roomkast/sketches/sketches_1.svg"
import sketches2 from "../assets/roomkast/sketches/sketches_2.svg"
import sketches3 from "../assets/roomkast/sketches/sketches_3.svg"
import wireframes1 from "../assets/roomkast/wireframes/wireframes_1.svg"
import wireframes2 from "../assets/roomkast/wireframes/wireframes_2.svg"
import wireframes3 from "../assets/roomkast/wireframes/wireframes_3.svg"
import critique2 from "../assets/roomkast/critique_images/critique_2.svg"
import critique3 from "../assets/roomkast/critique_images/critique_3.svg"
import critique4 from "../assets/roomkast/critique_images/critique_4.svg"
import critique5 from "../assets/roomkast/critique_images/critique_5.svg"
import critique6 from "../assets/roomkast/critique_images/critique_6.svg"
import critique7 from "../assets/roomkast/critique_images/critique_7.svg"
import ImageSection from "../components/ImageSection"
import useScrollToTop from '../hooks/useScrollToTop';
import SeeMoreButton from "../components/SeeMoreButton"

const RoomkastApp = () => {
  const critiquePaths = [critique2, critique3, critique4, critique5, critique6, critique7]
  const headerInfo = {
    title: "Roomkast",
    tldr: "My teammates and I designed and prototyped the user interfaces and interactions for Roomkast, a roommate-matching app. After revising our designs based on feedback from a group critique, we conducted remote usability testing to evaluate our prototype and finalize our designs.",
    tools: ["Figma", "Balsamiq", "UserTesting.com"],
    team: ["whimsical whale", "happy hedgehog", "funny fox"],
    timeline: "3 weeks"
  }

  const sketchImgSectionData = [
    {
      id: 0,
      path: sketches1, 
      caption: "sketch 1: design that focuses on incorporating apartment preference into the roommate search."},
    {
      id: 1,
      path: sketches2,
      caption: "sketch 2: a marketplace-like app focused on discovering individuals by looking through a list of profiles."
    },
    {
      id: 3, 
      path: sketches3, 
      caption: "sketch 3: an app focused on algorithmically determining compatibility between users to recommend roommates."
    }
  ]

  const wireframesImgSectionData = [
    {
      id: 0, 
      path: wireframes1
    },
    {
      id: 2, 
      path: wireframes2
    },
    {
      id: 3, 
      path: wireframes3
    }
  ]

  useScrollToTop()
  return (
    <div>
      <ProjectBanner imgSrc={roomkastImg}/>
      <div className="project-content">
        <HeaderSection headerInfo={headerInfo} />
        <div className="project-section">
          <h2 class="small-section-title">pre-design</h2>
          <h2 class="big-section-title">What kind of interface should Roomkast have?</h2>
          <p>Roomkast describes itself as a "profile-matching tool for people who see the value in co-sharing a place to live.”</p>
          <p>We thought the people most likely to be looking for a roommate would be younger people individuals who had just moved to a metropolitan area and would like to split rent for an apartment.</p>
          <p>Given the widespread use of dating apps among young people, we thought Roomkast users would prefer to use an interface with similar navigation and design elements.</p>
        </div>
        <div className="project-section">
          <h2 class="small-section-title">ideation</h2>
          <h2 class="big-section-title">Exploring Design Alternatives</h2>
              <p>Each member of our team created a set of sketches detailing what we imagined the app to look like in order to generate a diversity of approaches to solving Roomkast’s goals.</p>
          <ImageSection 
            data={sketchImgSectionData}
            margin={0}
            width={"100%"}
            separate={false}
            frame={true}
          />
        </div>
        <div className="project-section">
          <h2 class="small-section-title">wireframes</h2>
          <h2 class="big-section-title">Combining our Designs</h2>
          <p>After reviewing our sketches, we discussed which designs most effectively solved Roomkast’s goals as a startup.</p>
          <ul>
              <li>We decided a profile-focused rather than apartment-focused app better solved the description of Roomkast as a “profile-matching tool".</li>
              <li>We liked the survey idea to determine compatibility, but we felt that giving a predefined list of matches was too restrictive. We wanted users to be able to endlessly scroll through and discover profiles if they liked.</li>
              <li>We agreed that being able to create group profiles and message via the app were important features.</li>
          </ul>
          <p>From our discussion, we combined our sketches to produce a final set of wireframes we would use to create our high-fidelity prototype.</p>
          <ImageSection 
            data={wireframesImgSectionData} 
            margin={0}
            width={"100%"}
            separate={false}
            frame={true}
          />
        </div>
        <div className="project-section">
          <h2 class="small-section-title">high-fidelity prototyping</h2>
          <h2 class="big-section-title">Creating a Mockup of the Roomkast App</h2>
          <p>
          Based on our combined wireframes, we made an initial prototype of the Roomkast app. We didn’t include all possible interactions or screens, but implemented enough to explore and test the key functionalities of the app.
          </p>
          <iframe className="figma-embed"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvinTFwwNoHv1nI5GIxQFoK%2FInitial-Roomkast-Mockup%3Fnode-id%3D0%253A1" 
            allowfullscreen></iframe>
        </div>
        <div className="project-section">
          <h2 class="small-section-title">design iteration</h2>
          <h2 class="big-section-title">Improving User Flows</h2>
          <p>
          To improve our prototype, we participated in a design critique with a UX researcher. Below, you can see how we incorporated feedback from the critique to revise our high-fidelity prototype.
          </p>
          <div className="carousel">
              <Carousel autoFocus={true} showStatus={false}>
                {critiquePaths.map((path => (
                  <div className="img-wrapper">
                  <img src={path}/>
                </div> 
                )))}

            </Carousel>
            </div>
          </div>
        <div className="project-section">
          <h2 class="small-section-title">usability testing</h2>
          <h2 class="big-section-title">User testing Roomkast</h2>
          <p>We conducted usability testing via the platform <a href="usertesting.com">UserTesting.com</a>. We wanted to choose task that would explore Roomkast’s primary functionality: to find someone compatible to live with. Eventually, we settled on a task that most real users of the app would accomplish: creating an account and messaging a potential roommate.</p>

          <p>We then split this main task into five subtasks for our tests to complete:</p>
          <ol>
            <li>Select a login method and create an individual profile.</li>
            <li>Interact with the discovery page to look at people's profiles.</li>
            <li>Reach out to Amelia (a potential housemate) by sending her a message.</li>
            <li>Pin Amelia's conversation in the messages tab.</li>
            <li>Sort the conversations by compatibility</li>
          </ol>

          <div>
            <h3>Analyzing Our Results</h3>
            <p>Our testing surfaced some remaining usability issues in our interface that were not noticed during the group critique. These included:</p>  
            <ul>
              <li>The pinning animation could be unresponsive and confusing</li>
              <li>On some screens, the navbar was not properly fixed, requiring users needed to scroll to the bottom of the page to navigate between screens. </li>
            </ul>

            <p>At the same time, the user testing helped validate our intuitions about the simplicitly and learnability our designs and user experience: </p>
            <ul>
              <li>Users thought the fonts and colors contributed to a clean design.</li>
              <li>Users understood the compability system intuitively without the need for further explanation</li>
              <li>All three users believed that they were able to complete the task successfully, rating the easiness of the task as a 4/5.</li>
            </ul>
          </div>
        </div>
          <div className="project-section">
          <h2 class="small-section-title">Design Solutions</h2>
          <h2 class="big-section-title">Our Final Prototype</h2>
            <p>Here’s our final design file and revised prototype. Please try it out!</p>
            <div className="image-container">
              <iframe 
                  style={{width: "100%", height:650}}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FvinTFwwNoHv1nI5GIxQFoK%2FInitial-Roomkast-Mockup%3Fnode-id%3D0%253A1" 
                  allowfullscreen
              ></iframe>
              <iframe 
                  style={{width: "100%", height:650}} 
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2QyauiqEDoUesYWrUto7Qt%2FFinal-Roomkast-Mockup%3Fnode-id%3D57%253A271%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D57%253A271" 
                  allowfullscreen>
              </iframe>
            </div>
        </div>
        <div className="project-section">
          <h2 class="small-section-title">reflection</h2>
          <h2 class="big-section-title">Reflections</h2>
          <p>I had a ton of fun working with a team brainstorming and refining designs to create a solution for Roomkast. Here were my main takeaways:</p>
              <ol>
                  <li><b>Don't reinvent the wheel.</b> It might be fun to try to brainstorm designs that might bring about the next revolution in user interfaces, but especially as someone at the beginning of their UI/UX journey, leveraging tried-and-true conventions (such as the the bottom navbar) allows me to create the best experience for my users.</li>
                  <li><b>Get as many fresh eyes on your designs as you can. </b>After too long staring at our prototypes, everything starts to bleed together. Even a remote usability test from one user was invaluable for detecting issues with our interface that had become invisible to us.</li>
              </ol>
              <SeeMoreButton />
        </div>
      </div>
    </div>
  )
}

export default RoomkastApp