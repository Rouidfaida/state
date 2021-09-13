import React from "react";


/**
 *
 */
class App extends React.Component {
  state = {
    person: {
      fullName: "Rouid Faida",
      bio: "j'aime beaucoup la musique",
      imgSrc: "./profilephotofaida.png",
      profession: "Expert auditeur en sécurité informatique",
      show: "true",
    },
    cont:0,
    show : true,

  };
  handleShowPerson = () => {
    this.setState({show:!this.state.show ,cont:0});
  }
// increment=()=>{
// this.setState({cont:this.state.cont+1})
// }
componentDidMount(){
setInterval(() => {
this.setState({cont:this.state.cont+1})}, 1000);

}
  render() {
    return (
      <div>
      
     
    
{
this.state.show?

<div
style={{
  // backgroundImage: "linear-gradient(to right, blue, aqua)",
  width: 700,
  height: 500,
  backgroundColor: "aqua",
  marginLeft: "500px",
  marginTop: "50px",
  borderRadius: 20,
}}
>


<h1
  style={{
    fontFamily: "serif",
    fontStyle: "italic",
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  }}
>
  {" "}
Name :  {this.state.person.fullName}{" "}
</h1>
<img
  style={{
    width: 200,
    height: 200,
    borderRadius: 120,
    marginLeft: 220,
  }}
  src={this.state.person.imgSrc}
  alt=""
/>
<h3  style={{
    fontFamily: "serif",
    fontStyle: "italic",
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  }}> Bio : {this.state.person.bio}</h3>
<h3 style={{
    fontFamily: "serif",
    fontStyle: "italic",
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  }}>Profession : {this.state.person.profession}</h3>
    <button 
 style={{
  fontFamily: "serif",
  fontStyle: "italic",
  color: "blue",
  fontSize: 30,
  fontWeight: "bold",
  width:120,
  marginTop:50,
  marginLeft:300,
  borderRadius:50,
  border:"none", backgroundColor:"pink"
}}
>{this.state.cont}</button>
         
</div>:null

}
<button  style={{
	borderRadius: "20px",
	lineHeight: "2.5rem",
  height:50,
  width:250,
	fontSize: "26px",
	fontWeight: 600,
  border:" 1px solid #012880",
  color:"blue",
  marginLeft:700,
  marginTop:70,}}
onClick={this.handleShowPerson}>{this.state.show?"Hide":"Show"}
            </button>
      </div>
    );
  }
}

// #endregion

export default App;
