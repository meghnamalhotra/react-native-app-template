import React, { useState } from "react";
import { Image, ImageProps, ActivityIndicator, View, StyleSheet } from "react-native";
import { Images } from "../constants/image";

interface Props extends ImageProps {
  fallbackSrc?: string;
}

const ImageComponent: React.FC<Props> = ({ source, fallbackSrc, style, ...props }) => {
  const [imgSrc, setImgSrc] = useState(source);
  const [loading, setLoading] = useState(true);

  return (
    <View style={[styles.container, style]}>
      {loading && <ActivityIndicator size="small" color="#555" style={styles.loader} />}
      <Image
        source={imgSrc}
        style={[styles.image, style]}
        onLoad={() => setLoading(false)}
        onError={() => {
          setImgSrc(fallbackSrc ? { uri: fallbackSrc } : Images.FALLBACK);
          setLoading(false);
        }}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  loader: {
    position: "absolute",
  },
});

export default ImageComponent;
