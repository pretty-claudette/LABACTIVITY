import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Skills() {
  const router = useRouter();

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "UI/UX Design",
  ];

  return (
    <View className="flex-1 bg-white px-6 pt-16">

      {/* Title */}
      <Text className="text-2xl font-bold mb-6 text-center">
        My Skills
      </Text>

      {/* Skill Cards */}
      {skills.map((skill, index) => (
        <View
          key={index}
          className="bg-blue-100 p-4 rounded-xl mb-4"
        >
          <Text className="font-semibold text-center">{skill}</Text>
        </View>
      ))}

      {/* Back Button */}
      <TouchableOpacity
        className="bg-gray-800 p-4 rounded-xl mt-6"
        onPress={() => router.back()}
      >
        <Text className="text-white text-center">Go Back</Text>
      </TouchableOpacity>

    </View>
  );
}