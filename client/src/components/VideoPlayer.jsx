import {useContext} from 'react'
import {SocketContext} from '../SocketContext'
import './videostyle.css';
const VideoPlayer = () =>{
	const {name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
	return(
		<>
			{stream && (
				<div>
					<p>{name||'myname'}</p>
					<video playsInline muted ref={myVideo} autoPlay />		
				</div>
			)}
			{callAccepted && !callEnded && (
				<div>
					<p>{call.name || 'username'}</p>
					<video playsInline muted ref={userVideo} autoPlay />
				</div>
			)}		
		</>
	)
}


export default VideoPlayer