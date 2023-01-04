// import reactLogo from "./assets/react.svg";
import { Box } from '@material-ui/core'
import { BoardComponent } from './Board'

/*
<a href="https://vitejs.dev" target="_blank">
  <img src="/vite.svg" className="logo" alt="Vite logo" />
</a>
<a href="https://reactjs.org" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
*/

const App = () => (
  <Box>
    <BoardComponent />
  </Box>
)

export default App
