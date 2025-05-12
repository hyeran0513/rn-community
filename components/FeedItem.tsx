import { Text, View } from "react-native";
import { Post } from "@/types";

interface FeedItemProps {
  post: Post;
}

function FeedItem({ post }: FeedItemProps) {
  return (
    <View>
      <View>
        <Text>{post.title}</Text>
      </View>
    </View>
  );
}

export default FeedItem;
