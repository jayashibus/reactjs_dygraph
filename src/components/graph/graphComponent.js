import React, { Component } from 'react';
import Dygraph from 'dygraphs';
import myData from '../../mockdata/sample-data.json';
import '../../../node_modules/dygraphs/dist/dygraph.min.css'

import './graphComponent.css';

class DyGraph extends Component {

    constructor(props) {
        super(props);
        // mock json data for graph
        const messages = myData;

        var data = "";
        messages.forEach((response) => {
            data += response[0] + ',' + response[1] + "\n";
        });

        new Dygraph('graphContainer', data, {
            title: 'Pressure Transient(s)',
            titleHeight: 32,
            ylabel: 'Pressure (meters)',
            xlabel: 'Time',
            gridLineWidth: '0.1',
            width: 700,
            height: 300,
            connectSeparatedPoints: true,
            axes: { "x": { "axisLabelFontSize": 9 }, "y": { "axisLabelFontSize": 9 } },
            labels: ['Date', 'Tampines Ave10 (Stn 40)'],

        });
    }

    render() {
        return <div></div>
    }
}
export default DyGraph;