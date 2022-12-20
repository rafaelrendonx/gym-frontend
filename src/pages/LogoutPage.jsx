import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

export const LogoutPage = () => {
  const { clearContext } = useContext(UserContext);
  
  useEffect(() => {
    clearContext();
  }, []);
  return null;
};

