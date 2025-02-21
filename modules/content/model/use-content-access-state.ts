import { computed, type ComputedRef } from 'vue'
import { useActiveSubscription } from '~/modules/subscription/model/use-active-subscription'
import { ContentAccessState } from '~/modules/content/content-access.types'

export function useContentAccessState(
  requiredLevel: ComputedRef<number | null>
) {
  const { loggedIn } = useUserSession()
  const { data: activeSubscription } = useActiveSubscription()

  return computed<ContentAccessState>(() => {
    if (!loggedIn.value) {
      return ContentAccessState.Unauthorized
    }
    if (!requiredLevel.value) {
      return ContentAccessState.FreeContent
    }
    if (!activeSubscription.value) {
      return ContentAccessState.NoSubscription
    }

    return activeSubscription.value.type.level >= requiredLevel.value
      ? ContentAccessState.ActiveSubscription
      : ContentAccessState.InsufficientLevel
  })
}
