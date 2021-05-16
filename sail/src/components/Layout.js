import React from "react"
import Head from "next/head"
import NextNProgress from "../components/NextNProgress"
import GoogleFonts from "next-google-fonts"

import Header from "./Header"
import Footer from "./Footer"
import { FormProvider } from "../components/FormContext"
import { BookingProvider } from "../components/BookingContext"
import SvgIcons from "./SvgIcons"

const Layout = (pageProps) => {
  const headerProps = {
    nav: {
      classes: pageProps.nav && pageProps.nav.classes,
      fixed: pageProps.nav && pageProps.nav.fixed,
      color: pageProps.nav && pageProps.nav.color,
      light: pageProps.nav && pageProps.nav.light,
      dark: pageProps.nav && pageProps.nav.dark,
    },
    loggedUser: pageProps.loggedUser,
    headerClasses: pageProps.headerClasses,
  }
  return (
    <div
      style={{ paddingTop: pageProps.noPaddingTop ? "0" : "72px" }}
      className={pageProps.className}
    >
      {/* Google Fonts - preload & async load to avoid render blocking */}
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:ital,wght@0,300;0,400;0,700;1,400&display=swap" />
      <Head>
        <title>{pageProps.title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NextNProgress color="#4E66F8" options={{ showSpinner: false }} />
      {!pageProps.hideHeader && <Header {...headerProps} />}
      {pageProps.listingForm || pageProps.bookingForm ? (
        <React.Fragment>
          {pageProps.listingForm && (
            <FormProvider>
              <main>{pageProps.children}</main>
            </FormProvider>
          )}
          {pageProps.bookingForm && (
            <BookingProvider>
              <main>{pageProps.children}</main>
            </BookingProvider>
          )}
        </React.Fragment>
      ) : (
        <main>{pageProps.children}</main>
      )}

      {!pageProps.hideFooter && <Footer />}
      <SvgIcons />
    </div>
  )
}

export default Layout
