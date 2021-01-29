import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/screen/SearchScreen";
import ResultsShowScreen from './src/screen/ResultsShowScreen'

const navigator = createStackNavigator(
  {
    screen: SearchScreen,
    ResultsShow : ResultsShowScreen,

  },
  {
    initialRouteParams: 'Search',
  },

);

export default createAppContainer(navigator)