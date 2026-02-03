import { LearningModulesService } from '~/modules/api/services/learning-modules.service'
import { LearningModulesQuery } from '~/modules/learning-modules/learning-modules.query'
import { mockLearningModules } from '~/utils/mocks'

export function useLearningModule(id: Ref<number>) {
  const { isMockMode } = useMockMode()
  
  return useQuery({
    queryKey: [LearningModulesQuery.LearningModule, id],
    queryFn: () => {
      if (isMockMode.value) {
        const module = mockLearningModules.find(m => m.id === id.value)
        if (!module) {
          return Promise.reject(new Error(`Module with id ${id.value} not found`))
        }
        return Promise.resolve(module)
      }
      return LearningModulesService.getById(id.value)
    }
  })
}
