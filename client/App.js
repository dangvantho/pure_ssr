import React, { useEffect, useState } from "react";
import Home from "./Home";
import Contact from "./Contact";
function Router(props, Component) {
  const { path, exact, route } = props;
  console.log(path, route);
  return <React.Fragment>{path === route && props.children}</React.Fragment>;
}
function App(props) {
  const { route , data } = props;
  console.log(props);
  const [count, setCount] = useState(0);
  return (
    <div>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Router path="/home" route={route}>
        <Home data={data} />
      </Router>
      <Router path="/contact" route={route}>
        <Contact data={data} />
      </Router>
    </div>
  );
}

export default App;
