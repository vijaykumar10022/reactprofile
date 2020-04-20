import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Data from './data/data.json';
import Profile from './Profile';
// import ReactDom from 'react-dom'
import {BrowserRouter,Route,Link} from 'react-router-dom';
// import Profile from './Profile';
function App() {
  var info=Data.profiles;
  // ReactDom.render(<p>Hello </p>,document.getElementById('header'))
    // let array=['abc','adf',"asdfa","dsafd","erew","etrwaw"];
    // let array2=["dteaf","derawe","ewrwwr","rewewwas","eretty","erwertw"]
    return (
      <section>
        <BrowserRouter>
        <header className="header">
        {info.map((k,l)=>(
                <Link to={{pathname:"/profile",data:{id:l}}}>{"Profile"+(l+1)+" "}</Link>
        ))}

      </header><br></br><br></br>
        <Route exact path="/profile" component={Profile}>
        </Route>
        <Route exact path="/" component={home}></Route>
        </BrowserRouter>       
        </section>
    )
}
let home=()=>{
  var info=Data.profiles;
  return (
    <section className="parent">
      {
          info.map((i,index)=>(
            <div className="card" key={index}>
              <div className="card-top">
              <h2> {i.basicInformation.name}</h2><br></br>
              <h5><em>{i.basicInformation.role}</em></h5>
              </div>
              <div className="card-bottom">
                <a href={"mailto:"+i.basicInformation.email}>{i.basicInformation.email}</a>
                <br></br>
                <a href={"tel:"+i.basicInformation.mobile}>{i.basicInformation.mobile}</a>
                <br></br>
                <Link to={{pathname:"/profile",data:{id:index}}}> ViewProfile >></Link>
            </div>
            </div>

          ))
        }
    </section>
  )
}

export default App;
