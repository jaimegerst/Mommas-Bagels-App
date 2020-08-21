import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { OPTIONS } from '../shared/options';
import { STORY } from '../shared/story';
import { REVIEWS } from '../shared/reviews';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/coffee.jpg')}>
                <Text
                    style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: OPTIONS,
            story: STORY,
            reviews: REVIEWS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                    item={this.state.options.filter(options => options.featured)[0]} />
                <RenderItem 
                    item={this.state.story.filter(story => story.featured)[0]} />
                <RenderItem 
                    item={this.state.reviews.filter(reviews => reviews.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;