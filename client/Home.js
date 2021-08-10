import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
Home.propTypes = {};

function Home(props) {
  const [story, setStory] = useState(props.data || []);
  useEffect(() => {
    axios
      .get(
        "https://reading-book-truyen-full.herokuapp.com/api/home/hot-book?id=all"
      )
      .then(res=>res.data)
      .then((res) => {
        console.log(res.data);
        setStory(res.data);
      });
  }, []);
  return (
    <div>
      Home
      <ul>
        {story.map((item) => (
          <div key={item.title}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Home;

