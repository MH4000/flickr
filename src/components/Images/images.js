import React from 'react';
const Images = (props) => {
	let divs = [];
	let children = [];
	if (!props.error && props.img !== undefined){ 
		for (let j = 0; j < props.width.length; j++) {
			for(let i = 0; i<props.width[j].length;i++){
				if(props.width[j][i] === props.size){
					children.push(
						<div style={{paddingBottom:3 + 'px',paddingTop:2 + 'em'}} className="col-sm-12" key={j}>
							<a href={props.link[j][i]}>
							<img src={props.img[j][i]} alt=""/> 
							</a>
          	</div>                        
					)
				}
    	}
		}divs.push(<div className="row" key={children}>{children} </div>)
	}else{
		divs = props.error;
	}
	return(
		<div className="container">
			{divs}
		</div>
	)
}
export default Images;
