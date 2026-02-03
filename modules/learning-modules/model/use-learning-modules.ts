import type { LearningModule } from '~/modules/learning-modules/learning-modules.types'
import { LearningModulesService } from '~/modules/api/services/learning-modules.service'
import { LearningModulesQuery } from '~/modules/learning-modules/learning-modules.query'
import { mockLearningModules, mockCoursesOnly, mockIntensivesOnly } from '~/utils/mocks'

export function useLearningModules(
  type?: Ref<LearningModule['type'] | undefined>
) {
  const { isMockMode } = useMockMode()
  
  return useQuery({
    queryKey: [LearningModulesQuery.LearningModules, type],
    queryFn: () => {
      if (isMockMode.value) {
        // Return mock data based on type filter
        if (!type?.value) {
          return Promise.resolve(mockLearningModules)
        }
        if (type.value === 'course') {
          return Promise.resolve(mockCoursesOnly)
        }
        if (type.value === 'intensive') {
          return Promise.resolve(mockIntensivesOnly)
        }
        return Promise.resolve(mockLearningModules.filter(m => m.type === type.value))
      }
      
      return LearningModulesService.get({
        query: { type: type?.value }
      })
    }
  })
}
