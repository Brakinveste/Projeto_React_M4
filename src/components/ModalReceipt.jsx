import React from "react"
import "./ModalReceipt.css"
const ModalReceipt = ({onClose = () =>{}, status, /* cartao */ }) =>{
	let cond
	
	if(status === true /* && cartao === '1111' */ ){
		cond = ''
	}
	else{
		cond = ' não '
	}
	return(
		<div className="modalRec">
			<div className="containerRec">
				<header>
					<span className="header-phrase">Recibo do pagamento</span>
					
				</header>
				<div className="modalRec-content">
					<span>
						O pagamento {cond} foi concluído com sucesso
					</span>
				</div>
				<button className="close-btn" onClick={onClose}>Fechar</button>
			</div>
		</div>
		)
}
export default ModalReceipt