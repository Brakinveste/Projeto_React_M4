import React from "react"
import "./ModalReceipt.css"
const ModalReceipt = ({onClose = () => {}, isModalRecVisible,}) =>{
	let cond
	
	if(isModalRecVisible === 'cartaovalido' ){
		cond = 'SUCESSO! O pagamento foi executado.'
	}
	else{
		cond = ' ERRO! O pagamento NÃO foi executado. '
	}
	return(
		<div className="modalRec">
			<div className="containerRec">
				<header>
					<span className="header-phrase">Recibo do pagamento</span>
					
				</header>
				<div className="modalRec-content">
					<span>
						 {cond} 
					</span>
				</div>
				<button className="close-btn" onClick={onClose}>Fechar</button>
			</div>
		</div>
		)
}
export default ModalReceipt