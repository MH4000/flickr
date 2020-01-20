import React from 'react';
const Images = (props) => {
	console.log(props.id);
	//console.log(props.size);
  let divs = [];
  let children = [];
	if (!props.error && props.width !== undefined){ 
    for (let j = 0; j < props.width.length; j++) {
			for(let i = 0; i<props.width[j].length;i++){
				if(props.width[j][i] == props.size){
					children.push(
          	<div style={{paddingBottom:3 + 'px',paddingTop:2 + 'em'}} className="col-sm-12" key={j}> 
            	<img src={props.img[j][i]} alt=""/> 
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