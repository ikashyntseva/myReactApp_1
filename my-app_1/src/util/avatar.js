export const getAvatarPromise = () => {
  return new Promise(resolve => {
    //eslint-disable-next-line no-undef
    VK.Api.call(
      'photos.get',
      { album_id: 'profile', rev: 0, v: '5.101' },
      r => {
        try {
          const { items } = r.response
          const avatarUrl = items.pop().sizes[0].url

          resolve(avatarUrl)
        } catch (e) {}
      }
    )
  })
}
