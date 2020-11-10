import React from 'react'
import axios from 'axios'
import styles from './styles.module.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    float:'left',
    color:'white'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
    
  },
}));



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

class Holidays extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      val: "",
      name:""
    }
  }



  fetchHolidays = (val) => {
    this.setState({

    })
    axios({
      url: 'https://calendarific.com/api/v2/holidays',
      method: "get",

      params: {
        "api_key": "f05c41f30454b52254ef2dcc894b9cc4d4cb2b11",
        "country": val,
         "year": 2020
      }
    })

      .then(res => this.setState({
        data:res.data.response.holidays
      }))
      .catch(err => console.log(err))
  }
  handleChange = (e) => {
    var index = e.nativeEvent.target.selectedIndex;
 // e.nativeEvent.target[index].text
    console.log(e.nativeEvent.target[index].text )
    this.setState({
      val:e.target.value,
      name:e.nativeEvent.target[index].text 
    })
    this.fetchHolidays(e.target.value)
  

  }
  fetchData =(date)=>{
    const[year,month,day]=date.split('-')
    const{val}=this.state
 
    axios({
      url: 'https://calendarific.com/api/v2/holidays',
      method: "get",

      params: {
        "api_key": "f05c41f30454b52254ef2dcc894b9cc4d4cb2b11",
        "country":val,
        "year": year,
        "month":month,
        "day":day
      }
    })
    .then(res => this.setState({
      data:res.data.response.holidays
    }))
    .catch(err=>console.log(err))
  }


  handleDate =(e)=>{
    this.fetchData(e.target.value)
    
  }
  render() {
    const { data } = this.state
    console.log(data[1])
   
   
   
    const { classes } = this.props

    return (
      <>
        <div className={styles.col}>
          <h1 style={{ padding: 0.2, color: "white", marginTop: 1 }}>Check Holidays</h1>

          <select className={styles.select} onChange={(e,index) => this.handleChange(e,index)}>
            <option>Select Country</option>
            <option  value="IN">India</option>
            <option value="US">USA</option>
            <option value="AF">Afghanistan</option>
            <option value="DZ">Algeria</option>
            <option value="AR">Argentina</option>
            <option value="AU">Australia</option>
            <option value="BD">Bangladesh</option>
            <option value="BE">Belgium</option>
            <option value="BT">Bhutan</option>
            <option value="CA">Canada	</option>
            <option value="CN">China</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="GL">Greenland</option>
            <option value="HK">Hong Kong</option>
            <option value="IS">Iceland</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran</option>
            <option value="IQ">Iraq</option>
            <option value="IT">Italy</option>
            <option value="JP">Japan</option>
            <option value="LY">Libya</option>
            <option value="MY">Malaysia</option>
            <option value="MV">Maldives</option>
            <option value="MX">Mexico</option>
            <option value="MM">Myanmar</option>
            <option value="NP">Nepal</option>
            <option value="NZ">New Zealand</option>
            <option value="KP">North Korea</option>
            <option value="OM">Oman</option>
            <option value="NO">Norway</option>
            <option value="PK">Pakistan</option>
            <option value="QA">Qatar</option>
            <option value="RU">Russia</option>
            <option value="SG">Singapore</option>
            <option value="ZA">South Africa</option>
            <option value="KR">South Korea</option>
            <option value="ES">Spain</option>
            <option value="LK">Sri Lanka</option>
            <option value="CH">Switzerland	</option>
            <option value="TH">Thailand</option>
            <option value="TR">Turkey</option>
            <option value="AE">United Arab Emirates</option>
            <option value="GB">United Kingdom	</option>

          </select>
          <div className={styles.cal}>
          <form className={classes.container} noValidate>
            <TextField
            onChange={(e)=>this.handleDate(e)}
              id="date"
              label="Holidays"
              type="date"
              defaultValue="2020-01-01"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
          </div>
        </div>
        {data.length > 0 ?
          <>
            <h1>National Holidays in {this.state.name}</h1>
            <TableContainer component={Paper}>
              <Table align="center" aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="left">Date</StyledTableCell>
                    <StyledTableCell align="left">Type</StyledTableCell>
                    <StyledTableCell align="left">Description</StyledTableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <StyledTableRow key={index + 1}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row["date"]["iso"]}</StyledTableCell>
                      <StyledTableCell align="left">{row.type}</StyledTableCell>
                      <StyledTableCell align="left">{row.description}</StyledTableCell>

                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <div style={{ height: "400px" }}></div>
          </>
          :
          <div style={{ height: "400px" }}>

          </div>
        }



      </>
    )
  }

}
export default withStyles(useStyles)(Holidays)







