"use client"

import { useUser } from "@clerk/nextjs";

export const { isSignedIn } = useUser()