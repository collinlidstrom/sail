import Image from "./CustomImage"
import Link from "next/link"
import React from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Media,
  Button,
} from "reactstrap"
import Icon from "./Icon"

const Support = () => {
  const team = [
    {
      image: "/content/img/avatar/avatar-1.jpg",
      link: "/team",
    },
    {
      image: "/content/img/avatar/avatar-2.jpg",
      link: "/team",
    },
    {
      image: "/content/img/avatar/avatar-3.jpg",
      link: "/team",
    },
    {
      image: "/content/img/avatar/avatar-4.jpg",
      link: "/team",
    },
    {
      image: "/content/img/avatar/avatar-5.jpg",
      link: "/team",
    },
  ]
  return (
    <React.Fragment>
      <section className="py-6 bg-gray-100">
        <Container>
          <Row>
            <Col lg="10" xl="8" className="mx-auto text-center">
              <h4 className="subtitle text-primary mb-4">
                Get Support From Real People
              </h4>
              <p className="text-muted mb-5">
                Samsa was a travelling salesman - and above it there hung a
                picture that he had recently cut out of an illustrated magazine
                and housed in a nice, gilded frame.
              </p>
              <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                {team.map((member) => (
                  <li key={member.image}>
                    <Link href={member.link}>
                      <a className="avatar avatar-border-white hover-animate mx-2  avatar-lg overflow-hidden">
                        <Image
                          src={member.image}
                          width={80}
                          height={80}
                          layout="fixed"
                          alt=""
                        />
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pb-5">
        <Container>
          <Row>
            <Col md="8" lg="6" className="mx-auto">
              <Card className="border-0 shadow mt-n5 mb-5">
                <CardHeader className="bg-primary-100 py-4 border-0">
                  <Media className="align-items-center">
                    <Media body>
                      <p className="subtitle text-sm text-primary">
                        Drop Us a Line
                      </p>
                      <h4 className="mb-0">Contact</h4>
                    </Media>
                    <Icon
                      icon="fountain-pen-1"
                      className="svg-icon-light w-3rem h-3rem ml-3 text-primary"
                    />
                  </Media>
                </CardHeader>
                <CardBody>
                  <p className="text-muted">
                    He must have tried it a hundred times, shut his eyes so that
                    he wouldn't have to look at the floundering legs, and only
                    stopped when he began to feel a mild, dull pain there that
                    he had never felt before.
                  </p>
                  <Button color="primary" href="#">
                    Let us know
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default Support
