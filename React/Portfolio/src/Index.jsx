import { React, ReactDom, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./Index.css";
import Nav from "./Nav.jsx";
import AboutMe from "./AboutMe.jsx";
import TNite from "./TNite.jsx";

const Index = () => {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <Nav />
      </div>

      <div class="work aboutMe" id="aboutMe">
        <AboutMe />
      </div>
      <div class="work" id="2niteDash">
        <TNite />
      </div>

      <div class="work" id="WeightTracker">
        <div>
          <h2>Weight Tracker</h2>
          <p>
            Weight Tracker web-app lets users login and see their weight posts.
            Their profile shows an interactive chart with their past weight.
            Users can select any time interval to display their weight.
          </p>
          <br />
          <br />
          <a
            href="https://github.com/Sergey-Grigoryev/DTRS-weight-tracker"
            target="_blank"
          >
            GitHub Repo
          </a>
        </div>
        <a
          href="https://github.com/Sergey-Grigoryev/DTRS-weight-tracker"
          target="_blank"
        >
          <img
            class="projectImg"
            src="./assets/Images/ScreenshotWeightTracker.png"
            title=""
          />
        </a>
      </div>

      <div class="work" id="ShoppingList">
        <div>
          <h2>Automated Shopping List</h2>
          <p>
            A site for users to have their commonly purchased grocery items
            auto-populate into a shopping list based on how long each item
            generally lasts them. Users can view nutrition facts about each
            item, along with suggestions on which wine pairs well with items in
            their shopping cart.
          </p>
          <br />
          <br />
          <a
            href="https://github.com/Sergey-Grigoryev/Team6Project"
            target="_blank"
          >
            GitHub Repo
          </a>
        </div>
        <a
          href="https://sergey-grigoryev.github.io/Team6Project/"
          target="_blank"
        >
          <img class="projectImg" src="./assets/Images/SiteSS.png" title="" />
        </a>
      </div>

      <div class="work" id="WeatherDash">
        <div>
          <h2>Weather Dashboard</h2>
          <p>
            A dashboard for current weather and a 5 day forcast. Using APIs to
            get current IP address location and pull weather for the user's
            current location, additionally lets the user search for any city by
            name for weather deatails.
          </p>
          <br />
          <br />
          <a
            href="https://github.com/Sergey-Grigoryev/Weather_Dashboard"
            target="_blank"
          >
            GitHub Repo
          </a>
          <a
            href="https://sergey-grigoryev.github.io/Weather_Dashboard/"
            target="_blank"
          >
            Weather Dashboard Page
          </a>
        </div>
        <a
          href="https://sergey-grigoryev.github.io/Weather_Dashboard/"
          target="_blank"
        >
          <img
            class="projectImg"
            src=".\assets\Images\Screenshot copy.png"
            title=""
          />
        </a>
      </div>
      <div class="work" id="WorkdayTask">
        <div>
          <h2>Workday Task Scheduler</h2>
          <p>
            A simple work day schedules allowing you to save tasks needed to be
            done each hour, with an option to save, edit, and delete it.
          </p>
          <br />
          <h3>Technologies/Platforms used:</h3>
          <p>JaveScript, HTML, CSS</p>
          <br />
          <a
            href="https://github.com/Sergey-Grigoryev/WorkDayScheduler"
            target="_blank"
          >
            GitHub Repo
          </a>
          <a
            href="https://sergey-grigoryev.github.io/WorkDayScheduler/"
            target="_blank"
          >
            Work Day Scheduler Site
          </a>
        </div>
        <a
          href="https://sergey-grigoryev.github.io/WorkDayScheduler/"
          target="_blank"
        >
          <img
            class="projectImg"
            src=".\assets\Images\WorkDayImg.png"
            title=""
          />
        </a>
      </div>
      <div class="work" id="RandomPW">
        <div>
          <h2>Random Password Generator</h2>
          <p>
            A simple webpage that generates a password with 4 parameters chosen
            by the user.
          </p>
          <br />
          <h3>Technologies/Platforms used:</h3>
          <p>JaveScript, HTML</p>
          <br />
          <br />
          <a
            class="projectLinks"
            href="https://github.com/Sergey-Grigoryev/PasswordGenerator"
            target="_blank"
          >
            GitHub Repo
          </a>
          <a
            class="projectLinks"
            href="https://sergey-grigoryev.github.io/PasswordGenerator/"
            target="_blank"
          >
            Random Password Generator
          </a>
        </div>
        <a
          href="https://sergey-grigoryev.github.io/PasswordGenerator/"
          target="_blank"
        >
          <img
            class="projectImg"
            src="./assets/Images/PasswordGen.png"
            title="Screenshot of the Password Generator website"
          />
        </a>
      </div>

      {/* <!-- <div class="work" id="work3">
          <div>
            <h2>Title work 3</h2>
            <p>Work 3 description</p>
            <br />
            <br />
            <a href="" target="_blank">Links to work3</a>
          </div>
          <a href="https://picsum.photos/200" target="_blank">
            <img class="projectImg" src="https://picsum.photos/200" title="" />
          </a>
        </div> --> */}
      <footer class="work contactMe" id="contactMe" />
      <div>
        <h2>Contant Me:</h2>
        <p>
          <a href="mailto:ser.grigor88@gmail.com">ser.grigor88@gmail.com</a> |
          408.464.7177 | 1800 Stokes St #156, San Jose, CA 95126 | Links:
          <a href="https://github.com/Sergey-Grigoryev" target="_blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sergey-v-grigoryev/"
            target="_blank"
          >
            linkedin
          </a>
        </p>
      </div>
    </div>
  );
};

export default Index;
