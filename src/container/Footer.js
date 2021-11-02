import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                       <div className="logo">
                           <img src="logo.png" alt="logo"/>
                           <span>sportslive</span>
                        </div> 
                    </div>                    
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <p className="copy-right">copyright sportslive 2020. all rights reserved</p>
                    </div>
                    <div className="offset-1 col-md-5 col-sm-12">
                        <ul>
                            <li>
                                <Link to="/">career</Link>
                            </li>
                            <li>
                                <Link to="/">contact us</Link>
                            </li>
                            <li>
                                <Link to="/">privacy policy</Link>
                            </li>
                            <li>
                                <Link to="/">terms and conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer