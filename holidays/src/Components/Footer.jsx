import React from 'react'
import styled from 'styled-components'
import details from './FooterLinks'
import { Link } from 'react-router-dom'

const FooterConatiner = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
background-color: #0a0a0a
;
`;
const FooterSection = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
text-align:left;

>*{
    flex:1
};
.title{
    font-weight:700;
    margin-bottom:5px
}`;
const FooterDown = styled.div`
float:left;
padding:10px;

>div{
color:white;
    float:left;
    width:20%;
   
  
 
}
`

export default function Footer() {
    return (
        <>
            <FooterConatiner>
                {
                    details?.map((item) => (
                        <FooterSection key={item.title}>
                            <div style={{ color: "yellow" }}>{item.title}</div>
                            {
                                item.links.map((link) => (
                                    <Link style={{ color: "whiteSmoke", textDecoration: "none" }} to={link.url} key={link.url}>{link.title}</Link>
                                ))
                            }
                        </FooterSection>

                    ))


                }
                <FooterSection>
                    <div style={{ color: "whiteSmoke", padding: "20px", fontSize: "24px" }}>subscribe to newsletter</div>
                </FooterSection>


            </FooterConatiner>
            <FooterConatiner>
                <FooterDown>
                    <div>
                        <img width="100px" src="https://originserver-static1-uat.pvrcinemas.com/images/panacea.png" alt="tag" />
                    </div>
                    <div>
                        <img width="100px" src="https://originserver-static1-uat.pvrcinemas.com/images/nortan.png" alt="tag" />
                    </div>
                    <div>PRIVACY POLICY</div>
                    <div>TERMS & CONDITION</div>
                    <div>TERMS OF USE</div>
                </FooterDown>
                <FooterDown>
                    <div style={{margin:5}}>

                        <img width="50px" src="/insta.svg" alt="apple" />
                    </div>
                    <div style={{margin:5}}>
                        <img width="50px" src="/wtsapp.png" alt="apple" />
                    </div>
                    <div style={{margin:5}}>
                        <img width="50px" src="/linked.svg" alt="apple" />
                    </div>
                    <div style={{margin:5}}>
                        <img width="50px" src="/fb1.svg" alt="apple" />

                    </div>
                    
                </FooterDown>

            </FooterConatiner>
            <FooterConatiner>
                <div style={{ color: "whitesmoke" }}>
                    COPYRIGHT © 2020 PVR LTD. ALL RIGHTS RESERVED.
                </div>
            </FooterConatiner>
        </>
    )
}
