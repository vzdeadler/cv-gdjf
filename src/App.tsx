import { HomePage } from './pages/Home/Home'
import './App.scss';
import { Header } from './components/Header/Header';

export const App = (): JSX.Element => {

  return (
    <div className="cvApp">
			<Header />

			<div className="cvApp__content">
				<HomePage />
			</div>
    </div>
  )
};

export default App;
