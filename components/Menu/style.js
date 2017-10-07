import {
    StyleSheet,
} from 'react-native';

import colors from '../../style/colors';

const styles = StyleSheet.create({
    nav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: colors.main,
        borderColor: 'transparent',
        borderWidth: 1,
        justifyContent: 'center',
        height: 64,
        flexDirection: 'row'
    },
    navElement: {
        color: '#fff',
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    subNavItem: {
        padding: 5,
    }
});

export default styles;