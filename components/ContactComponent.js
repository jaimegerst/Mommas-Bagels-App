import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
       return (
            <ScrollView>
                <Card
                    title= {'Contact Information'}>
                    <Text 
                    wrapperStyle= {{margin: 20}}>
                        1712 South Tryon Street
                    </Text>
                    <Text> 
                        Charlotte, NC 28217
                    </Text>
                    <Text style= {{marginBottom: 10}}>
                        U.S.A.
                    </Text>
                    <Text> 
                        Phone: 1-704-555-2289
                    </Text>
                    <Text> 
                        Email: mommasbagels@gmail.com
                    </Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;