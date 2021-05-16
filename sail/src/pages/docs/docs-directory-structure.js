import React from "react"
import Link from "next/link"

import { Container, Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col, Breadcrumb, BreadcrumbItem, Badge } from "reactstrap"

import DocsNav from "../../components/Docs/DocsNav"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Resume Scanner",
    },
  }
}

const DocsDirectoryStructure = () => {
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
                <a>Upload</a>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Cover Letter Generator</BreadcrumbItem>
          </Breadcrumb>
          <h1 className="hero-heading">Cover Letter Generator<Badge color="secondary"> New </Badge></h1>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default DocsDirectoryStructure
