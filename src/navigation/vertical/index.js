import store from 'store'

import dalku from './dalku'
import bincab from './bincab'

const navigation = () => {
  if (store.get('module') === 'dalku') {
    return dalku()
  } else if (store.get('module') === 'bincab') {
    return bincab()
  } else {
    return dalku()
  }
}

export default navigation
