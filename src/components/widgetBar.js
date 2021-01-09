import React from 'react';
import { Card } from 'react-bootstrap';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function WidgetBar(props){
    // Preparing the chart data
const chartData = [
    {
     
      value: "90",
      color:"#FF8433"
    },
    {
     
      value: "60",
      color:"#FF8433"
    },
    {
     
      value: "20",
      color:"#FF8433"
    },
    {
   
      value: "120",
      color:"#FF8433"
    },
    {
     
      value: "100",
      color:"#FF8433"
    },
    {
     
      value: "60",
      color:"#FF8433"
    },
    {
      
      value: "90",
      color:"#FF8433"
    }
    
  ];

  // Create a JSON object to store the chart configurations
const chartConfigs = {
    type: "column2d", // The chart type
    width: "140", // Width of the chart
    height: "50", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
         
       bgColor:"#FFFFFF",
        theme: "fusion"                 //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: chartData
    }
  };
    return(
        <div className="column">
            <Card style={{ width:"150px",height:" 80px"}}>
                        <div className="progressWrap">
                        <div className="progressTitle">
                            {props.title}
                        </div>
                        <div className="progressSubtitle">
                            {props.subtitle}
                        </div>
                        <div className="progressValue">
                            <div className="value">
                                {props.value}
                            </div>
                            <div className="subvalue">
                                {props.subvalue}
                            </div>
                        </div>
                        {/* <ReactFC {...chartConfigs} /> */}
                    </div>
        </ Card>
        </div>
    );
}

export default WidgetBar;