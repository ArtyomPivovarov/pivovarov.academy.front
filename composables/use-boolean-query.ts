import { useRouteQuery } from '@vueuse/router'

export function useBooleanQuery(name: string) {
  return useRouteQuery(name, '', {
    transform: (v: string) => (v === 'false' ? false : Boolean(v))
  })
}
