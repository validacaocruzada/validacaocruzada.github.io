'use client'

import { useEffect, useState } from 'react'

// BUILD_YEAR is inlined by next.config.js at build time, so the first client
// render matches the exported HTML; the effect then corrects to the visitor's clock.
const BUILD_YEAR = Number(process.env.BUILD_YEAR)

export default function Year() {
  const [year, setYear] = useState(BUILD_YEAR)
  useEffect(() => setYear(new Date().getFullYear()), [])
  return <>{year}</>
}
