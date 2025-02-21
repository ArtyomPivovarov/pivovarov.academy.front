import { LessonService } from '~/modules/api/services/lesson.service'
import { LessonsQuery } from '~/modules/lessons/lessons.query'

export function useLesson(id: Ref<number>) {
  return useQuery({
    queryKey: [LessonsQuery.Lesson, id],
    queryFn: () => LessonService.getById(id.value)
  })
}
