import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens'

registerScreens()

export default class Nav {
  constructor() {
    this._initApp()
  }

  _initApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          labels: 'Feeds',
          screen: 'Instacat.FeedsScreen',
          title: 'Instacat'
        },
        {
          labels: 'SecondScreen',
          screen: 'Instacat.SecondScreen',
          title: 'Second'
        }
      ]
    })
  }
}
