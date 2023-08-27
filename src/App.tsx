import { SafeAreaView } from 'react-native';
import Login from './modules/login';
import { Provider } from 'react-redux';
import store from './Redux-store';
import GlobalModal from './shared/components/modal/global/GlobalModal';

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <GlobalModal />
        <Login />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
