import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { OPTIONS } from '../shared/options';

function RenderOptions({options}) {   
    
    if (options) {
        return (
            <Card
                featuredTitle={options.name}
                image={require('./images/bagel.jpg')}>
                <Text style={{margin: 10}}>
                    {options.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class OptionsInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            options: OPTIONS
        };
    }

    static navigationOptions = {
        title: 'Options Information'
    };

    render() {
        const optionsId = this.props.navigation.getParam('optionsId');
        const options = this.state.options.filter(options => options.id === optionsId)[0];
        return <RenderOptions options={options} />;
    }
}


export default OptionsInfo;