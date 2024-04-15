import React from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

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

// import BackgroundVideo from 'public/videos/bg.mp4'

// ** Layout Import
import HomeLayout from 'src/@core/layouts/HomeLayout'

import store from 'store'

const Dashboard = props => {
  const [bgVid, setBgVid] = React.useState('/')

  React.useEffect(() => {
    setTimeout(() => setBgVid(window.location.origin + '/videos/bg.mp4'), 1000)
  }, [])

  // ** Hooks
  const router = useRouter()

  return (
    <>
      <Box className='video-player bg-green'>
        <video className='video-player' src={bgVid} loop={true} autoPlay={true} />
      </Box>

      <Box
        sx={{
          position: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100
        }}
      >
        <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', maxWidth: '1200px' }}>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            onClick={() => {
              store.set('module', 'bincab')
              router.push('/bincab')
            }}
          >
            <CardStatisticsVerticalComponent
              stats='BINCAB'
              icon={<img src='/images/logo.png' width={45} />}
              color='success'
              trendNumber='Enabled'
              title='SUBDIT'
              subtitle='SISFO DITKU AD'
              sx={{ backgroundColor: '#90f1ef' }}
              pointer={true}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            onClick={() => {
              store.set('module', 'binum')
              router.push('/binum')
            }}
          >
            <CardStatisticsVerticalComponent
              stats='BINUM'
              title='SUBDIT'
              color='success'
              trendNumber='Enabled'
              subtitle='SISFO DITKU AD'
              icon={<img src='/images/logo.png' width={45} />}
              sx={{ backgroundColor: '#ffd6e0' }}
              pointer={true}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            onClick={() => {
              store.set('module', 'irdit')
              router.push('/irdit')
            }}
          >
            <CardStatisticsVerticalComponent
              stats='IRDIT'
              color='success'
              trendNumber='Enabled'
              title='SUBDIT'
              subtitle='SISFO DITKU AD'
              icon={<img src='/images/logo.png' width={45} />}
              sx={{ backgroundColor: '#ffef9f' }}
              pointer={true}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            onClick={() => {
              store.set('module', 'dalku')
              router.push('/dalku')
            }}
          >
            <CardStatisticsVerticalComponent
              stats='DALKU'
              color='success'
              trendNumber='Enabled'
              subtitle='SISFO DITKU AD'
              title='SUBDIT'
              icon={<img src='/images/logo.png' width={45} />}
              sx={{ backgroundColor: '#c1fba4' }}
              pointer={true}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            onClick={() => {
              store.set('module', 'pusdikku')
              router.push('/pusdikku')
            }}
          >
            <CardStatisticsVerticalComponent
              stats='PUSDIKKU'
              icon={<img src='/images/logo.png' width={45} />}
              trendNumber='Enabled'
              title='SUBDIT'
              color='success'
              subtitle='SISFO DITKU AD'
              sx={{ backgroundColor: '#daac99' }}
              pointer={true}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            onClick={() => {
              store.set('module', 'bindiklat')
              router.push('/bindiklat')
            }}
          >
            <CardStatisticsVerticalComponent
              stats='BINDIKLAT'
              title='SUBDIT'
              color='success'
              trendNumber='Enabled'
              subtitle='SISFO DITKU AD'
              icon={<img src='/images/logo.png' width={45} />}
              sx={{ backgroundColor: '#b0c4b1' }}
              pointer={true}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} onClick={() => router.push('/')}>
            <CardStatisticsVerticalComponent
              stats='BANNISKU'
              icon={<img src='/images/logo.png' width={45} />}
              sx={{ backgroundColor: '#7bf1a8' }}
              color='secondary'
              trendNumber='Disabled'
              trend='negative'
              title='SUBDIT'
              subtitle='SISFO DITKU AD'

              // pointer={true}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} onClick={() => router.push('/')}>
            <CardStatisticsVerticalComponent
              stats='COKLIT'
              trendNumber='Disabled'
              title='SUBDIT'
              trend='negative'
              color='secondary'
              subtitle='SISFO DITKU AD'
              icon={<img src='/images/logo.png' width={45} />}
              sx={{ backgroundColor: '#b8b8ff' }}

              // pointer={true}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} onClick={() => router.push('/')}>
            <CardStatisticsVerticalComponent
              stats='MINBIA'
              color='secondary'
              trendNumber='Disabled'
              trend='negative'
              subtitle='SISFO DITKU AD'
              title='SUBDIT'
              icon={<img src='/images/logo.png' width={45} />}
              sx={{ backgroundColor: '#d4a373' }}

              // pointer={true}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4} onClick={() => router.push('/')}>
            <CardStatisticsVerticalComponent
              stats='AKUNTANSI'
              icon={<img src='/images/logo.png' width={45} />}
              trendNumber='Disabled'
              trend='negative'
              title='SUBDIT'
              color='secondary'
              subtitle='SISFO DITKU AD'
              sx={{ backgroundColor: '#ccdbfd' }}

              // pointer={true}
            />
          </Grid>
        </Grid>
        {/* <source src={BackgroundVideo} type='video/mp4' /> */}
        {/* </video> */}

        {/* <BgVideo src='/videos/bg.mp4' loop autoPlay /> */}
      </Box>
    </>
  )
}

Dashboard.getLayout = page => <HomeLayout>{page}</HomeLayout>

export default Dashboard
