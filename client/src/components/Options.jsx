import {useState, useContext} from 'react';

import {SocketContext} from '../SocketContext'

const Options = ({children}) =>{

	const {me, callAccepted, name,callEnded,  setName, leaveCall, callUser } = useContext(SocketContext)
	const 	[idToCall, setIdTOCall] = useState('')
	return(
		<>
			
			<input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
			<input type="text" placeholder="Name to call"  onChange={(e) => setIdTOCall(e.target.value)} />
			<p>{me}</p>
			{callAccepted && !callEnded ? (
				<button onClick={leaveCall}>End</button>
				):(
					<button onClick={() => callUser(idToCall)}>Call</button>
				)}			

			{children}
		</>
	)
}


export default Options