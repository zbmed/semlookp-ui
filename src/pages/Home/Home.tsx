import React from "react";
import {SearchWidget} from "../../components/Widget/SearchWidget/SearchWidget"
import {EuiFlexItem} from "@elastic/eui";
import './Home.css'


export default function Home (){
    return(
        <div>
            <div className="searchbar">
            <h1>Welcome to the Terminology Service</h1>
            <EuiFlexItem className="searchBar">
            <SearchWidget api={'https://semanticlookup.zbmed.de/ols/api/'}/>
            </EuiFlexItem>
            </div>
        </div>
    )
}

