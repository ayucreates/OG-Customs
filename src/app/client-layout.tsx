"use client"

import Loader from "@/components/Loader"
import CursorEffect from "@/components/CursorEffect"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import ErrorBoundary from "@/components/ErrorBoundary"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Loader />
      <ErrorBoundary>
        <CursorEffect />
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </ErrorBoundary>
    </>
  )
}
