import React from "react";
import { pasbyStyling } from "./buttons/BrandButtons";
import { PasbyButton } from "./buttons/button";

export function LoginButton({ className, variant, action, logoStyling, justAction, fallbackPath, onError }: {
  className?: string,
  fallbackPath?: string,
  logoStyling?: string,
  justAction?: boolean,
  onError?: (e: string) => void;
  action: "login" | "identify",
  variant: pasbyStyling,
}) {

  const onHandle = async () => {
    const response = await fetch(`/api/eid/login?redirect=false${fallbackPath ? `&state=${fallbackPath}` : ''}`);
    const { url, error } = await response.json();
    if (url) {
      window.location.href = url;
    }
    if (error) throw new Error(error);
  }
  return (
    <PasbyButton justAction={justAction} variant={variant} onError={onError} className={className} action={action} onClick={onHandle} logoStyling={logoStyling} />
  )
}