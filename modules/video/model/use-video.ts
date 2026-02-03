import { VideoQuery } from '~/modules/video/video.query'
import { useActiveSubscription } from '~/modules/subscription/model/use-active-subscription'
import { mockVideos } from '~/utils/mocks'

export function useVideo(videoId: Ref<number>) {
  const { $video } = useNuxtApp()
  const { isMockMode } = useMockMode()

  return useQuery({
    queryKey: [VideoQuery.Video, videoId],
    queryFn: () => {
      if (isMockMode.value) {
        const video = mockVideos.find(v => v.id === videoId.value)
        if (!video) {
          return Promise.reject(new Error(`Video with id ${videoId.value} not found`))
        }
        return Promise.resolve(video)
      }
      return $video.getVideo(videoId.value)
    },
  })
}