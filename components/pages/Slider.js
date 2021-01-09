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
                dotStyle={2}
                autoplayInterval={15000}
                disableOnPress={true}
                dotColor={"tomato"}
                autoplay={true}
                imageLoadingColor="#fff"
                circleLoop={true}
                images={this.state.images}
                sliderBoxHeight={200}              
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
              
                />
            </View>
        );
    }

}



export default Slider 