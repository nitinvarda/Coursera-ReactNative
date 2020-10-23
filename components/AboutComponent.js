import React, { Component } from 'react';
import { LEADERS } from '../shared/leaders';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { Card, ListItem } from 'react-native-elements'

const Histroy = () => {
    return (
        <Card>
            <Card.Title>Our Histroy</Card.Title>
            <Card.Divider />
            <Text>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence
            in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys
            patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs
                       in the world, you never know what will arrive on your plate the next time you visit us.</Text>
            <Text>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO,
                     Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
        </Card>

    )
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaders: LEADERS
        }
    }
    static navigationOptions = {
        title: 'About'
    }

    render() {
        const renderMenuItem = (item, index) => {
            return (
                <ListItem
                    key={index}
                    leftAvatar={{
                        title: item.name,
                        source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' },
                        showAccessory: true,
                    }}
                    title={item.item.name}
                    subtitle={item.item.description}

                    hideChevron={true}
                />

            )

        }
        return (
            <ScrollView>
                <Histroy />
                <Card>
                    <Card.Title>Corporate Leadership</Card.Title>
                    <Card.Divider />
                    <FlatList data={this.state.leaders}
                        renderItem={renderMenuItem}
                        keyExtractor={item => item.id.toString()} />
                </Card>


            </ScrollView>


        )
    }

}

export default About