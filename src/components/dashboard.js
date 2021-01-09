import {  React ,Component }from 'react';
import '../App.css';
import ProgressBarCard from './progressBarCard';
import WidgetBar from './widgetBar';
import WidgetDoughnut from './widgetDoughnut';
import AreaGraph from './areaGraph'

class Dashboard extends Component{
    render() {
        return(
            <div className="dashboard">
                <div className="columns">
                    <ProgressBarCard className="column"  title="Sales" subtitle="Monthly Goal" value="98.1%" subvalue="+6.9%" description="Yearly Goal" />
                    <WidgetBar  className="column" title="Revenue" subtitle="Total Profit" value="$13,893" subvalue="+11.3%"/>
                    <ProgressBarCard  className="column" title="Clients" subtitle="Subscribed" value="1,232" subvalue="+3.2%" description="Yearly Goaal" />
                </div>
                <div className="columns">
                    <WidgetDoughnut className= "column" title="Total Sales" subtitle="+$985.56" value="$2,595" text="Invoiced" figure="23"figureText="Invoices" />
                    <AreaGraph className="column" />
                </div>
                <div className="columns">
                        <AreaGraph className="column"  />
                        <WidgetDoughnut  className="column" title="User Onboarding" subtitle="Q3 Goal: 8,000 User" value="2,452" subvalue="ONBOARDED" figure="23"figureText="Invoices" />
                </div>

         </div>
        );
    }
}

export default Dashboard;