import "./home.style.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import  Course  from "../courses/course.component";
// export const Home = props => (
//   <div>
//     <h1>Courses List:</h1>
//     <ul>
//       <li>
//         <Link to={ROUTES.AI}>Ai</Link>
//       </li>
//       <li>
//         <Link to={ROUTES.PM}>pm</Link>
//       </li>
//       <li>
//         <Link to={ROUTES.WEB}>webD</Link>
//       </li>
//       <li>
//         <Link to={ROUTES.APP}>appD</Link>
//       </li>
//     </ul>
//   </div>
// );
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        { name :"Ai", mentors: 2, description: "This is AI"  },
        { name :"Web", mentors: 2, description: "This is AI"  },
        { name :"pm", mentors: 2, description: "This is AI" },
        { name: "App" , mentors: 2, description: "This is AI"  }
      ]
    };
  }
  render() {
    return (
      <Router>
        <div>
          <h1>
            Welcome! here are the courses available for this course click to see
            mentors and your pears
          </h1>
          <ul>
            {this.state.courses.map( course => {
              let route_course = "course/" + course.name;
              return(
                <li>
                <Link to={route_course}>{course.name}</Link>
                <p>{course.description}</p>
                </li>
              )
            })}
          </ul>
        </div>
        <Route path={"/course/:name"} component={Course} />
      </Router>
    );
  }
}

export default Home;
