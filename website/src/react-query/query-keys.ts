// Query key factory — centralizes all cache keys for TanStack React Query.
// Usage: pass these to useQuery/useMutation for consistent cache invalidation.
//
// ✏️ Add your own domains following the same pattern:
//   export const postKeys = {
//     all: ["posts"] as const,
//     lists: () => [...postKeys.all, "list"] as const,
//     list: (filters: Record<string, unknown>) => [...postKeys.lists(), filters] as const,
//     details: () => [...postKeys.all, "detail"] as const,
//     detail: (id: string) => [...postKeys.details(), id] as const,
//   };

export const authKeys = {
  all: ["auth"] as const,
  user: () => [...authKeys.all, "user"] as const,
  session: () => [...authKeys.all, "session"] as const,
};

export const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...userKeys.lists(), filters] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};
