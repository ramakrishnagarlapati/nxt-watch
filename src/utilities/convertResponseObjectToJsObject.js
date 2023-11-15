function convertResponseObjectToJsObject(object) {
  return object.map(item => ({
    id: item.id,
    channel: {
      name: item.channel.name,
      profileImageUrl: item.channel.profile_image_url,
    },
    publishedAt: item.published_at,
    thumbnailUrl: item.thumbnail_url,
    title: item.title,
    viewCount: item.view_count,
  }))
}
export default convertResponseObjectToJsObject
