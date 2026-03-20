import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        CLAUDETTE LLADONES
      </Text>

      <Text style={{ fontSize: 16, color: "gray", marginBottom: 20 }}>
        Frontend Developer
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#d45d99",
          padding: 12,
          borderRadius: 8,
          width: "100%",
          marginBottom: 10,
        }}
        onPress={() => router.push("/projects")}
      >
        <Text style={{ color: "#f1f4f7", textAlign: "center" }}>
          View My Projects
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#d45d99",
          padding: 12,
          borderRadius: 8,
          width: "100%",
        }}
        onPress={() => router.push("/skills")}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          My Skills
        </Text>
      </TouchableOpacity>
    </View>
  );
}