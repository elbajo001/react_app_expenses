import React from 'react'
import styled from 'styled-components';
import {ReactComponent as Dot} from './../imagenes/puntos.svg';
import {ReactComponent as Manchita} from './../imagenes/manchita.svg' 


const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        /* fill: rgba(135,182,194, .15); */
        fill: url(#header-shape-gradient);
    }
`;
 
const DotTop = styled(Dot)`
    width: 70px;
    height: 70px;
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;

const DotDown = styled(Dot)`
    width: 70px;
    height: 70px;
    position: fixed;
    z-index: 2;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;

const ManchitaTop = styled(Manchita)`
    width: 250px;
    height: 250px;
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;
 
const Background = () => {
	return (
		<>
			<DotTop />
			<Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="header-shape-gradient" x2="0.35" y2="1">
                        <stop offset="0%" stopColor="#e9c46a" />
                        <stop offset="100%" stopColor="#f4a261" />
                    </linearGradient>
                </defs>
				<path 
					fillOpacity="1"
					d="M0,128L10.9,133.3C21.8,139,44,149,65,176C87.3,203,109,245,131,234.7C152.7,224,175,160,196,144C218.2,128,240,160,262,165.3C283.6,171,305,149,327,122.7C349.1,96,371,64,393,58.7C414.5,53,436,75,458,101.3C480,128,502,160,524,197.3C545.5,235,567,277,589,282.7C610.9,288,633,256,655,245.3C676.4,235,698,245,720,208C741.8,171,764,85,785,69.3C807.3,53,829,107,851,106.7C872.7,107,895,53,916,69.3C938.2,85,960,171,982,186.7C1003.6,203,1025,149,1047,106.7C1069.1,64,1091,32,1113,58.7C1134.5,85,1156,171,1178,197.3C1200,224,1222,192,1244,197.3C1265.5,203,1287,245,1309,250.7C1330.9,256,1353,224,1375,181.3C1396.4,139,1418,85,1429,58.7L1440,32L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z"
				></path>
			</Svg>
			<DotDown />
            <ManchitaTop />
		</>
	);
}
 
export default Background;