export interface Lesson {
  id: number
  title: string
  order: number
  description: string
  published: true
  video: { id: number, previewSrc: string } | null
  createdAt: string
  updatedAt: string
}
