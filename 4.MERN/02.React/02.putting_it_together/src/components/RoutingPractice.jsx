import React from "react";
import {
  BrowserRouter,
  Switch,
  Link,
  Route,
  useParams,
} from "react-router-dom";

const RoutingPractice = () => {
  const Home = () => {
    return <h1>Welcome</h1>;
  };

  const WithParam = (props) => {
    const { word, fontColor, bgColor } = useParams();
    if (fontColor) {
      console.log(fontColor);
    }
    if (bgColor) {
      console.log(bgColor);
    }
    //dynamic styling should not use {} or it will return an object containing both key and value
    if (isNaN(word)) {
      return (
        <h1 style={{ color: fontColor, backgroundColor: bgColor }}>
          The word is: {word}
        </h1>
      );
    } else {
      return (
        <h1 style={{ color: fontColor, backgroundColor: bgColor }}>
          The number is: {word}
        </h1>
      );
    }
  };

  return (
    <div className="bg-warning">
      <BrowserRouter>
        <h1>Routing Practice</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:word/:fontColor?/:bgColor?">
            <WithParam />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default RoutingPractice;
