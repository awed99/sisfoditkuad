import store from 'store'

import dalku from './dalku'
import bincab from './bincab'
import binum from './binum'
import irdit from './irdit'
import pusdikku from './pusdikku'
import bindiklat from './bindiklat'

const navigation = () => {
  if (store.get('module') === 'dalku') {
    return dalku()
  } else if (store.get('module') === 'bincab') {
    return bincab()
  } else if (store.get('module') === 'binum') {
    return binum()
  } else if (store.get('module') === 'irdit') {
    return irdit()
  } else if (store.get('module') === 'pusdikku') {
    return pusdikku()
  } else if (store.get('module') === 'bindiklat') {
    return bindiklat()
  } else {
    return dalku()
  }
}

export default navigation
