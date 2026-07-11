import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewRegistration = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(

            (response) => {
                changeData(response.data)
            }

        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {
                                data.map
                                    (
                                        (value, index) => {
                                            return (
                                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                                    <div className="card">

                                                        <div className="card-body">
                                                            <h5 className="card-title">Details: </h5>
                                                            <b>Registration Number: </b><img src={value.regNo} className="card-img-top" style={{ height: "220px", width: "100%" }} alt="..." />
                                                            <p><b>Full Name: </b>{value.fullName}</p>
                                                            <p><b>Branch: </b>{value.branch}</p>
                                                            <p><b>SSLC Mark(%): </b>{value.sslcMark}</p>
                                                            <p><b>UG Mark(%): </b>{value.ugMark}</p>
                                                            <p><b>PG Mark(%): </b>{value.pgMark}</p>
                                                            <a href="#" className="btn btn-success">View</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        }
                                    )
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>
  )
}

export default ViewRegistration