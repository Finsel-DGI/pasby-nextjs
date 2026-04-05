import React from "react";
import { pasbyStyling } from "./buttons/BrandButtons";
import { PasbyButton } from "./buttons/button";

export function LoginButton({
  className,
  variant,
  action,
  logoStyling,
  justAction,
  fallbackPath,
  tenantId,
  onError,
}: {
  className?: string;
  fallbackPath?: string;
  /** Required for multi-tenant hubs: selects Infisical Pasby credentials on `/api/eid/login`. */
  tenantId?: string;
  logoStyling?: string;
  justAction?: boolean;
  onError?: (e: string) => void;
  action: "login" | "identify";
  variant: pasbyStyling;
}) {
  const onHandle = async () => {
    const tenantQs = tenantId
      ? `&tenant=${encodeURIComponent(tenantId)}`
      : "";
    const stateQs = fallbackPath
      ? `&state=${encodeURIComponent(fallbackPath)}`
      : "";
    const response = await fetch(
      `/api/eid/login?redirect=false${tenantQs}${stateQs}`,
    );
    const { url, error } = await response.json();
    if (url) {
      window.location.href = url;
    }
    if (error) throw new Error(error);
  };
  return (
    <PasbyButton
      justAction={justAction}
      variant={variant}
      onError={onError}
      className={className}
      action={action}
      onClick={onHandle}
      logoStyling={logoStyling}
    />
  );
}
