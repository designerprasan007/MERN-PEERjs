

import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';


const App = () =>{
	return(
		<>
			<VideoPlayer />
			<Options>
				<Notifications />
			</Options>
		</>
		)
}


export default App