import React from 'react';
import './form.css'
const Form = (props) => {
	return (
		<form>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2>Select the size of photos as you want them to be displayed</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-2">
						<button type="button" className="btn btn-primary" id="sq" onClick={(e) => {props.setSize(75,e)}}>Square </button>
					</div>
					<div className="col-md-2">
						<button type="button" className="btn btn-primary" id="lg-sq" onClick={(e) => {props.setSize(150,e)}}>Large Square</button>
					</div>
					<div className="col-md-2">
						<button type="button" className="btn btn-primary" id="thumb" onClick={(e) => {props.setSize(100,e)}}>Thumbnail</button>
					</div>
					<div className="col-md-2">
						<button type="button" className="btn btn-primary" id="small" onClick={(e) => {props.setSize(240,e)}}>Small</button>
					</div>
					<div className="col-md-2">
						<button type="button" className="btn btn-primary" id="mid" onClick={(e) => {props.setSize(500,e)}}>Medium</button>
					</div>
					<div className="col-md-2">
						<button type="button" className="btn btn-primary" id="ori" onClick={(e) => {props.setSize(640,e)}}>Original</button>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<h2>Hit This button to fetch photos</h2>
						<p>Up to ten photos will be displayed. Clicking on a photo will take you to the Flickr page containing the photo.</p>
						<button type="button" className="btn btn-success" id="button" onClick={(e) => {props.img(e)}}>Fetch Recent Photos</button>
						<button type="button" className="btn btn-alert" id="reset"onClick={(e) => {props.reset(e)}}>Reset</button>
						<hr/>
					</div>
				</div>
			</div>
		</form>
	)
}
export default Form;
