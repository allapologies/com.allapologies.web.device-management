import { Providers } from './components/common/Providers';
import { DevicesList } from './components/DevicesList';
import { FlowRenderer } from './components/FlowRenderer';

function App() {
  return (
    <Providers>
      <DevicesList />
      <FlowRenderer />
    </Providers>
  );
}

export default App;
