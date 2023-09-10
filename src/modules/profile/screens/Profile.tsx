import { View } from 'react-native';
import React from 'react';
import Button from '../../../shared/components/buttons/Button';
import { logout } from '../../../shared/functions/connection/auth';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

const Profile = () => {
    const navigate = useNavigation<NavigationProp<ParamListBase>>();
    return (
        <View>
            <Button onPress={() => logout(navigate)} title="logout" color="red" />
        </View>
    );
};

export default Profile;
