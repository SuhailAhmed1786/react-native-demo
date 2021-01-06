import React from 'react'
import { View } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                  require('../img/first.jpg'),
                  require('../img/second.jpg'),
                  require('../img/first.jpg'),
                  require('../img/second.jpg')
            ]
        };
    }

    render() {
        return (
            <View>
                <SliderBox
                    // autoplay= {true}
                    images={this.state.images}
                    sliderBoxHeight={220}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                />
            </View>
        );
    }

}



export default Slider 