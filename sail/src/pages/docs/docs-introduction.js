import React from "react"
import { useState } from "react"
import Link from "next/link"

import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap"

import DocsNav from "../../components/Docs/DocsNav"
import FileUpload from "../../components/Upload/FileUpload"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Upload Application Documents",
    },
  }
}

const DocsIntroduction = () => {

    var [files, setFiles] = useState(null)

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
            <BreadcrumbItem active>Resume</BreadcrumbItem>
          </Breadcrumb>
          <h1 className="hero-heading">Upload Resume</h1>
            <FileUpload updateFilesCb={setFiles}/>
            {files != null &&
                console.log(' file saved ')
            }
        </Container>
      </section>
    </React.Fragment>
  )
}

export default DocsIntroduction
