import React, { Component } from 'react'
import TopProfile from '../../components/Top-Profile/TopProfile';
import './Jobs.scss';
import NearbyJobs from '../../components/Nearby-Jobs/NearbyJobs';
import ByPreferenceJobs from '../../components/By-Preference-Jobs/ByPreferenceJobs';
import ByCityJobs from '../../components/By-City-Jobs/ByCityJobs';
import ByCategoryJobs from '../../components/By-Category-Jobs/ByCategoryJobs';
import Ad from '../../components/Ad/Ad';
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar';

export default class Jobs extends Component {
    render() {
        return (
            <div className="jobs">
                <TopProfile />
                <NearbyJobs />
                <ByCategoryJobs />
                <ByPreferenceJobs />
                <Ad />
                <ByCityJobs />
                <BottomNavbar />
            </div>
        )
    }
}
