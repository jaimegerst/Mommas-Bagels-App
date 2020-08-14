import React, { Component } from 'react';
import Menu from './MenuComponent';
import OptionsInfo from './OptionsInfoComponent';
import { OPTIONS } from '../shared/options';
import { View } from 'react-native';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          options: OPTIONS,
          selectedOptions: null
        };
    }

    onOptionsSelect(optionsId) {
        this.setState({selectedOptions: optionsId});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Menu options={this.state.options} onPress={optionsId => this.onOptionsSelect(optionsId)} />
                <OptionsInfo options={this.state.options.filter(options => options.id === this.state.selectedOptions)[0]} />
            </View>
        );
    }
}

export default Main;