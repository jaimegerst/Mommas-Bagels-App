import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { OPTIONS } from '../shared/options';
import { REVIEWS } from '../shared/reviews';

function RenderOptions(props) {   

    const {options} = props;

    if (options) {
        return (
            <Card
                featuredTitle={options.name}
                image={require('./images/bagel.jpg')}>
                <Text style={{margin: 10}}>
                    {options.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

function RenderReviews({reviews}) {

    const renderReviewItem = ({item}) => {
        return (
            <View style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.text}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{`-- ${item.author}, ${item.date}`}</Text>
            </View>
        );
    };

    return (
        <Card title='Reviews'>
            <FlatList
                data={reviews}
                renderItem={renderReviewItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class OptionsInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            options: OPTIONS,
            reviews: REVIEWS,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({favorite: true});
    }

    static navigationOptions = {
        title: 'Menu'
    };

    render() {
        const optionsId = this.props.navigation.getParam('optionsId');
        const options = this.state.options.filter(options => options.id === optionsId)[0];
        const reviews = this.state.reviews.filter(reviews => reviews.optionsId === optionsId);
        return (
            <ScrollView>
                <RenderOptions options={options}
                    favorite={this.state.favorite}
                    markFavorite={() => this.markFavorite()}
                />
                <RenderReviews reviews={reviews} />
            </ScrollView>
        );
    }
}


export default OptionsInfo;