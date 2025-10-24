
import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Text,
    View
} from 'react-native';

//Import library for Speedometer
import RNSpeedometer from 'react-native-speedometer';

const App = () => {
    const [meterValue, setMeterValue] = useState(20);

    function onMeterChange(value) {
        if(!value){
            setMeterValue(0);
        }
        if(value < 0) {
            setMeterValue(0);
        }
        if(value > 100) {
            setMeterValue(100);
        }
        setMeterValue(parseInt(value));
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <RNSpeedometer
                    labelColor= '#00ff6b'
                    value={meterValue}
                    //value for Speedometer
                    size={200}
                    //Size of Speedometer
                    minValue={0}
                    //Min value for Speedometer
                    maxValue={100}
                    //Max value for Speedometer
                    allowedDecimals={0}
                    //Decimals value allowed or not
                    labels={[
                        {
                            name: 'Low Risk',
                            labelColor: '#ff2900',
                            activeBarColor: '#ff2900',
                        },
                        {
                            name: 'Medium Risk',
                            labelColor: '#f4ab44',
                            activeBarColor: '#f4ab44',
                        },
                        {
                            name: 'High Risk',
                            labelColor: '#00ff6b',
                            activeBarColor: '#00ff6b',
                        },
                    ]}
                //Labels for the different steps of Speedometer
                />
                <View style={{ marginTop: 70, padding: 20 }}>
                    <Text style={{ fontSize: 20 }}>
                        Enter the value for the speedometer graph{' '}
                        between 0 to 100
                    </Text>
                    <TextInput
                        placeholder="Enter Speedometer Value"
                        style={styles.textInput}
                        onChangeText={onMeterChange}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    textInput: {
        height: 25,
        fontSize: 16,
        marginTop: 30,
        borderBottomWidth: 0.3,
        borderBottomColor: 'black',
    },
});