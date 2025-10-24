// Display Hyperlink in React Native App for Android and iOS
// https://aboutreact.com/react-native-hyperlink/

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text
} from 'react-native';
import { Linking } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

const HyperLinkingApp = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View style={styles.container}>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.header}>
                            Ví dụ về React Native Hyperlink
                        </Text>
                        <Text style={styles.sectionTitle}>
                            Không có Hyperlink
                        </Text>
                        <Text style={styles.sectionDescription}>
                            Vui lòng nhấp vào https://aboutreact.com để kiểm tra xem nó
                            có thực hiện được hành động nào không
                        </Text>

                        <Text style={styles.sectionTitle}>
                            Hyperlink và Nhấp để mở trong Trình duyệt
                        </Text>
                        <Hyperlink linkDefault={true}>
                            <Text style={styles.sectionDescription}>
                                Vui lòng nhấp vào https://aboutreact.com để kiểm tra xem nó
                                có thực hiện được hành động nào không
                            </Text>
                        </Hyperlink>

                        <Text style={styles.sectionTitle}>
                            Hyperlink và Nhấp để lấy url trong onPress
                        </Text>
                        <Hyperlink
                            onPress={(url, text) => alert(url + ', ' + text)}>
                            <Text style={styles.sectionDescription}>
                                Vui lòng nhấp vào https://aboutreact.com để kiểm tra xem nó
                                có thực hiện được hành động nào không
                            </Text>
                        </Hyperlink>

                        <Text style={styles.sectionTitle}>
                            Hyperlink và Tùy chỉnh kiểu dáng của Hyperlink
                        </Text>
                        <Hyperlink
                            linkStyle={{ color: '#2980b9', fontSize: 16 }}
                            onPress={(url, text) => alert(url + ', ' + text)}>
                            <Text style={styles.sectionDescription}>
                                Vui lòng nhấp vào https://aboutreact.com để kiểm tra xem nó
                                có thực hiện được hành động nào không
                            </Text>
                        </Hyperlink>

                        <Text style={styles.sectionTitle}>
                            Hyperlink, Tùy chỉnh kiểu dáng và Thay thế URL bằng chuỗi
                        </Text>
                        <Hyperlink
                            linkStyle={{ color: '#2980b9', fontSize: 16 }}
                            onPress={(url, text) => alert(url + ', ' + text)}
                            linkText={(url) =>
                                url === 'https://aboutreact.com' ? 'AboutReact' : url
                            }>
                            <Text style={styles.sectionDescription}>
                                Vui lòng nhấp vào https://aboutreact.com để kiểm tra xem nó
                                có thực hiện được hành động nào không
                            </Text>
                            
                        </Hyperlink>
                            <Text style={styles.sectionTitle}>
                                React Native Hyperlink
                                Để mở nó trong Trình duyệt bằng Linking
                            </Text>
                            <Text style={styles.sectionDescription}>
                                Xin chào, chào mừng bạn đến với{' '}
                                <Text
                                    style={styles.hyperlinkStyle}
                                    onPress={() => {
                                        Linking.openURL('https://aboutreact.com');
                                    }}>
                                    AboutReact
                                </Text>
                                . About React là trang web hướng dẫn trực tuyến.
                                Bạn có thể tìm thấy mã ví dụ liên quan đến React Native.
                                Chúng tôi đang cố gắng hết sức để cung cấp cho bạn nội dung chất lượng
                            </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default HyperLinkingApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
    },
    header: {
        fontSize: 22,
        fontWeight: '600',
        color: 'black',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black',
        marginTop: 30,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 15,
        fontWeight: '400',
        color: 'black',
    },
});