import { useQuery } from '@tanstack/vue-query'

interface LearningModule {
  id: number
  type: 'course' | 'intensive'
  title: string
  description: string | null
  published: boolean | null
  private: boolean | null
  createdAt: string
  updatedAt: string
}

export default function () {
  return useQuery({
    queryKey: ['learning-module'],
    queryFn: () => $fetch<LearningModule[]>('/backend-api/learning-module')
  })
}
