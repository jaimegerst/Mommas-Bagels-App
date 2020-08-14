import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { OPTIONS } from '../shared/options';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: OPTIONS
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderMenuItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('OptionsInfo', { optionsId: item.id })}
                    leftAvatar={{ source: require('./images/bagel.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.options}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Menu;