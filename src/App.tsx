import React from 'react'
import message from './components/message'

function App(): JSX.Element {
  const { msg, def, danger, success, warn } = message()

  return (
    <div className="App">
      {msg}
      <div>
        <button onClick={() => def('默认')}>默认</button>
        <button onClick={() => danger('危险')}>危险</button>
        <button onClick={() => success('安全')}>安全</button>
        <button onClick={() => warn('警告')}>警告</button>
      </div>
    </div>
  )
}

export default App
