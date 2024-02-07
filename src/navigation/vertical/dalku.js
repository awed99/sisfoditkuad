// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FileSign from 'mdi-material-ui/FileSign'
import FileDocumentEditOutline from 'mdi-material-ui/FileDocumentEditOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import FileDocumentMultipleOutline from 'mdi-material-ui/FileDocumentMultipleOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import ViewDashboard from 'mdi-material-ui/ViewDashboard'

import store from 'store'

const navigation = () => {
  return [
    {
      sectionTitle: 'Pimpinan'
    },
    {
      title: 'Dashboard',
      icon: ViewDashboard,
      path: '/'
    },
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/' + store.get('module')
    },
    {
      sectionTitle: 'Operator'
    },
    {
      title: 'Dokumen',
      icon: FileDocumentMultipleOutline,
      path: '/' + store.get('module') + '/dokumen'
    },
    {
      title: 'Dokumen Peraturan',
      icon: FileDocumentEditOutline,
      path: '/' + store.get('module') + '/dokumen-peraturan'
    },
    {
      sectionTitle: 'Master'
    },
    {
      title: 'KUKOTAMA/SATKER',
      icon: FileSign,
      path: '/' + store.get('module') + '/master/kukotama'
    },
    {
      title: 'Pengawasan Pimpinan',
      icon: FileSign,
      path: '/' + store.get('module') + '/master/pengawasan'
    },
    {
      title: 'Hak Akses',
      icon: FileSign,
      path: '/' + store.get('module') + '/master/hak-akses'
    },
    {
      title: 'User',
      icon: FileSign,
      path: '/' + store.get('module') + '/master/user'
    },
    {
      title: 'DALWASKU KUKOTAMA BALAKUS',
      icon: FileSign,
      path: '/' + store.get('module') + '/master/dalwasku'
    }
  ]
}

export default navigation