import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./LogoutButton";
import { LoginButton } from "./LoginButton";

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>;
};

export { Header };
