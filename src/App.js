//Created new repository on Github to import this here. 
//Is there another way to import a project to codesandbox?- Caridad
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
