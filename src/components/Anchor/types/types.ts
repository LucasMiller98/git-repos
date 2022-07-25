import { ReactNode } from 'react'

export interface AnchorProps {
  children: ReactNode
  target: string
  href: string
  title: string
}