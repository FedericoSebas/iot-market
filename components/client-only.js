import { useEffect, useState } from "react";

const ClientOnly = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  console.log("isMounter: ", isMounted);
  useEffect(() => {
    setIsMounted(true);
    console.log("isMounter: ", isMounted);
  }, []);

  if (!isMounted) {
    return null;
  }

  return children;
};

export default ClientOnly;
