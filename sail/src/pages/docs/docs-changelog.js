import React from "react"
import Link from "next/link"

import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
} from "reactstrap"

import DocsNav from "../../components/Docs/DocsNav"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Docs Changelog",
    },
  }
}

const DocsChangelog = () => {
  return (
    <React.Fragment>
      <section className="hero py-5 py-lg-7">
        <Container className="position-relative">
          <Breadcrumb listClassName="justify-content-center pl-0">
            <BreadcrumbItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/docs/docs-introduction">
                <a>Documentation</a>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Changelog</BreadcrumbItem>
          </Breadcrumb>
          <h1 className="hero-heading">Changelog</h1>
        </Container>
      </section>
      <section className="py-6">
        <Container fluid>
          <Row className="px-xl-5">
            <Col lg="2">
              <DocsNav />
            </Col>
            <Col lg="10" xl="8" className="docs-content">
              <div id="version1.1.0" className="docs-item">
                <h5 className="text-uppercase mb-4">Version 1.1.0</h5>
                <div className="docs-desc">
                  <p className="text-muted">December 15, 2020</p>
                </div>
                <div className="mt-5">
                  <Card className="bg-gray-100 border-0">
                    <CardBody className="py-4">
                      <pre className="card-text">
                        {"-"} <strong>new pages:</strong> Invoice (
                        <code>/user-invoice</code>),
                        {"\n"}
                        &nbsp;&nbsp;User messages (<code>/user-messages</code>),
                        {"\n"}
                        &nbsp;&nbsp;User messages - Conversation (
                        <code>/user-messages-detail</code>),{"\n"}
                        &nbsp;&nbsp;Knowledge Base (<code>/knowledge-base</code>
                        ),{"\n"}
                        &nbsp;&nbsp;Knowledge Base - Topic(
                        <code>/knowledge-base-topic</code>),{"\n"}
                        &nbsp;&nbsp;Terms &amp; Conditions (<code>/terms</code>)
                        {"\n"}- <strong>next/image:</strong> &lt;img&gt;
                        elements converted to new Next.js Image component.{" "}
                        <a
                          href="https://nextjs.org/docs/api-reference/next/image"
                          target="_blank"
                        >
                          Read more
                        </a>
                        {"\n"}- <strong>new icon component:</strong> new
                        component for using Orion Icons.{" "}
                        <Link href="/docs/components-directory#icons-directory">
                          <a>Read more</a>
                        </Link>
                        {"\n"}- <strong>new svg icons component:</strong> new
                        component for cached loading of svg sprites.{"\n"}-{" "}
                        <strong>new:</strong> much simpler Map component
                        importing{"\n"}-{" "}
                        <strong>improved optimalization & performance</strong>
                        {"\n"}- <strong>improved IE support</strong>
                        {"\n"}- <strong>new:</strong> Object-Fit polyfill
                        (_app.js, package.json){"\n"}-{" "}
                        <strong>updated packages:</strong> NPM update, Next.js
                        (10.0.3){"\n"}- <strong>new:</strong> next-react-svg,
                        next-compose-plugin (next.config.js){"\n"}-{" "}
                        <strong>fixed:</strong> named exports
                        {"\n"}- <strong>fixed:</strong> display issues in
                        Comparison Page (compare.js)
                        {"\n"}- <strong>improved:</strong> Google Fonts Loading
                        (package.json, Layout.js)
                        {"\n"}- <strong>improved:</strong> Font Awesome moved to
                        _app.js & removed CDN (_app.js, Layout.js)
                        {"\n"}- <strong>improved:</strong> Swiper SCSS moved
                        into _swiper.scss & removed CDN (_app.js, Layout.js)
                      </pre>
                    </CardBody>
                  </Card>
                </div>
              </div>
              <div id="version1.0.0" className="docs-item">
                <h5 className="text-uppercase mb-4">Version 1.0.0</h5>
                <div className="docs-desc">
                  <p className="text-muted">June 30, 2020</p>
                </div>
                <div className="mt-5">
                  <Card className="bg-gray-100 border-0">
                    <CardBody className="py-4">Initial Release</CardBody>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default DocsChangelog
