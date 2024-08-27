import type { Lesson } from '~/modules/lessons/lessons.types'

export function useLesson(id: Ref<number>) {
  return useFetch<Lesson>(`/backend-api/lesson/${id.value}`)
}
