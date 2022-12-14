import React from "react"
import "./User.css"
const User = ({person, setSelectedUser = () =>{}, setSelectedId = () =>{}}) =>{
	function setData(){
		setSelectedId(person.id)
		setSelectedUser(person.name)
	}
	return(
		<div className="user-container">
			<div className="user-info">
				<div className="profile-pic">
					<img src={person.img} alt="Imagem de perfil"/>
				</div>

				<div className="profile-text"> 
					<h3>{person.name}</h3>
					<p>ID: {person.id} </p>
					<p>Usuário: {person.username}</p>
				</div>
			</div>

			<div className="button-container">
				{}
				<button className="pay-btn" onClick={() => setData()}>Pagar</button>
			</div>
		</div>
		)
}
export default User
