import { LessonService } from '~/modules/api/services/lesson.service'
import { LessonsQuery } from '~/modules/lessons/lessons.query'
import { mockLessons, mockVueLessons } from '~/utils/mocks'

export function useLesson(id: Ref<number>) {
  const { isMockMode } = useMockMode()
  
  return useQuery({
    queryKey: [LessonsQuery.Lesson, id],
    queryFn: () => {
      if (isMockMode.value) {
        const allLessons = [...mockLessons, ...mockVueLessons]
        const lesson = allLessons.find(l => l.id === id.value)
        if (!lesson) {
          return Promise.reject(new Error(`Lesson with id ${id.value} not found`))
        }
        return Promise.resolve(lesson)
      }
      return LessonService.getById(id.value)
    }
  })
}
