import PropTypes from "prop-types"
import React from 'react';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

/**
 * chart about daily target percentage of one user
 * @param {Object} dataTodayScore - props of component parent Profile / infos about daily target percentage
 * @returns {JSX} - React component
 */
const PieChartRender = ({ dataTodayScore }) => {

    // Error in JSON + in backend (score/todayScore)
    const todayScore = dataTodayScore?.score || dataTodayScore?.todayScore

    const delta = 100 - (todayScore * 100)

    const score = [
        { name: "full", value: todayScore * 100, fill: "#FF0000" },
        { name: "empty", value: delta, fill: "white" }
    ]

    const inside = [{
        name: 'inside', value: 100
    }]

    return (
        <div className='PieChart'>
            <span className='title-chart'>Score</span>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart >
                    <Pie data={inside} dataKey="value" innerRadius={0} outerRadius={80} fill="white" />
                    <Pie data={score} dataKey="value" innerRadius={69} outerRadius={80} startAngle={90} endAngle={500} cornerRadius="50%" />
                </PieChart>
            </ResponsiveContainer>
            <span className='legend-number'>{todayScore * 100}% </span>
            <p className='legend-text'>de votre <br />
                objectif</p>
        </div>
    )
};

PieChartRender.propTypes = {
    dataTodayScore: PropTypes.object
}

export default PieChartRender;