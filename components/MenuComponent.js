import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements'
import { DISHES } from '../shared/dishes';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }
    static navigationOptions = {
        title: 'Menu'
    };
    render() {
        const { navigate } = this.props.navigation
        const renderMenuItem = (item, index) => {


            return (
                <ListItem
                    key={index}
                    leftAvatar={{
                        title: item.item.name,
                        source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' },
                        showAccessory: true,
                    }}
                    title={item.item.name}
                    subtitle={item.item.description}
                    onPress={() => navigate('Dishdetail', { dishId: item.item.id })}
                    hideChevron={true}
                />

            )

        }

        return (
            <FlatList data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()} />
        )
    }





}

export default Menu