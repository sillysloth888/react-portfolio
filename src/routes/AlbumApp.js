import ProjectBanner from "../components/ProjectBanner"
import bannerImg from "../assets/project_thumbnails/album_long.png"
import HeaderSection from "../components/HeaderSection"
import useScrollToTop from '../hooks/useScrollToTop';
import componentImg from "../assets/album/components.png"
import ImageSection from "../components/ImageSection";
import queueGif from "../assets/album/album_demo1.gif"
import filterGif from "../assets/album/album_demo2.gif"
import SeeMoreButton from "../components/SeeMoreButton";

const AlbumApp = () => {
  const headerInfo = {
    title: "Album Discovery App",
    tldr: "I created a React app that allows you to sort and filter a list of albums using data from Spotify. When you've found an album you would like to listen to, you can save it to your queue! I used Material UI (MUI) React to style the app.",
    tools: ["React", "MUI"],
    team: ["just me!"],
    timeline: "2 weeks"
  }

  useScrollToTop()
  return (
    <div>
      <ProjectBanner imgSrc={bannerImg}/>
      <div className="project-content">
        <HeaderSection headerInfo={headerInfo}/>
        <div className="project-section">
          <h3 className="small-section-title">background</h3>
          <h2 className="big-section-title">Reimagining the Album Listicle</h2>
          <p>I'm always on the lookout for interesting and new music to listen to. Spotify and Apple Music's algorithmic recommendation systems are great for finding more of the kind of music I already know I love. They're not so great for finding albums that are totally out of left-field for me but might just be my next obsession.</p>

          <p>So I often find myself trawling review and music aggregation sites for the "Top Ten Albums of [<i>insert year/decade here</i>]" articles, but these lists are always a pain to navigate. Because they're static objects, there's no good way to sift through them besides scrolling endlessly down a page—and even worse, no way to mark which albums you want to listen to.</p>

          <p>So I envisioned an app where you could do just that—in line with other aggregation sites such as <a href="https://letterboxd.com/reviews/popular/this/week/">Letterboxd</a> or <a href="https://rateyourmusic.com/">Rate your Music</a>, but with better functionality for filtering.</p>
        </div>
        <div className="project-section">
          <h3 className="small-section-title">data retrieval</h3>
          <h2 className="big-section-title"> Geting Album Data using the Spotify API</h2>
          <p>For my app's proof-of-concept, I spent some time finding albums that spanned different decades and genres which I could use to test my app.</p>
          
          <p>Using each album's unique <a href="https://community.spotify.com/t5/FAQs/What-s-a-Spotify-URI/ta-p/919201">Spotify URI</a>, I used the <a href="https://developer.spotify.com/console/get-several-albums/">Get Several Albums</a> endpoint of Spotify's Web API console to download a json with all of the album data. </p>.

          <div className="text-block tip-block">
            <p><b>Tip:</b> Spotify's Web API is a great tool play with because it allows you to extract data from the Spotify API without having to worry about how to make API calls in Javascript, or how to hide your public key.</p>
          </div>

        </div>
        <div className="project-section">
          <h3 className="small-section-title">app architecture</h3>
          <h2 className="big-section-title">Organization of Components</h2>
          <p>There were five components I created besides App.js which I used to handle the logic of the app.</p>
          <ImageSection
            data={[{id: componentImg, path: componentImg}]}
            margin={"-16%"}
            width={"100%"}
            separate={true}
            frame={false}
          />
          <ol>
          <li>
            <b>AlbumItem</b> is the album card in the aggregator, and displays the album cover, name, artists, number of tracks, and runtime. It also contains the button to add an item to the queue. In the App component, a map function is applied to a list of albums to create each AlbumItem.
            </li>
          <li>
            <b>ControlBar</b> contains a dropdown menu for sorting, a range slider to filter by date, and a checkbox to include explicit content. The ControlBar component contains the DoubleRangeSlider component
            </li>
          <li>
            <b>DoubleRangeSlider</b> contains the range slider used to filter by date. It was adapted from an example in the Material UI React documentation.
            </li>
          <li>
            <b>Queue</b> contains the entire queue, including the title and total runtime elements, as well as the list of QueueItems which makes up the queue.
            </li>
          <li>
            <b>QueueItem</b> displays an single album in the queue, showing the album's cover and name. It also contains a button that allows you to remove items from the queue. In the Queue component, a map function is applied to the queue state to create each QueueItem
            </li>
          </ol>
        </div>
        <div className="project-section">
            <h3 className="small-section-title">program logic</h3>
            <h2 className="big-section-title">Triggering State Changes</h2>
            <p>My app contains four states, which manage sorting, filtering, and adding/removing from the queue.</p>
            <ul>
            <li><b>queue</b> contains a list of albums which represent the queue. Clicking the "Add to Queue" button on an album card adds that album to the list. Clicking the minus button on an queue item removes that album from the list.</li>
          </ul>

          <div className="inline-section rounded-section">
            <div className="img-wrapper">
              <img src={queueGif} />
            </div>
          </div>

          <ul>
            <li><b>checked </b>represents the state of the "Include Explicit" checkbox. Checking the "Include Explicit" box sets the state to true while unchecking the box sets the state to false</li>
            <li><b>sort</b> represents the current sorting method used to display the albums. Selecting different options in the "Sort by" dropdown box changes the state to "newest", "oldest", and "popular" respectively. If no option has been selected, the state is ""</li>
            <li><b>rangeValue</b> is a tuple that represents the lower and upper bound set by the Release Date slider. By dragging either end of the slider back or forth, the user changes the first integer in the tuple (the minimum) or the second integer in the tuple (the maximum).</li>
          </ul>

          <div className="inline-section rounded-section">
            <div className="img-wrapper">
              <img src={filterGif} />
            </div>
          </div>
        </div>

        <div className="project-section">
            <h3 className="small-section-title">usabililty</h3>
            <h2 className="big-section-title">Considering Design Principles</h2>
            <p>Although Material React UI helped me style the components themselves, considering the overall hierarchy of my interface was still crucial. I considered the following usability principles in my project</p>
            <p>Visual hierarchy:</p>
            <ul>
              <li>"Albums" and "Queue" headers clearly delineate each respective section</li>
              <li>All album and queue items have the same look and size.</li>
              <li>Control bar with sorting and filter options only extends the length of the album grid, indicating that sorting/filtering will only occur on the main aggregator objects (not the queue).</li>
              <li>More important album info is a bigger font size and vice-versa</li>
            </ul>
            <p>Visual Design:</p>
            <ul>
              <li>Album items are displayed as squares organized into a grid, while queue items are displayed as rectangles organized into a list in order to create visual distinction between the sections.</li>
              <li>Purple is used to accent elements on the site that can be interacted with, such as the buttons to add and remove items from the queue, the sliders, and the checkboxes when they are checked.</li>
            </ul>
          <div className="inline-section">
            <a class="card-button" href="https://sillysloth888.github.io/cs130-development/">View my deployed app here!</a>
          </div>
        </div>
        <div className="project-section">
          <h2 class="small-section-title">reflection</h2>
          <h2 class="big-section-title">Takeaways</h2>
          <p>I think this app turned out both loking and feeling great. I think the fact that I could actually envision me and my friends making use of an app or site like this provided extra motivation to build it as well as I could. Here were my main takeaways:</p>
              <ol>
                  <li><b>Make use of component libraries.</b> The MUI component library is great, both with regards to the documentation and the components themselves. I love custom styling my interface elements as much as anyone else, but using MUI in this project freed me up to dedicate my priary focus on the app architecture and program logic.</li>
                  <li><b>You don't need to do everything at once!</b> I spend a lot of time trying to figure out how to extract data from the API directly in the React app, and never ended up being able to figure it out. Sometimes the smartest move is to shelve certain features to implement in future projects.</li>
              </ol>
              <SeeMoreButton />
        </div>
      </div>
    </div>
  )
}

export default AlbumApp