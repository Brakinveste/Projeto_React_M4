import React, {useState} from "react"
import "./ModalForm.css"
import axios from "axios"
import CurrencyInput from "react-currency-masked-input"
import ModalReceipt from "./ModalReceipt"
const ModalForm = ({selectedUser, setSelectedUser = () => {}, selectedId, setIsModalRecVisible, setSelectedId = () =>{}}) =>{
	
	
	let cards = [
		// valid card
		{
		  card_number: '1111111111111111',
		  cvv: 789,
		  expiry_date: '01/18',
		},
		// invalid card
		{
		  card_number: '4111111111111234',
		  cvv: 123,
		  expiry_date: '01/20',
		},
	  ];
	  

	
	function testsInputs(e){
		e.preventDefault()
		if(document.getElementById('payment-money').value === ''){
			alert('Insira algum valor para o pagamento')
		} else{
			let i = document.getElementById('payment-card').value
			let data = {
				card_number: cards[i].card_number,
				cvv: cards[i].cvv,
				expiry_date: cards[i].expiry_date,
				destination_user_id: selectedId,
				value: document.getElementById('payment-money').value
			}
			const addPost = axios.post('https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989', data)
			.then(() => {
				setIsModalRecVisible('cartaovalido')

				if(cards[i].card_number === '1111111111111111')
					setIsModalRecVisible('cartaovalido')
				else {
					setIsModalRecVisible('cartaoinvalido')
				}
				//setTimeout(() => setIsModalRecVisible(false), 1000)
				setTimeout(() =>setSelectedUser(''), 100)
				//setTimeout(() =>setSelectedId(''), 4000)

			})
			.catch(()=>{
				
				setIsModalRecVisible(true)
				})
		}
	}
	function setDataClose(){
		setSelectedUser('')
		setSelectedId('')
	}
	return(
		<div className="modal">
			<div className= "container">
				<header>
						 <span className="phrase">
						 	Pagamento para <span className="name">{selectedUser}</span>
						 </span>
						 <button className="header-btn" onClick={() => setDataClose()}>x</button>
				</header>
				<div>
					<form onSubmit={(events) => testsInputs(events)}>
						<div className="money">
							<CurrencyInput id="payment-money" name="money" placeholder="R$ 0,00"/>
						</div>
						<div className ="card">
								<select id="payment-card">
									{cards.map((card,n) =>(
										<option value={n}>Cart??o com final {card.card_number.slice(12)}</option>
									))}
								</select>
						</div>
						<div className="pay-button">
							<button type="submit" className="btn">Pagar</button>
							
						</div>
					</form>
				</div>
			</div>
		</div>
		)
}
export default ModalForm
