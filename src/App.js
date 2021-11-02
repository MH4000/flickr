import React from 'react';
import Form from './components/Form/form.js';
import Images from './components/Images/images.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from "react-promise-tracker";
import Loader from 'react-loader-spinner';


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
			const apiUrl = await trackPromise(fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=04d2badaf65b76589e9d498ba4eba00a&per_page=10&format=json&nojsoncallback=1'));
			const apiUrlRes = await apiUrl.json();
			console.log(apiUrlRes);
			for (var id in apiUrlRes.photos.photo){
				apiUrlSize.push(await trackPromise( fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=04d2badaf65b76589e9d498ba4eba00a&photo_id='+apiUrlRes.photos.photo[id].id+'&format=json&nojsoncallback=1')));
				apiUrlSizeRes.push(await apiUrlSize[id].json());
			}   
			this.setState({
				image_link: apiUrlSizeRes.map(url => url.sizes.size.map(link => link.url)),
				image_url: apiUrlSizeRes.map(url => url.sizes.size.map(link => link.source)),
				image_width: apiUrlSizeRes.map(url => url.sizes.size.map(link => link.width))
			});
			return apiUrlRes; 
		} 
	render() {    
    const LoadingIndicator = props => {
      const { promiseInProgress } = usePromiseTracker();
      return (
        promiseInProgress &&
        <div
          style={{
            marginTop: "3em",
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Loader type="Oval" color="#2BAD60" height="100" width="100" />
        </div>
      );  
    }  
		document.title="Flickr App";
		return (
			<div className="App">
				<Form className="input_form"
					img={this.getImages}
					setSize={this.setImgSize}
					reset={this.resetImages}/>
        <LoadingIndicator/>
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
