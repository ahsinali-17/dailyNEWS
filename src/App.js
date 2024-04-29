
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Country from "./components/Country";
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const api = process.env.REACT_APP_NEWS_API
    const[country,setCountry]=useState("us");
    const[pgSize,setPgSize]=useState(5);
    const[progress,setProgress]=useState(0);

    return (
      <>
        <Router>
          <LoadingBar
        color='#ffff'
        progress={progress}
       
      />
            <Navbar />
            <Country country = {setCountry}/>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News  api= {api} progress = {setProgress} 
                    key={"general"}
                    pgSize={pgSize}
                    country={country}
                    catagory="general"
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News  api= {api} progress = {setProgress} 
                    key={"science"}
                    pgSize={pgSize}
                    country={country}
                    catagory="science"
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News  api= {api} progress = {setProgress} 
                    key={"sports"}
                    pgSize={pgSize}
                    country={country}
                    catagory="sports"
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News  api= {api} progress = {setProgress} 
                    key={"technology"}
                    pgSize={pgSize}
                    country={country}
                    catagory="technology"
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News  api= {api} progress = {setProgress} 
                    key={"business"}
                    pgSize={pgSize}
                    country={country}
                    catagory="business"
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News  api= {api} progress = {setProgress} 
                    key={"health"}
                    pgSize={pgSize}
                    country={country}
                    catagory="health"
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News  api= {api} progress = {setProgress} 
                    key={"entertainment"}
                    pgSize={pgSize}
                    country={country}
                    catagory="entertainment"
                  />
                }
              />
            </Routes>
        
        </Router>
      </>
    );
  }

export default App