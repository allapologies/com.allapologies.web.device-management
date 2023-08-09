import { Providers } from './components/Providerts.tsx';
import { DevicesList } from './components/DevicesList.tsx';
import { FlowRenderer } from './components/FlowRenderer.tsx';

function App() {
  return (
    <Providers>
      <DevicesList />
      <FlowRenderer />
    </Providers>
  )
}

export default App
