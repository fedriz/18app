import React from 'react';

import { Link } from 'react-router-native';
import {
    Text,
    View,
    AppRegistry,
    Image
} from 'react-native';

import styles from './style';

import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'

const Menu = () => (
    <View style={styles.nav}>
        <Link
            to="/"
            underlayColor='transparent'
            style={styles.navItem}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    style={styles.navIcon}
                    source={require('../../assets/icons/icon-plus-white-medium.png')}
                />
                <Text style={styles.navElement}>Nuovo</Text>
            </View>
        </Link>
        <Link
            to="/buoni"
            underlayColor='transparent'
            style={styles.navItem}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    style={styles.navIcon}
                    source={require('../../assets/icons/icon-wallet-white-medium.png')}
                />
                <Text style={styles.navElement}>I tuoi buoni</Text>
            </View>
        </Link>
        <Link
            to="/negozi"
            underlayColor='transparent'
            style={styles.navItem} >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    style={styles.navIcon}
                    source={require('../../assets/icons/icon-marker-white-medium.png')}
                />
                <Text style={styles.navElement}>Negozi</Text>
            </View>

        </Link>
        <Link
            to="/info"
            underlayColor='transparent'
            style={styles.navItem} >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Image
                    style={styles.navIcon}
                    source={require('../../assets/icons/icon-info-white-medium.png')}
                />
                <Text style={styles.navElement}>Info</Text>
            </View>

        </Link>
    </View>
);

export default Menu;
