// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import Pagination from '@mui/material/Pagination'
import Grid from '@mui/material/Grid'
import store from 'store'
import { useRouter } from 'next/router'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.common.black
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },

  // hide last border
  '&:last-of-type td, &:last-of-type th': {
    border: 0
  }
}))

const createData = (name, nrp, pangkat, corps, tmtpangkat, jabatan, tmtjabatan) => {
  return { name, nrp, pangkat, corps, tmtpangkat, jabatan, tmtjabatan }
}

const rows = [
  createData('MARULI SIMANJUNTAK, M.Sc', 1920030770270, 'Jendral TNI', 'Inf', '29-11-2023', 'KASAD', '29-11-2023'),
  createData('ANDI TJARWANDI, S.E.,M.M', 11940036020172, 'Brigjen TNI', 'Cku', '26-07-2023', 'DIRKUAD', '26-06-2023')

]

const handleCellClick = (e) => {
  console.log(e.target.textContent);
}

const TableCustomized = () => {
  const router = useRouter()
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label=''>
        <TableHead>
          <TableRow>
            <StyledTableCell>NAMA</StyledTableCell>
            <StyledTableCell align='center'>NRP/NIP</StyledTableCell>
            <StyledTableCell align='center'>PANGKAT</StyledTableCell>
            <StyledTableCell align='center'>CORPS/KECABANGAN</StyledTableCell>
            <StyledTableCell align='center'>TMT PANGKAT</StyledTableCell>
            <StyledTableCell align='center'>JABATAN</StyledTableCell>
            <StyledTableCell align='center'>TMT JABATAN</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name} onClick={() => {
              router.push('/bincab/rh-mandiri/rh-detail')
            }}>
              <StyledTableCell component='th' scope='row' pointer={true}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='center'>{row.nrp}</StyledTableCell>
              <StyledTableCell align='center'>{row.pangkat}</StyledTableCell>
              <StyledTableCell align='center'>{row.corps}</StyledTableCell>
              <StyledTableCell align='center'>
                {row.tmtpangkat}
              </StyledTableCell>
              <StyledTableCell align='center'>{row.jabatan}</StyledTableCell>
              <StyledTableCell align='center'>{row.tmtjabatan}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Grid sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pagination count={10} color='secondary' alignItems="center"  sx={{ p:4}}/>
      </Grid>
    </TableContainer>
  )
}

export default TableCustomized
