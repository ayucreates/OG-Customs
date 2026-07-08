"use client"

import { Component, ReactNode } from "react"

type Props = { children: ReactNode; onError?: () => void }
type State = { hasError: boolean }

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch() {
    this.props.onError?.()
  }

  render() {
    if (this.state.hasError) {
      return null
    }
    return this.props.children
  }
}
