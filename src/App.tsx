import { useState } from "react";
import "./App.css";
import "./components/ArtworkImage";
import ArtworkImage from "./components/ArtworkImage";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; // from https://www.npmjs.com/package/react-tabs
import "react-tabs/style/react-tabs.css";
import InfoPanel from "./components/InfoPanel";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import Sketch from "./components/Sketch"; // from https://shivanshbakshi.dev/blog/p5-react/integrate-p5-with-react/

function App() {
  const path = "src/assets/artwork.png"; // hard-coded for now

  // hard coded for now - perhaps extracted from JSON in the future?
  const currProps = {
    title: "Rotating Rectangle",
    artist: "Shivansh Bakshi",
    description:
      "Peaceful, medidative, colourful. What else could you desire?",
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="sketchContainer">
              <div className="sketch">
                <ReactP5Wrapper sketch={Sketch} />
              </div>
            </div>
          </div>
          <div className="col">
            <Tabs>
              <TabList>
                <Tab>Info</Tab>
                <Tab>Edit</Tab>
              </TabList>

              <TabPanel>
                <InfoPanel
                  title={currProps.title}
                  artist={currProps.artist}
                  description={currProps.description}
                ></InfoPanel>
              </TabPanel>
              <TabPanel>
                <h2>... various cool settings ...</h2>
                <p>Image uploads, camera feed, audio feed, sliders, random seeds, etc, etc</p>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
