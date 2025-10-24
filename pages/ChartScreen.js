import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ContributionGraph,
    ProgressChart,
    StackedBarChart
} from "react-native-chart-kit";

// Lấy kích thước màn hình để đảm bảo biểu đồ đáp ứng
const screenWidth = Dimensions.get("window").width;
const chartWidth = screenWidth - 40; // Trừ padding 20*2
const chartHeight = 220;

// ====================================================
// CẤU HÌNH & DỮ LIỆU
// ====================================================

// Cấu hình giao diện chung cho hầu hết các biểu đồ
const commonChartConfig = {
    backgroundGradientFrom: "#f0f0f0", // Màu nền
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Màu chữ, lưới
    decimalPlaces: 0,
    propsForLabels: {
        fontSize: 10
    }
};

// 1. Line Chart Data (Xu hướng)
const lineData = {
    labels: ["T1", "T2", "T3", "T4", "T5"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99],
            color: (opacity = 1) => `rgba(46, 204, 113, ${opacity})`,
        },
    ],
};

// 2. Bar Chart Data (So sánh)
const barData = {
    labels: ["Apple", "Samsung", "Xiaomi"],
    datasets: [
        {
            data: [150, 220, 90],
            color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
        },
    ],
};

// 3. Pie Chart Data (Tỷ trọng)
const pieData = [
    {
        name: "Cà phê",
        population: 40,
        color: "#e74c3c",
        legendFontColor: "#7F7F7F",
        legendFontSize: 12
    },
    { name: "Trà", population: 25, color: "#f1c40f", legendFontColor: "#7F7F7F", legendFontSize: 12 },
    { name: "Nước ép", population: 35, color: "#9b59b6", legendFontColor: "#7F7F7F", legendFontSize: 12 },
];

// 4. Contribution Graph Data (Tần suất)
const contributionData = [
    { date: "2025-10-01", count: 1 },
    { date: "2025-10-02", count: 5 },
    { date: "2025-10-05", count: 2 },
    { date: "2025-10-10", count: 4 },
    { date: "2025-10-23", count: 3 },
    // Dữ liệu cho biểu đồ nhiệt
];

// 5. Progress Ring Data (Tiến độ)
const progressData = {
    data: [0.1, 0.2, 0.1, 0.3],
    colors: ['#3498db', '#2ecc71', '#e74c3c', '#665e5dff']
};

// 6. Stacked Bar Chart Data (Thành phần)
const stackedBarData = {
    labels: ["Q1", "Q2", "Q3"],
    legend: ["A", "B", "C"],
    data: [
        [60, 60, 30],
        [30, 40, 20],
        [20, 50, 10],
    ],
    barColors: ["#a3c1ad", "#f7776d", "#4b4b4b"]
};

// ====================================================
// COMPONENT MÀN HÌNH
// ====================================================

const ChartScreen = () => {
    return (
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>6 Loại Biểu đồ Khác nhau</Text>

            {/* 1. LINE CHART */}
            <Text style={styles.header}>1. Line Chart (Xu hướng)</Text>
            <LineChart
                data={lineData}
                width={chartWidth}
                height={chartHeight}
                chartConfig={commonChartConfig} bezier
                style={styles.chartStyle}
            />

            {/* 2. BAR CHART */}
            <Text style={styles.header}>2. Bar Chart (So sánh)</Text>
            <BarChart
                data={barData}
                width={chartWidth}
                height={chartHeight}
                chartConfig={commonChartConfig}
                style={styles.chartStyle}
            />

            {/* 3. PIE CHART */}
            <Text style={styles.header}>3. Pie Chart (Tỷ trọng)</Text>
            <PieChart
                data={pieData} width={chartWidth} height={chartHeight}
                chartConfig={commonChartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                style={styles.chartStyle}
            />

            {/* 4. CONTRIBUTION GRAPH */}
            <Text style={styles.header}>4. Contribution Graph (Tần suất)</Text>
            <ContributionGraph
                values={contributionData}
                endDate={new Date("2025-10-24")}
                numDays={100}
                width={chartWidth} height={200}
                chartConfig={commonChartConfig}
                style={styles.chartStyle}
            />

            {/* 5. PROGRESS RING */}
            <Text style={styles.header}>5. Progress Ring (Tiến độ)</Text>
            <ProgressChart
                data={progressData}
                width={chartWidth} height={150}
                chartConfig={{
                    ...commonChartConfig,
                    color: (opacity, index) => progressData.colors[index],
                }}
                style={styles.chartStyle}
            />

            {/* 6. STACKED BAR CHART */}
            <Text style={styles.header}>6. Stacked Bar Chart (Thành phần)</Text>
            <StackedBarChart
                data={stackedBarData}
                width={chartWidth} height={chartHeight}
                chartConfig={commonChartConfig}
                style={styles.chartStyle}
            />

            <View style={{ height: 50 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#f9f9f9', // Nền hơi sáng hơn
    },
    contentContainer: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2c3e50',
    },
    header: {
        fontSize: 16,
        fontWeight: '700',
        marginTop: 25,
        marginBottom: 10,
        color: '#34495e',
        textAlign: 'center'
    },
    chartStyle: {
        borderRadius: 16, // Thêm bo góc cho biểu đồ
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 5,
    }
});

export default ChartScreen;