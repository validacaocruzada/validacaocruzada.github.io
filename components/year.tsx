'use client'

import { useEffect, useState } from 'react'

const BUILD_YEAR = new Date().getFullYear()

export default function Year() {
  const [year, setYear] = useState(BUILD_YEAR)
  useEffect(() => setYear(new Date().getFullYear()), [])
  return <>{year}</>
}
