// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardSupport from 'src/views/cards/CardSupport'

// ** Demo Components Imports
import TableCustomized from 'src/views/tables/TableCustomized'

const MUITable = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            RH Mandiri
          </Link>
        </Typography>
        <Typography variant='body2'>List Data Personel</Typography>
      </Grid>
      <Grid item xs={12}>
        <CardSupport />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='' titleTypographyProps={{ variant: 'h6' }} />
          <TableCustomized />
        </Card>
      </Grid>
    </Grid>
  )
}

export default MUITable
