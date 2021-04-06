import {useContext} from 'react';
import {SocketContext} from '../SocketContext'

const Notifications = () =>{
	const {AnswerCall, call, callAccepted}  = useContext(SocketContext);
	return(
		<>
			{call.isReceivingCall && !callAccepted && (
				<div>
					<h1>{call.name} is calling</h1>
					<button onClick={AnswerCall}>Answer</button>
				</div>		
			)}
		</>
	)
}


export default Notifications