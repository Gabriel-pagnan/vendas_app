import { Provider } from 'react-redux';
import store from './Redux-store';
import GlobalModal from './shared/components/modal/global/GlobalModal';
import Navigation from './routes/Navigation';

const App = () => {

  return (
    <Provider store={store}>
        <GlobalModal />
        <Navigation />
    </Provider>
  );
};

export default App;
