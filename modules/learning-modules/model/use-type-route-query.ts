export function useTypeRouteQuery() {
  return useRouteQuery('type', undefined, {
    transform: (value) => value ? String(value) : undefined
  })
}