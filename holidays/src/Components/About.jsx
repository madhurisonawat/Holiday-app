import React from 'react'
import axios from 'axios'
import styles from './styles.module.css'


class CountriesDetails extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            details:[],
            expanded:false
        }
    }
    
    
    componentDidMount() {
        axios({
            url: 'https://calendarific.com/api/v2/countries',
            method: "get",

            params: {
                "api_key": "f05c41f30454b52254ef2dcc894b9cc4d4cb2b11"

            }
        })
            .then(res => this.setState({
                details:[this.state.details,...res.data.response.countries]
            })
            ).catch(err => console.log(err))

    }
   
    render(){
        const {details}=this.state
       
        
       
    
        
      
      
        return(
            <>  
            <div>
                {details.map((item)=>(
                    <div className={styles.div}>
                        <div> Country Name: {item.country_name}</div>
                        <div> Languages Spoken: {item.supported_languages}</div>
                        <div> Total Holidays: {item.total_holidays}</div>
                    </div>
                ))}
            </div> 
    
     
    
            </>
        )
    }
   
}
export default CountriesDetails
