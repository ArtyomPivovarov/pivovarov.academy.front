import type { Video } from '~/modules/video/video.types'

export const mockVideos: Video[] = [
  {
    id: 1,
    title: 'Introduction to TypeScript',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    previewSrc: '/video-cover.png',
  },
  {
    id: 2,
    title: 'Advanced Types',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    previewSrc: '/video-cover.png',
  },
  {
    id: 3,
    title: 'TypeScript and React',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    previewSrc: '/video-cover.png',
  },
  {
    id: 4,
    title: 'Practical Work',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    previewSrc: '/video-cover.png',
  },
]
