import { isAuthenticated } from "@/lib/auth";

export default async function Dashboard() {
  return (
    <div>
      {!(await isAuthenticated()) ? (
        <h1>Access is denied.Please login again</h1>
      ) : (
        <h1>Admin dashboard</h1>
      )}
    </div>
  );
}
