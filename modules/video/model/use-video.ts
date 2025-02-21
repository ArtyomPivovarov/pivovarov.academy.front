import { VideoQuery } from '~/modules/video/video.query'
import { useActiveSubscription } from '~/modules/subscription/model/use-active-subscription'

export function useVideo(videoId: Ref<number>) {
  const { $video } = useNuxtApp()

  return useQuery({
    queryKey: [VideoQuery.Video, videoId],
    queryFn: () => $video.getVideo(videoId.value),
  })
}