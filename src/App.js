import React from 'react';
import logo from './logo.svg';
//import './App.css';
import Form from './components/Form/form.js';
import Images from './components/Images/images.js';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
	state = {
		image_link: undefined,
		image_url: undefined,
		image_size: undefined
	}
	resetImages=(e)=>{
		e.preventDefault();
		this.setState({
			image_link: undefined,
			image_url: undefined,
			image_size: undefined
		})
	}
	setImgSize=(i,e)=>{
		e.preventDefault();
		this.setState({
			image_size: i
		})
	}
	getImages = async (e) =>{
		e.preventDefault();
		const apiUrlSize = [];
		const apiUrlSizeRes =[];
		const apiUrl = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=04d2badaf65b76589e9d498ba4eba00a&per_page=10&format=json&nojsoncallback=1')
		const apiUrlRes = await apiUrl.json()
		for (var id in apiUrlRes.photos.photo){
			apiUrlSize.push(await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=04d2badaf65b76589e9d498ba4eba00a&photo_id='+apiUrlRes.photos.photo[id].id+'&format=json&nojsoncallback=1'))
			apiUrlSizeRes.push(await apiUrlSize[id].json());
		}
		this.setState({
			image_link: apiUrlSizeRes.map(url => url.sizes.size.map(link => link.url)),
			image_url: apiUrlSizeRes.map(url => url.sizes.size.map(link => link.source)),
			image_width: apiUrlSizeRes.map(url => url.sizes.size.map(link => link.width))
		});
	}
	render() {
		document.title="Flickr App";
		return (
			<div className="App">
				<Form className="input_form"
					img={this.getImages}
					setSize={this.setImgSize}
					reset={this.resetImages}/>
				<Images img={this.state['image_url']}
					link={this.state['image_link']}
					width={this.state['image_width']}
					id={this.state['id']}
					size={this.state['image_size']}/>
			</div>
		);
	}
}
export default App;
