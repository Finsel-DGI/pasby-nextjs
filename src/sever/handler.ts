'use sever'

import { NextResponse } from "next/server";
import FlowClient from "../client"
import { config } from "../config";

export const getUser = async () => {
  return await FlowClient.user();
}

export const clearSession = async () => {
  const { postLogoutRedirectURL } = config;
  await FlowClient.logout();
  return NextResponse.redirect(postLogoutRedirectURL ?? '/');
}