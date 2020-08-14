import React from 'react';
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

function OptionsInfo(props) {
    return <RenderOptions options={props.options} />;
}

export default OptionsInfo;