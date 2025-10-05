import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Stations() {
  const [stations] = useState([
    {
      id: 1,
      name: "Benpli Theater, DY Soria",
      phone: "857-3110-7310-5571",
      distance: "1.2 km",
      address: "DY Soria St, Quezon City",
    },
    {
      id: 2,
      name: "Cogon Market",
      phone: "857-3110/310-5572",
      distance: "1.8 km",
      address: "Cogon Market Road",
    },
    {
      id: 3,
      name: "IBT Terminal, Bigpa",
      phone: "856-5171/310-5573",
      distance: "2.3 km",
      address: "IBT Terminal Building",
    },
    {
      id: 4,
      name: "Carmen Market",
      phone: "858-3087/310-5574",
      distance: "2.7 km",
      address: "Carmen Market Complex",
    },
    {
      id: 5,
      name: "Puerto",
      phone: "855-1917/310-5576",
      distance: "3.1 km",
      address: "Puerto District",
    },
    {
      id: 6,
      name: "Lumbia",
      phone: "310-5575",
      distance: "3.5 km",
      address: "Lumbia Area",
    },
  ]);

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone.split("/")[0]}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <View style={styles.mapPlaceholder}>
          <Ionicons name="map" size={64} color="#e0e0e0" />
          <Text style={styles.mapText}>Interactive Map</Text>
          <Text style={styles.mapSubtext}>Fire stations near your location</Text>
        </View>
        <View style={styles.mapOverlay}>
          <Ionicons name="locate" size={24} color="#FF4444" />
        </View>
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>Nearby Fire Stations</Text>
        <Text style={styles.listSubtitle}>{stations.length} stations found</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {stations.map((station) => (
          <View key={station.id} style={styles.stationCard}>
            <View style={styles.stationHeader}>
              <View style={styles.iconContainer}>
                <Ionicons name="flame" size={24} color="#FF4444" />
              </View>
              <View style={styles.stationInfo}>
                <Text style={styles.stationName}>{station.name}</Text>
                <View style={styles.distanceRow}>
                  <Ionicons name="navigate" size={14} color="#666" />
                  <Text style={styles.distance}>{station.distance}</Text>
                </View>
              </View>
            </View>

            <View style={styles.addressRow}>
              <Ionicons name="location-outline" size={16} color="#999" />
              <Text style={styles.address}>{station.address}</Text>
            </View>

            <View style={styles.actionRow}>
              <TouchableOpacity 
                style={styles.phoneButton}
                onPress={() => handleCall(station.phone)}
              >
                <Ionicons name="call" size={20} color="#fff" />
                <Text style={styles.phoneText}>{station.phone}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.directionsButton}>
                <Ionicons name="navigate-outline" size={20} color="#FF4444" />
              </TouchableOpacity>
            </View>
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
  mapContainer: {
    height: 260,
    backgroundColor: "#f5f5f5",
    position: "relative",
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  mapText: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "700",
    color: "#999",
    letterSpacing: 0.3,
  },
  mapSubtext: {
    marginTop: 6,
    fontSize: 13,
    color: "#bbb",
  },
  mapOverlay: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#fff",
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
  listHeader: {
    padding: 20,
    paddingBottom: 12,
    backgroundColor: "#f8f9fa",
  },
  listTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 6,
    letterSpacing: 0.3,
  },
  listSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 12,
  },
  stationCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 5,
    borderWidth: 0,
  },
  stationHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#ffebee",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  stationInfo: {
    flex: 1,
  },
  stationName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 6,
    letterSpacing: 0.2,
    lineHeight: 22,
  },
  distanceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  distance: {
    fontSize: 13,
    color: "#666",
    fontWeight: "600",
  },
  addressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
    paddingLeft: 2,
  },
  address: {
    fontSize: 13,
    color: "#999",
    flex: 1,
    lineHeight: 18,
  },
  actionRow: {
    flexDirection: "row",
    gap: 12,
  },
  phoneButton: {
    flex: 1,
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
  phoneText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 0.2,
  },
  directionsButton: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: "#ffebee",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
  },
});
