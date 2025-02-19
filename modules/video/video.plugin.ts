import { defineNuxtPlugin } from '#app'
import type { Video } from './video.types'

export default defineNuxtPlugin({
  name: 'video',
  setup: () => {
    const baseUrl = '/video'
    const { $api } = useNuxtApp()

    return {
      provide: {
        video: {
          getVideo: (videoId: number): Promise<Video> => {
            console.log('getVideo', videoId)
            return $api(`${baseUrl}/${videoId}`)
          }
        }
      }
    }
  }
})