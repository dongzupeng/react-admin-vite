import { useState } from 'react'

import { Button } from 'antd'
import { WifiOutlined } from '@ant-design/icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button type='primary'>hello</Button>
      <WifiOutlined style={{fontSize:"20px",color:"#000"}} />
    </div>
  )
}

export default App
