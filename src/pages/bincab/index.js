// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import FileDocumentArrowRightOutline from 'mdi-material-ui/FileDocumentArrowRightOutline'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'
import { styled, useTheme } from '@mui/material/styles'

const Dashboard = () => {
  // ** Hook
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  // Styled component for the triangle shaped background image
  const TriangleImg = styled('img')({
    right: 0,
    bottom: 0,
    height: 170,
    position: 'absolute'
  })

  // Styled component for the trophy image
  const TrophyImg = styled('img')({
    right: 36,
    bottom: 20,
    height: 98,
    position: 'absolute'
  })

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={3}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant='h6'>Angkatan Darat</Typography>
              <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
                782
              </Typography>
              <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
              <TrophyImg
                alt='trophy'
                src='/images/misc/ad_TNI.AD.JPG'
                sx={{
                  width: 76,
                  height: 76,
                  borderRadius: '50%',
                  border: theme => `0.25rem solid ${theme.palette.common.white}`
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant='h6'>Mabes TNI</Typography>
              <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
                2
              </Typography>
              <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
              <TrophyImg
                alt='trophy'
                src='/images/misc/mabes.JPG'
                sx={{
                  width: 76,
                  height: 76,
                  borderRadius: '50%',
                  border: theme => `0.25rem solid ${theme.palette.common.white}`
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant='h6'>Kemhan</Typography>
              <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
                0
              </Typography>
              <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
              <TrophyImg
                alt='trophy'
                src='/images/misc/kemhan.png'
                sx={{
                  width: 76,
                  height: 76,
                  borderRadius: '50%',
                  border: theme => `0.25rem solid ${theme.palette.common.white}`
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card sx={{ position: 'relative' }}>
            <CardContent>
              <Typography variant='h6'>Lain - Lain</Typography>
              <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
                0
              </Typography>
              <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
              <TrophyImg
                alt='trophy'
                src='/images/misc/groups.png'
                sx={{
                  width: 76,
                  height: 76,
                  borderRadius: '50%',
                  border: theme => `0.25rem solid ${theme.palette.common.white}`
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
