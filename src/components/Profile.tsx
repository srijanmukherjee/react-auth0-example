import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user!.picture} alt={user!.name} />
        <h2>{user!.name}</h2>
        <p>{user!.email}</p>
        <p>
          Email verified: <b>{user!.email_verified ? "yes" : "no"}</b>
        </p>
        <p>{user!.updated_at}</p>
      </div>
    )
  );
};

export { Profile };
