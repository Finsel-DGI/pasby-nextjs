import React from "react";
import { pasbyStyling } from "./buttons/BrandButtons";
import { PasbyButton } from "./buttons/button";

export function LoginButton({ className, variant, action, fallbackPath }: {
  className?: string,
  fallbackPath?: string,
  action: "login" | "identify"
  variant: pasbyStyling
}) {

  const onHandle = async () => {
    const response = await fetch(`/api/eid/login${fallbackPath ? `?state=${fallbackPath}` : ''}`);
    const { url } = await response.json();
    if (url) {
      window.location.href = url;
    }
  }
  return (
    <PasbyButton variant={variant} className={className} action={action} onClick={onHandle}/>
  )
}