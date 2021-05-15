import React from "react"

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge,
  InputGroup,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  InputGroupAddon,
  Button,
} from "reactstrap"

import data from "../data/knowledge-base.json"
import Link from "next/link"
import Support from "../components/Support"
import Icon from "../components/Icon"

export async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true,
        classes: "shadow",
        color: "white",
      },
      title: "Knowledge base",
    },
  }
}

const KnowledgeBase = () => {
  return (
    <React.Fragment>
      <section className="hero py-5 py-lg-7">
        <Container className="position-relative">
          <Breadcrumb listClassName="pl-0 justify-content-center">
            <BreadcrumbItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active> Knowledge Base</BreadcrumbItem>
          </Breadcrumb>
          <h1 className="hero-heading">Knowledge Base</h1>
          <Row>
            <Col xl="8" className="mx-auto">
              <Form>
                <p className="text-muted mb-4">
                  Non adipisicing nisi commodo et consectetur est veniam
                  pariatur. Fugiat occaecat nisi incididunt nostrud anim culpa
                  eiusmod excepteur duis elit elit.
                </p>
                <InputGroup>
                  <Input type="text" placeholder="Search Something ... " />
                  <InputGroupAddon addonType="append">
                    <Button color="primary" type="submit">
                      <i className="fa fa-search" />
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="py-5 pt-lg-0 mt-lg-n5">
            {data.blocks.map((block, index) => (
              <Col key={index} lg="4" className="mb-3 mb-lg-0 text-center">
                <Card className="border-0 shadow-sm hover-animate h-100">
                  <CardBody className="p-4">
                    <div className="icon-rounded bg-primary-light mb-3">
                      <Icon
                        icon={block.icon}
                        className="text-primary w-2rem h-2rem"
                      />
                    </div>
                    <h3 className="h5">{block.name}</h3>
                    <p className="text-muted text-sm mb-0">{block.text}</p>
                    <Link href={block.link}>
                      <a className="stretched-link">
                        <span className="sr-only">See Topic</span>
                      </a>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col md="8">
              <p className="subtitle text-secondary">
                What do you need to know?
              </p>
              <h2>Choose Your Topic</h2>
            </Col>
            <Col
              md="4"
              className="d-lg-flex align-items-center justify-content-end"
            >
              <a className="text-muted text-sm" href="#">
                See all topics
                <i className="fas fa-angle-double-right ml-2" />
              </a>
            </Col>
          </Row>
          <Row>
            {data.topics.map((topic) => (
              <Col key={topic.name} lg="4" className="mb-4">
                <h3 className="h5 text-dark d-flex align-items-center mb-4">
                  <Link href={topic.link}>
                    <a className="text-reset">
                      <Badge color="secondary-light" pill className="py-1 mr-1">
                        {topic.items.length}
                      </Badge>
                      {topic.name}
                    </a>
                  </Link>
                </h3>
                <ul className="list-unstyled ml-3 text-sm">
                  {topic.items.map((item, index) => (
                    <li key={index} className="mb-2">
                      <Link href={topic.link}>
                        <a className="text-muted">
                          <i className="far fa-file mr-2" />
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <Support />
    </React.Fragment>
  )
}

export default KnowledgeBase
