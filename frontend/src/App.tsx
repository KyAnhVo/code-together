import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Editor from '@monaco-editor/react'
import './index.css'


function App(): JSX.Element {
  const [session_id, change_session_id] = useState(1);

  return (
    <>
      {
        session_id === -1 ?
          <Menu change_session_id={change_session_id}/> :
          <Session session_id={session_id} change_session_id={change_session_id}/>
      }
    </>
  )
}

function Session({ session_id, change_session_id}:
                 { session_id: number, change_session_id: (id: number) => void })
                   : JSX.Element {
  const [updated, change_updated] = useState(false);
  return (
    <div>
      <p>Session id: {session_id}</p>
      <button onClick={ () => change_session_id(-1) }>
        Go back to main page
      </button>
      <Editor
        height="100vh"               // full viewport height
        width="100vw"                // full viewport width
        defaultLanguage="javascript" // pick your default
        defaultValue="// Start coding..."
        theme="vs-dark"              // or "light"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          automaticLayout: true,     // resize with window
        }}
      />
    </div>
  )
}

function Menu({ change_session_id }: { change_session_id: (id: number) => void }): JSX.Element {
  return (
    <div>
      <button onClick={ () => change_session_id(1) }>
        Create Session
      </button>
      <input type="url" />
      <button>Join session</button>
    </div>
  )
}

export default App
