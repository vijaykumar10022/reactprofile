import React from 'react'
import './App.css';
import Data from './data/data.json';
// export default class Profile extends React.Component{
// 	render(){
// 		var style={
//       background:"#000",
//       color:"#fff",
//       padding:"1%",
//       textAligh:"center"
//     };
// 		return(
// 			<div>
// 			<h3 style={style}>{this.props.bestfriend} is bestfriend for {this.props.name}</h3>
// 			</div>
// 			)
// 	}
// }
// var style={
// 	      background:"#000",
// 	      color:"#fff",
// 	      padding:"1%",
// 	      textAligh:"center"
// 	    };
// let Profile=(p)=>{
// 	return <div><h4 style={style}>{p.name}s best friend is {p.bestfriend} </h4></div>
// }
class Profile extends React.Component{

	render(){
		var indexValue=this.props.location.data.id;
		var specificprofile=Data.profiles[indexValue];
		// {this.props.data.id}
		return (
			<section className="parent">
				<div className="card">
					<div className="card-top">
						<h2>{specificprofile.basicInformation.name}</h2>
						<em>{specificprofile.basicInformation.role}</em>
					
					</div>
					<div className="card-bottom">
					<a href={"mailto:"+specificprofile.basicInformation.email}>{specificprofile.basicInformation.email}</a>
                <br></br>
                <a href={"tel:"+specificprofile.basicInformation.mobile}>{specificprofile.basicInformation.mobile}</a>
                <br></br>
					</div>
				</div>
				<div className="card2">
					<div className="card-bottom">
						<h2> Educational Qualifications</h2>
					</div>
					<div className="card-top">
						{specificprofile.Education.map((i,j)=>(
							<ul>
								<li>{i.Degree}</li>
								<li>{i.institution}</li>
							</ul>
						)

						)}
							
					</div>
				</div>
			</section>
		)
	}
}

export default Profile;