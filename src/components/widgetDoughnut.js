import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import React from 'react';
import { Card , Button  }  from 'react-bootstrap';
import { Donut, DonutValue } from 'react-donut-component' ;
import { faBriefcase, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

function WidgetDoughnut(props){
    return(
        <div className="column">
            <Card style={{width:"150px",height:"200px"}}>
                    <div className="donut">
                        <Button id="briefcase" variant="success">
                             <FontAwesomeIcon  icon={faBriefcase}/>
                        </Button>
                        <div>
                            <div className="donutTitle">
                                {props.title}
                            </div>
                            <div className='donutSubtitle'>
                                {props.subtitle}
                            </div>
                        </div>
                        <div id="ellipses">
                        <FontAwesomeIcon style={{color: "#9EA0A5"}} icon={faEllipsisH} />
                        </div>
  
                    </div>
                    {/* <hr></hr> */}
                    <div className="">
                        {/* <Donut 
                        indicatorColor="#016450"
                        size={40}
                        strokeWidth={5}
                        trackColor="#EAECEE"
                        trackStrokeWidth={5}
                        showValue="false"
                        >
                      <DonutValue  showValue="false">
                           80
                        </DonutValue>
                        </Donut> */}
                         
                          <div>
                              <div className="subscription">
                                  <div className="val">
                                      {props.value}
                                      </div>
                                  <div className="donutsub">
                                      {props.text}
                                      </div>
                                      <hr></hr>
                                      <div className="dough">
                                          {props.figure}
                                      </div>
                                      <div className="donutsub">
                                          {props.figureText}
                                      </div>
                              </div>
                          </div>

                    </div>
                    
            </Card>

        </div>
    );
}

export default WidgetDoughnut;