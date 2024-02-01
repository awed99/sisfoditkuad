// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Next Import
import { useRouter } from 'next/router'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

// ** Layout Import
import HomeLayout from 'src/@core/layouts/HomeLayout'

import store from 'store'

const Dashboard = props => {
  // ** Hooks
  const router = useRouter()

  return (
    <ApexChartWrapper sx={{ mt: -30 }}>
      <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={3} onClick={() => router.push('/')}>
          <CardStatisticsVerticalComponent
            stats='BINCAB'
            icon={<img src='/images/logo.png' width={45} />}
            color='success'
            trendNumber='Disable'
            trend='negative'
            title='SUBDIT'
            subtitle='SISFO DITKU AD'
            sx={{ backgroundColor: '#90f1ef' }}

            // pointer={true}
          />
        </Grid>
        <Grid item xs={3} onClick={() => router.push('/')}>
          <CardStatisticsVerticalComponent
            stats='BINUM'
            title='SUBDIT'
            trend='negative'
            color='error'
            trendNumber='Disable'
            subtitle='SISFO DITKU AD'
            icon={<img src='/images/logo.png' width={45} />}
            sx={{ backgroundColor: '#ffd6e0' }}

            // pointer={true}
          />
        </Grid>
        <Grid item xs={3} onClick={() => router.push('/')}>
          <CardStatisticsVerticalComponent
            stats='IRDIT'
            color='warning'
            trendNumber='Disable'
            trend='negative'
            title='SUBDIT'
            subtitle='SISFO DITKU AD'
            icon={<img src='/images/logo.png' width={45} />}
            sx={{ backgroundColor: '#ffef9f' }}

            // pointer={true}
          />
        </Grid>
        <Grid
          item
          xs={3}
          onClick={() => {
            store.set('module', 'dalku')
            router.push('/dalku')
          }}
        >
          <CardStatisticsVerticalComponent
            stats='DALKU'
            color='success'
            trendNumber='Enable'
            subtitle='SISFO DITKU AD'
            title='SUBDIT'
            icon={<img src='/images/logo.png' width={45} />}
            sx={{ backgroundColor: '#c1fba4' }}
            pointer={true}
          />
        </Grid>

        <Grid item xs={3} onClick={() => router.push('/')}>
          <CardStatisticsVerticalComponent
            stats='BANNISKU'
            icon={<img src='/images/logo.png' width={45} />}
            sx={{ backgroundColor: '#7bf1a8' }}
            color='success'
            trendNumber='Disable'
            trend='negative'
            title='SUBDIT'
            subtitle='SISFO DITKU AD'

            // pointer={true}
          />
        </Grid>
        <Grid item xs={3} onClick={() => router.push('/')}>
          <CardStatisticsVerticalComponent
            stats='BINDIKLAT'
            title='SUBDIT'
            trend='negative'
            color='secondary'
            trendNumber='Disable'
            subtitle='SISFO DITKU AD'
            icon={<img src='/images/logo.png' width={45} />}
            sx={{ backgroundColor: '#b0c4b1' }}

            // pointer={true}
          />
        </Grid>
        <Grid item xs={3} onClick={() => router.push('/')}>
          <CardStatisticsVerticalComponent
            stats='COKLIT'
            trendNumber='Disable'
            title='SUBDIT'
            trend='negative'
            subtitle='SISFO DITKU AD'
            icon={<img src='/images/logo.png' width={45} />}
            sx={{ backgroundColor: '#b8b8ff' }}

            // pointer={true}
          />
        </Grid>
        <Grid item xs={3} onClick={() => router.push('/')}>
          <CardStatisticsVerticalComponent
            stats='MINBIA'
            color='warning'
            trendNumber='Disable'
            trend='negative'
            subtitle='SISFO DITKU AD'
            title='SUBDIT'
            icon={<img src='/images/logo.png' width={45} />}
            sx={{ backgroundColor: '#d4a373' }}

            // pointer={true}
          />
        </Grid>

        <Grid item xs={3} onClick={() => router.push('/')}>
          <CardStatisticsVerticalComponent
            stats='AKUNTANSI'
            icon={<img src='/images/logo.png' width={45} />}
            // color='secondary'
            trendNumber='Disable'
            trend='negative'
            title='SUBDIT'
            subtitle='SISFO DITKU AD'
            sx={{ backgroundColor: '#ccdbfd' }}

            // pointer={true}
          />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

Dashboard.getLayout = page => <HomeLayout>{page}</HomeLayout>

export default Dashboard
