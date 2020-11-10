import React from 'react'
import axios from 'axios'
import styles from './styles.module.css'





class Countries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            country: []
        }
    }
    componentDidMount() {
        axios({
            url: 'https://calendarific.com/api/v2/languages',
            method: "get",

            params: {
                "api_key": "f05c41f30454b52254ef2dcc894b9cc4d4cb2b11"

            }
        })
            .then(res => this.setState({
                country: [this.state.country, ...res.data.response.languages]
            })).catch(err => console.log(err))

    }
    render() {

        const { country } = this.state
        console.log(country)
        return (
            <>
                <div>
                    <div className={styles.info}>
                        <div className={styles.head}> Country Name</div>
                        <div className={styles.head}>Code </div>
                        <div className={styles.head}> Native Name</div>
                    </div>
                    {country.map((item) => (
                        <div className={styles.info}>
                            <div>{item.name}</div>
                            <div>{item.code}</div>
                            <div>{item.nativeName}</div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}
export default Countries