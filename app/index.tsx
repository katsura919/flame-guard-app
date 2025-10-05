import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [cameras] = useState([
    {
      id: 1,
      name: "Camera 1",
      status: "active",
      hasAlert: false,
      temperature: "Normal",
    },
    {
      id: 2,
      name: "Camera 2",
      status: "active",
      hasAlert: true,
      temperature: "High Heat Detected",
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {cameras.map((camera) => (
          <View key={camera.id} style={styles.cameraCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cameraTitle}>{camera.name}</Text>
              <View style={[styles.statusBadge, camera.hasAlert && styles.alertBadge]}>
                <View style={[styles.statusDot, camera.hasAlert && styles.alertDot]} />
                <Text style={[styles.statusText, camera.hasAlert && styles.alertText]}>
                  {camera.status}
                </Text>
              </View>
            </View>

            <View style={styles.videoContainer}>
              {camera.hasAlert ? (
                <View style={styles.thermalView}>
                  <View style={styles.thermalOverlay}>
                    <Ionicons name="flame" size={40} color="#FF4444" />
                    <Text style={styles.thermalText}>HEAT DETECTED</Text>
                  </View>
                  <View style={styles.heatZone} />
                </View>
              ) : (
                <View style={styles.normalView}>
                  <Ionicons name="videocam" size={48} color="#ccc" />
                  <Text style={styles.normalText}>Live Feed</Text>
                </View>
              )}
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Ionicons name="thermometer-outline" size={18} color="#666" />
                <Text style={styles.infoLabel}>Temperature:</Text>
                <Text style={[styles.infoValue, camera.hasAlert && styles.alertValue]}>
                  {camera.temperature}
                </Text>
              </View>
            </View>

            {camera.hasAlert && (
              <TouchableOpacity style={styles.alertButton}>
                <Ionicons name="alert-circle" size={20} color="#fff" />
                <Text style={styles.alertButtonText}>View Alert Details</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 12,
  },
  cameraCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 0,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cameraTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: 0.3,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e8f5e9",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 24,
  },
  alertBadge: {
    backgroundColor: "#ffebee",
  },
  statusDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#4caf50",
    marginRight: 7,
  },
  alertDot: {
    backgroundColor: "#FF4444",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2e7d32",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  alertText: {
    color: "#c62828",
  },
  videoContainer: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    marginBottom: 16,
  },
  normalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  normalText: {
    marginTop: 8,
    color: "#999",
    fontSize: 14,
  },
  thermalView: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
  },
  thermalOverlay: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "rgba(255, 68, 68, 0.15)",
    padding: 14,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FF4444",
    flexDirection: "row",
    alignItems: "center",
  },
  thermalText: {
    color: "#FF4444",
    fontWeight: "700",
    marginLeft: 10,
    fontSize: 13,
    letterSpacing: 0.8,
  },
  heatZone: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "rgba(255, 68, 68, 0.25)",
    borderWidth: 3,
    borderColor: "#FF4444",
  },
  infoRow: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  infoValue: {
    fontSize: 14,
    color: "#1a1a1a",
    fontWeight: "700",
  },
  alertValue: {
    color: "#FF4444",
  },
  alertButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF4444",
    paddingVertical: 14,
    borderRadius: 12,
    gap: 10,
    shadowColor: "#FF4444",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  alertButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
    letterSpacing: 0.3,
  },
});
