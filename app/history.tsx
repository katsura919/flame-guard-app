import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function History() {
  const [incidents] = useState([
    {
      id: 1,
      date: "May 20, 2025, 8:47PM",
      location: "Camera 2",
      duration: "1 minute",
      severity: "high",
      status: "Resolved",
      description: "High temperature detected in storage area",
    },
    {
      id: 2,
      date: "May 18, 2025, 3:22PM",
      location: "Camera 1",
      duration: "45 seconds",
      severity: "medium",
      status: "Resolved",
      description: "Smoke detected near entrance",
    },
    {
      id: 3,
      date: "May 15, 2025, 11:15AM",
      location: "Camera 3",
      duration: "2 minutes",
      severity: "low",
      status: "False Alarm",
      description: "Temperature spike - cooking area",
    },
  ]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "#FF4444";
      case "medium":
        return "#FFA500";
      case "low":
        return "#FFD700";
      default:
        return "#999";
    }
  };

  const getSeverityBg = (severity: string) => {
    switch (severity) {
      case "high":
        return "#fff5f5";
      case "medium":
        return "#fff8f0";
      case "low":
        return "#fffef0";
      default:
        return "#f5f5f5";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{incidents.length}</Text>
            <Text style={styles.statLabel}>Total Incidents</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statNumber, { color: "#FF4444" }]}>
              {incidents.filter((i) => i.severity === "high").length}
            </Text>
            <Text style={styles.statLabel}>Critical</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={[styles.statNumber, { color: "#4ade80" }]}>
              {incidents.filter((i) => i.status === "Resolved").length}
            </Text>
            <Text style={styles.statLabel}>Resolved</Text>
          </View>
        </View>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Recent Incidents</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter" size={18} color="#666" />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {incidents.map((incident) => (
          <View key={incident.id} style={styles.incidentCard}>
            <View style={styles.cardTop}>
              <View
                style={[
                  styles.severityBadge,
                  { backgroundColor: getSeverityBg(incident.severity) },
                ]}
              >
                <View
                  style={[
                    styles.severityDot,
                    { backgroundColor: getSeverityColor(incident.severity) },
                  ]}
                />
                <Text
                  style={[styles.severityText, { color: getSeverityColor(incident.severity) }]}
                >
                  {incident.severity.toUpperCase()}
                </Text>
              </View>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>{incident.status}</Text>
              </View>
            </View>

            <View style={styles.thumbnailContainer}>
              <View style={styles.thumbnailPlaceholder}>
                <Ionicons name="flame" size={32} color={getSeverityColor(incident.severity)} />
              </View>
              <View style={styles.incidentInfo}>
                <Text style={styles.incidentTitle}>Fire Detection Alert</Text>
                <Text style={styles.incidentDescription}>{incident.description}</Text>
              </View>
            </View>

            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <View style={styles.detailItem}>
                  <Ionicons name="calendar-outline" size={16} color="#666" />
                  <Text style={styles.detailLabel}>Date captured:</Text>
                </View>
                <Text style={styles.detailValue}>{incident.date}</Text>
              </View>

              <View style={styles.detailRow}>
                <View style={styles.detailItem}>
                  <Ionicons name="location-outline" size={16} color="#666" />
                  <Text style={styles.detailLabel}>Location:</Text>
                </View>
                <Text style={styles.detailValue}>{incident.location}</Text>
              </View>

              <View style={styles.detailRow}>
                <View style={styles.detailItem}>
                  <Ionicons name="time-outline" size={16} color="#666" />
                  <Text style={styles.detailLabel}>Duration:</Text>
                </View>
                <Text style={styles.detailValue}>{incident.duration}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewButtonText}>View Full Details</Text>
              <Ionicons name="chevron-forward" size={18} color="#FF4444" />
            </TouchableOpacity>
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
  header: {
    padding: 20,
    paddingBottom: 16,
    backgroundColor: "#f8f9fa",
  },
  statsContainer: {
    flexDirection: "row",
    gap: 14,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  statLabel: {
    fontSize: 11,
    color: "#666",
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0.3,
    textTransform: "uppercase",
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#f8f9fa",
  },
  listTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    letterSpacing: 0.3,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  filterText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "600",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 12,
  },
  incidentCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 0,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  severityBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 24,
  },
  severityDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginRight: 7,
  },
  severityText: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 0.8,
  },
  statusBadge: {
    backgroundColor: "#e8f5e9",
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 24,
  },
  statusText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#2e7d32",
    letterSpacing: 0.5,
  },
  thumbnailContainer: {
    flexDirection: "row",
    marginBottom: 18,
  },
  thumbnailPlaceholder: {
    width: 88,
    height: 88,
    borderRadius: 16,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  incidentInfo: {
    flex: 1,
    justifyContent: "center",
  },
  incidentTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  incidentDescription: {
    fontSize: 13,
    color: "#666",
    lineHeight: 20,
  },
  detailsContainer: {
    backgroundColor: "#f8f9fa",
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  detailLabel: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500",
  },
  detailValue: {
    fontSize: 13,
    color: "#1a1a1a",
    fontWeight: "700",
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#ffebee",
    gap: 8,
  },
  viewButtonText: {
    color: "#FF4444",
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 0.3,
  },
});
