import React from 'react'
import './Pill.scss';

export default function Pill(props) {
    return (
        <div className="pill">
            {props.data.name}
        </div>
    )
}
