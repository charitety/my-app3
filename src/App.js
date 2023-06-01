import { RedStripe } from './RedStripe';
import './App.css';
import { BlueStripe } from './BlueStripe';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { GreenStripe } from './GreenStripe';

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      
      <QueryClientProvider client={queryClient}> 
      <RecoilRoot><RedStripe />
      <BlueStripe />
      <GreenStripe></GreenStripe>
      </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
}

export default App;
