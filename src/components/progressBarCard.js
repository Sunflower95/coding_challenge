import React from 'react';
import { ProgressBar,  Card } from 'react-bootstrap';


function ProgressBarCard(props){
    return(
        <div className="column">
            <Card style={{width:"150px",height:" 80px"}}>
            <div className="progressWrap">
                <div id="progress">
                <div className="progressTitle">
                        {props.title}
                    </div>
                    <div className="progressSubtitle">
                        {props.subtitle}
                    </div>
                </div>
                   
                    <div className="progressValue">
                        <div className="value">
                            {props.value}
                        </div>
                        <div className="subvalue">
                            {props.subvalue}
                        </div>
                      </div>
                      <div>
                            <ProgressBar  variant="success" style={{width:"130px",height:"5px"}} now={98.1} />
                            <div className="description">
                                    {props.description}
                                </div>
                      </div>
                  

                </div>
            </Card>
        </div>
     
    )
}

export default ProgressBarCard;