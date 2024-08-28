import type { Video } from '~/modules/video/video.types'

export interface Lesson {
  id: number
  title: string
  order: number
  description: string
  published: true
  video: Video
  createdAt: string
  updatedAt: string
}
