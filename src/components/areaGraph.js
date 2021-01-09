import React from 'react';
import { Card }from 'react-bootstrap';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function AreaGraph(props) {
  
 
 const   chartData= [
        {
            label: "Mon",
            value: "5123"
        },
        {
            label: "Tue",
            value: "4600"
        },
        {
            label: "Wed",
            value: "6007"
        },
        {
            label: "Thu",
            value: "4000"
        },
        {
            label: "Fri",
            value: "6000"
        },
        {
            label: "Sat",
            value: "4000"
        },
        {
            label: "Sun",
            value: "9000"
        }
    ]
    // "chart": {
    //     "caption": "Sales of Liquor",
    //     "subCaption": "Last week",
    
    //     "yAxisName": "Sales (In USD)",
    //     "numberPrefix": "$",
       
    //     "theme": "fusion"
    // },
    const chartConfigs = {
        type: "area2d", 
        renderAt: 'chart-container',
        width: "300", 
        height: "180", 
        dataFormat: "json", 
        dataSource: {
        
          chart: {
         xAxisName: "Day",
         yAxisPosition: "right",
         numberPrefix: "$",
           bgColor:"#FFFFFF",
            theme: "fusion"               
          },
         
          data: chartData
        }
      };
    return (
        <div className="column">
             <Card style={{width:"320px",height:" 200px"}}>
                        <div className="">
                    
                            <ReactFC {...chartConfigs} />
                         
                        </div>

             
        </ Card>
        </div>
    );
}

export default AreaGraph;