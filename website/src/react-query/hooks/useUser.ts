import { useQuery } from "@tanstack/react-query";
import { userKeys } from "../query-keys";

// ✏️ Example query hook — replace with your actual API call and types.
//
// Usage:
//   const { data: user, isLoading, error } = useUser("user-123");
//
// This pattern keeps API logic out of components.
// Create one file per domain: useUser.ts, usePosts.ts, useProducts.ts, etc.

interface User {
  id: string;
  name: string;
  email: string;
}

async function fetchUser(id: string): Promise<User> {
  // ✏️ Replace with your apiClient call:
  //   return apiClient.get(`/users/${id}`).then(res => res.data);
  throw new Error(`fetchUser not implemented — replace with real API call for user ${id}`);
}

export function useUser(id: string) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => fetchUser(id),
    enabled: !!id,
  });
}
