export const mediaType = (file: File) => {
  const mimeType = file.type;

  return {
    isVideo: mimeType.startsWith("video/"),
    isAudio: mimeType.startsWith("audio/"),
    isImage: mimeType.startsWith("image/"),
    isText: mimeType === "text/plain",
    isJSON: mimeType === "application/json",
    isPDF: mimeType === "application/pdf",
  };
};
