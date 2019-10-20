import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen.js'
import LoginScreen from './screens/LoginScreen.js'

const RootStack = createStackNavigator({
  //Se crea una "Configuración" llamada LoginScreen
  LoginScreen: {
    //Se le asigna a la opción 'screen' el archivo LoginScreen.js
    screen: LoginScreen
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  }
});

const App = createAppContainer(RootStack);

export default App;
