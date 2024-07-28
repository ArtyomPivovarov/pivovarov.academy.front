import { useQuery } from "@tanstack/vue-query";

export default function () {
  return useQuery({
    queryKey: ['learning-module'],
    queryFn: () => $fetch("/api/learning-module"),
  })
}