import React from 'react';
const Form = (props) => {
	//console.log(props);
  return (
		<form>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2>Select size of photos (in pixels) you want them to be displayed</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-2">
							<button type="button" className="btn btn-primary" id="sq" onClick={(e) => {props.setSize(75)}}>Square</button>
						</div>
						<div className="col-md-2">
							<button type="button" className="btn btn-primary" id="lg-sq" onClick={(e) => {props.setSize(150)}}>Large Square</button>
						</div>
						<div className="col-md-2">
							<button type="button" className="btn btn-primary" id="thumb" onClick={(e) => {props.setSize(100)}}>Thumbnail</button>
						</div>
						<div className="col-md-2">
							<button type="button" className="btn btn-primary" id="small" onClick={(e) => {props.setSize(240)}}>Small</button>
						</div>
						<div className="col-md-2">
							<button type="button" className="btn btn-primary" id="mid" onClick={(e) => {props.setSize(500)}}>Medium</button>
						</div>
						<div className="col-md-2">
							<button type="button" className="btn btn-primary" id="ori" onClick={(e) => {props.setSize(640)}}>Original</button>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<h2>Hit This button to fetch photos</h2>
							<button type="button" className="btn btn-success" id="button" onClick={(e) => {props.img(e)}}>Fetch Recent Photos</button>
							<button type="button" className="btn btn-alert" id="reset">Reset</button>
							<hr/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div id="results"></div>
							</div>
						</div>
					</div>
				</form>
  )
}
export default Form;
