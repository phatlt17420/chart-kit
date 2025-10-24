import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ContributionGraph, // Biểu đồ Nhiệt
  ProgressChart,     // Vòng tiến trình
  StackedBarChart    // Biểu đồ Cột xếp chồng
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const chartWidth = screenWidth - 40;
const chartHeight = 220;

// ----------------------------------------------------
// CẤU HÌNH GIAO DIỆN CHUNG
// ----------------------------------------------------
const commonChartConfig = {
  backgroundGradientFrom: "#f0f0f0", // Màu nền
  backgroundGradientTo: "#ffffff",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Màu chữ, lưới
  decimalPlaces: 0, // Làm tròn số
  propsForLabels: {
    fontSize: 10
  }
};

// ----------------------------------------------------
// DỮ LIỆU CỦA TỪNG BIỂU ĐỒ
// ----------------------------------------------------

// 1. Line Chart Data (Biểu đồ Đường)
const lineData = {
  labels: ["T1", "T2", "T3", "T4", "T5"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99],
      color: (opacity = 1) => `rgba(46, 204, 113, ${opacity})`, // Xanh lá
    },
  ],
};

// 2. Bar Chart Data (Biểu đồ Cột)
const barData = {
  labels: ["Apple", "Samsung", "Xiaomi"],
  datasets: [
    {
      data: [150, 220, 90],
      color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`, // Xanh dương
    },
  ],
};

// 3. Pie Chart Data (Biểu đồ Tròn) - Cấu trúc khác biệt
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

// 4. Contribution Graph Data (Biểu đồ Nhiệt)
const contributionData = [
  { date: "2025-10-01", count: 1 },
  { date: "2025-10-02", count: 5 },
  { date: "2025-10-05", count: 2 },
  { date: "2025-10-10", count: 4 },
  { date: "2025-10-23", count: 3 },
  // ... thêm nhiều ngày khác
];

// 5. Progress Ring Data (Vòng Tiến trình) - Chỉ cần dữ liệu dạng phần trăm
const progressData = {
  // Array of data: 3 Vòng tiến trình
  data: [0.1, 0.2, 0.1, 0.3], // 40%, 60%, 90%
  // Màu sắc tương ứng
  colors: ['#3498db', '#2ecc71', '#e74c3c', '#665e5dff']
};

// 6. Stacked Bar Chart Data (Biểu đồ Cột xếp chồng)
const stackedBarData = {
  labels: ["Q1", "Q2", "Q3"],
  legend: ["A", "B", "C"], // Chú thích cho các phần xếp chồng
  data: [
    [60, 60, 30], // Dữ liệu Q1: A, B, C
    [30, 40, 20], // Dữ liệu Q2: A, B, C
    [20, 50, 10], // Dữ liệu Q3: A, B, C
  ],
  barColors: ["#a3c1ad", "#f7776d", "#4b4b4b"] // Màu cho A, B, C
};


// ----------------------------------------------------
// COMPONENT CHÍNH
// ----------------------------------------------------
const SixChartsExample = () => {
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
      />

      {/* 2. BAR CHART */}
      <Text style={styles.header}>2. Bar Chart (So sánh)</Text>
      <BarChart
        data={barData}
        width={chartWidth}
        height={chartHeight}
        chartConfig={commonChartConfig}
      />

      {/* 3. PIE CHART */}
      <Text style={styles.header}>3. Pie Chart (Tỷ trọng)</Text>
      <PieChart
        data={pieData} width={chartWidth} height={chartHeight}
        chartConfig={commonChartConfig}
        accessor={"population"} // Prop bắt buộc của Pie Chart
        backgroundColor={"transparent"}
        paddingLeft={"15"}
      />

      {/* 4. CONTRIBUTION GRAPH */}
      <Text style={styles.header}>4. Contribution Graph (Tần suất)</Text>
      <ContributionGraph
        values={contributionData}
        endDate={new Date("2025-10-24")} // Ngày kết thúc
        numDays={100} // Số ngày hiển thị
        width={chartWidth} height={200}
        chartConfig={commonChartConfig}
      />

      {/* 5. PROGRESS RING */}
      <Text style={styles.header}>5. Progress Ring (Tiến độ)</Text>
      <ProgressChart
        data={progressData}
        width={chartWidth} height={150}
        chartConfig={{
          ...commonChartConfig,
          color: (opacity, index) => progressData.colors[index], // Dùng màu từ dữ liệu
        }}
      />

      {/* 6. STACKED BAR CHART */}
      <Text style={styles.header}>6. Stacked Bar Chart (Thành phần)</Text>
      <StackedBarChart
        data={stackedBarData}
        width={chartWidth} height={chartHeight}
        chartConfig={commonChartConfig}
      />

      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginBottom: 15,
    color: '#34495e',
    textAlign: 'center'
  },
});

export default SixChartsExample;