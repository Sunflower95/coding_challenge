import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faBlog, faCalculator, faChartPie, faClipboardCheck, faCogs, faHandHoldingHeart, faHome, faUser } from "@fortawesome/free-solid-svg-icons";


export const SideBarData =[
    {
        title:"Profile",
        icon: <FontAwesomeIcon icon={faUser} /> ,
        link:"/home"
    },
    {
        title:"My listing",
        icon: <FontAwesomeIcon icon={faClipboardCheck} /> ,
        link:"/home"
    },
    {
        title:"Saved homes",
        icon: <FontAwesomeIcon icon={faHandHoldingHeart} /> ,
        link:"/home"
    },
    {
        title:"Saved search",
        icon: <FontAwesomeIcon icon={faHome} /> ,
        link:"/home"
    },
    {
        title:"Messages",
        icon: <FontAwesomeIcon icon={faCommentAlt} /> ,
        link:"/home"
    },
    {
        title:"Notifications",
        icon: <FontAwesomeIcon icon={faCogs} /> ,
        link:"/home"
    },
    {
        title:"Biling",
        icon: <FontAwesomeIcon icon={faCalculator} /> ,
        link:"/home"
    },
    {
        title:"Analytics",
        icon: <FontAwesomeIcon icon={faChartPie} /> ,
        link:"/home"
    },
    {
        title:"Blog",
        icon: <FontAwesomeIcon icon={faBlog} /> ,
        link:"/home"
    }
]