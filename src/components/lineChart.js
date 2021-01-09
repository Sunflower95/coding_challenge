import React  from 'react';
import { Line } from 'react-chart-2';

function LineChart() {

    const data = {
       labels: ['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'],
        datasets:[
            {
                label:'Sales',
                data:[9,6,3,6,3,6,9]
            }
        ]
    }
    return(
       <Line  data={data }/>
    )
}

export default LineChart;