import React from "react"

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Media,
  CardText,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ListGroupItem,
  ListGroup,
} from "reactstrap"

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
      title: "Knowledge base - Topic",
    },
  }
}

const KnowledgeBaseTopic = () => {
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
            <BreadcrumbItem>
              <Link href="/knowledge-base">
                <a>Knowledge Base</a>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>How to rent your apartment?</BreadcrumbItem>
          </Breadcrumb>
          <h1 className="hero-heading">How to rent your apartment?</h1>
          <Row>
            <Col xl="8" className="mx-auto">
              <p className="text-muted">
                Non adipisicing nisi commodo et consectetur est veniam pariatur.
                Fugiat occaecat nisi incididunt nostrud anim culpa eiusmod
                excepteur duis elit elit.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Container>
          <Row>
            <Col lg="8">
              <div className="text-content">
                <p>
                  <strong>Pellentesque habitant morbi tristique</strong>{" "}
                  senectus et netus et malesuada fames ac turpis egestas.
                  Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor
                  sit amet, ante. Donec eu libero sit amet quam egestas semper.{" "}
                  <em>Aenean ultricies mi vitae est.</em> Mauris placerat
                  eleifend leo. Quisque sit amet est et sapien ullamcorper
                  pharetra. Vestibulum erat wisi, condimentum sed,{" "}
                  <code>commodo vitae</code>, ornare sit amet, wisi. Aenean
                  fermentum, elit eget tincidunt condimentum, eros ipsum rutrum
                  orci, sagittis tempus lacus enim ac dui.{" "}
                  <a href="#">Donec non enim</a> in turpis pulvinar facilisis.
                  Ut felis.
                </p>
                <h2>Header Level 2</h2>
                <ol>
                  <li>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  </li>
                  <li>Aliquam tincidunt mauris eu risus.</li>
                </ol>
                <blockquote className="blockquote blockquote-primary bg-gray-100 p-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus magna. Cras in mi at felis aliquet congue. Ut a est
                  eget ligula molestie gravida. Curabitur massa. Donec eleifend,
                  libero at sagittis mollis, tellus est malesuada tellus, at
                  luctus turpis elit sit amet quam. Vivamus pretium ornare est.
                </blockquote>
                <h3>Header Level 3</h3>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                  libero sit amet quam egestas semper. Aenean ultricies mi vitae
                  est. Mauris placerat eleifend leo. Quisque sit amet est et
                  sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                  sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum,
                  elit eget tincidunt condimentum, eros ipsum rutrum orci,
                  sagittis tempus lacus enim ac dui. Donec non enim in turpis
                  pulvinar facilisis. Ut felis. Praesent dapibus, neque id
                  cursus faucibus, tortor neque egestas augue, eu vulputate
                  magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
                  tincidunt quis, accumsan porttitor, facilisis luctus, metus
                </p>
              </div>
              <Row className="my-5">
                <Col lg="6" className="mx-auto">
                  <Card className="shadow border-0 text-center">
                    <CardHeader className="bg-gray-100 border-0">
                      <CardText tag="h4" className="h5 card-text">
                        Was this article helpful?
                      </CardText>
                    </CardHeader>
                    <CardBody className="py-4">
                      <Button color="success" className="mr-1">
                        <i className="fa fa-thumbs-up mr-2" />
                        Yes
                      </Button>
                      <Button color="danger">
                        <i className="fa fa-thumbs-down mr-2" />
                        No
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col lg="4">
              <div className="pl-xl-4">
                <Card className="border-0 shadow mb-5">
                  <CardHeader className="bg-primary-100 py-4 border-0">
                    <Media className="align-items-center">
                      <Media body>
                        <p className="subtitle text-sm text-primary">
                          Need more help?
                        </p>
                        <h4 className="mb-0">Similar Topics</h4>
                      </Media>
                      <Icon
                        icon="screwdriver-1"
                        className="svg-icon-light w-3rem h-3rem ml-3 text-primary"
                      />
                    </Media>
                  </CardHeader>
                  <ListGroup flush className="text-sm my-3">
                    <Link href="/knowledge-base-topic" passHref>
                      <ListGroupItem tag="a" action>
                        <i className="far fa-file mr-2" />
                        Sint consequat aliquip?
                      </ListGroupItem>
                    </Link>
                    <Link href="/knowledge-base-topic" passHref>
                      <ListGroupItem tag="a" action>
                        <i className="far fa-file mr-2" />
                        Adipisicing voluptate magna quis sunt dolor velit.
                      </ListGroupItem>
                    </Link>
                    <Link href="/knowledge-base-topic" passHref>
                      <ListGroupItem tag="a" action>
                        <i className="far fa-file mr-2" />
                        Ad pariatur anim magna?
                      </ListGroupItem>
                    </Link>
                    <Link href="/knowledge-base-topic" passHref>
                      <ListGroupItem tag="a" action>
                        <i className="far fa-file mr-2" />
                        officia aliqua fugiat ex?
                      </ListGroupItem>
                    </Link>
                    <Link href="/knowledge-base-topic" passHref>
                      <ListGroupItem tag="a" action>
                        <i className="far fa-file mr-2" />
                        Sint consequat aliquip?
                      </ListGroupItem>
                    </Link>
                    <Link href="/knowledge-base-topic" passHref>
                      <ListGroupItem tag="a" action>
                        <i className="far fa-file mr-2" />
                        Adipisicing voluptate magna quis sunt dolor velit.
                      </ListGroupItem>
                    </Link>
                    <Link href="/knowledge-base-topic" passHref>
                      <ListGroupItem tag="a" action>
                        <i className="far fa-file mr-2" />
                        Ad pariatur anim magna?
                      </ListGroupItem>
                    </Link>
                    <Link href="/knowledge-base-topic" passHref>
                      <ListGroupItem tag="a" action>
                        <i className="far fa-file mr-2" />
                        officia aliqua fugiat ex?
                      </ListGroupItem>
                    </Link>
                  </ListGroup>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Support />
    </React.Fragment>
  )
}

export default KnowledgeBaseTopic
