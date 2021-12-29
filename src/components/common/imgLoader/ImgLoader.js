import { Component } from 'react';
import OnImagesLoaded from 'react-on-images-loaded';
class ImgLoader extends Component{
    render(){
        return(
            <OnImagesLoaded onLoaded={this.props.onLoaded} onTimeout={this.props.onTimeout} timeout={this.props.timeout}>
             {this.props.children}
            </OnImagesLoaded>
        );
    }
}
export default ImgLoader;