import { EdaAvatar } from "./entities/Eda/ui/EdaAvatar"
import { Message } from "./entities/Eda/ui/Message"


function App() {

  return (
    <>
      <EdaAvatar />
      <Message text="Some text text text" speed={100} />
    </>
  )
}

export default App
