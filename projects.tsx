import { View, Text, Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function Projects() {
  const router = useRouter();

  const projects = [
    "BottleBot – Smart Recycling System",
    "Portfolio Website",
    "Task Manager App"
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 40,
      }}
    >
      {/* Title */}
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        My Projects
      </Text>

      {/* Project Cards */}
      {projects.map((project, home) => (
        <View
          key={home}
          style={{
            backgroundColor: "#f3f4f6",
            padding: 20,
            borderRadius: 12,
            marginBottom: 15,
            elevation: 4, // shadow (Android)
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            🚀 {project}
          </Text>
        </View>
      ))}

      {/* Back Button */}
      <Pressable
        onPress={() => router.back()}
        style={{
          marginTop: 20,
          backgroundColor: "#3b82f6",
          padding: 15,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
          Back
        </Text>
      </Pressable>
    </ScrollView>
  );
}