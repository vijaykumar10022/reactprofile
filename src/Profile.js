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
		// var data=specificprofile.skillset.webtechnologies;
		// var sdata=data.split(" ");
		// var planguage=specificprofile.
		
		
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
				<div class="child2">
				<div className="profile">
				<h2>Profile</h2><hr></hr>
			<ul>
				<li>I have been working as a trainer from the past 3 years. Worked for Various companies such as institute for electronic Governance , I'm Currently working for </li>
				<li>Having Extensive Experince in building of logical modules using C Language.</li>
				<li>Having Teaching Experince MIT.</li>
				<li>Having Experince In Source Code Management Using Git&GitHub.</li>
				<li>Having Knowledge on Data bases like mysql,sql,nosql and PDO</li>
				<li>Developed few websites using flask along with mysql database.</li>
				<li>Having Teaching Experince in Data Strucure&Algorithms</li>
				<li>Having Experince in Machine Learing&Data Visuvalization</li>
			</ul>
				</div><br></br>
				<div></div>
				<div className="card2">
					
					<div className="card-bottom">
						<h2> Educational Qualifications</h2>
					</div>				
			<table border="1px" cellpadding="10px" cellspacing="10px" >
				<thead>
					<tr>
						<td>Degree</td>
						<td>Institute</td>
						<td>Percentage</td>
					</tr>
				</thead>
				{specificprofile.Education.map((i,j)=>(
				<tbody>
					<tr>
						<td>{i.Degree}</td>
						<td>{i.institution}</td>
						<td>{i.Percentage}</td>
					</tr>
					
				</tbody>
				)
				)}
			</table>
			</div>
			<h2>Skill Set</h2><hr></hr>
			<h3>Web Technologis</h3>
			<span>{specificprofile.skillset.webtechnologies.split(" ")[0]}</span><span>{specificprofile.skillset.webtechnologies.split(" ")[1]}</span><span>{specificprofile.skillset.webtechnologies.split(" ")[2]}</span>
			<h3>Programming Language</h3>
			<span>{specificprofile.skillset.programminglanguages.split(" ")[0]}</span><span>{specificprofile.skillset.programminglanguages.split(" ")[1]}</span>
			<h3>Operating System</h3>
				<span>{specificprofile.skillset.operatingsystem.split(" ")[0]}</span><span>{specificprofile.skillset.operatingsystem.split(" ")[1]}</span>			
			<h3>Frame Works</h3>
				<span>{specificprofile.skillset.frameworks.split(" ")[0]}</span><span>{specificprofile.skillset.frameworks.split(" ")[1]}</span><span>{specificprofile.skillset.frameworks.split(" ")[2]}</span><span>{specificprofile.skillset.frameworks.split(" ")[3]}</span><span>{specificprofile.skillset.frameworks.split(" ")[4]}</span>
				
				</div>
			</section>
		)
	}
}

export default Profile;