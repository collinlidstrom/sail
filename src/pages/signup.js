import React from "react"
import Link from "next/link"

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap"
import Image from "../components/CustomImage"
import Icon from "../components/Icon"

export async function getStaticProps() {
  return {
    props: {
      title: "Sign up",
      hideHeader: true,
      hideFooter: true,
      noPaddingTop: true,
    },
  }
}

const Signup = () => {
  return (
    <Container fluid className="px-3">
      <Row className="min-vh-100">
        <Col md="8" lg="6" xl="5" className="d-flex align-items-center">
          <div className="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div className="mb-4">
              <img
                src="/content/svg/SAIL.PNG"
                alt="..."
                style={{ maxWidth: "4rem" }}
                className="img-fluid mb-3"
              />
              <h2>Sign up</h2>
              <p className="text-muted">
                Welcome to Sail! We are excited to offer you the fastest and most convenient platform to use when applying to open job listings. Our platform is engineered to allow you to apply in one simple process. To begin your career search please fill in the following information to create an account.
              </p>
            </div>
            <Form className="form-validate">
              <FormGroup>
                <Label for="loginUsername" className="form-label">
                  Email Address
                </Label>
                <Input
                  name="loginUsername"
                  id="loginUsername"
                  type="email"
                  placeholder="name@address.com"
                  autoComplete="off"
                  required
                />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label for="loginPassword" className="form-label">
                  Password
                </Label>
                <Input
                  name="loginPassword"
                  id="loginPassword"
                  type="email"
                  placeholder="Password"
                  required
                />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label for="loginPassword2" className="form-label">
                  Confirm your password
                </Label>
                <Input
                  name="loginPassword2"
                  id="loginPassword2"
                  type="email"
                  placeholder="Password"
                  required
                />
              </FormGroup>
              <Button size="lg" color="primary" block>
                Sign up
              </Button>
            </Form>
            <hr data-content="OR" className="my-3 hr-text letter-spacing-2" />
            <Button color="outline-primary" block className="btn-social mb-3">
              <i className="fa-2x fa-facebook-f fab btn-social-icon" />
              Connect
              <span className="d-none d-sm-inline">with Facebook</span>
            </Button>
            <Button color="outline-muted" block className="btn-social mb-3">
              <i className="fa-2x fa-google fab btn-social-icon" />
              Connect
              <span className="d-none d-sm-inline">with Google</span>
            </Button>
            <hr className="my-4" />
            <p className="text-sm text-muted">
              By signing up you agree to Directory's{" "}
              <a href="#">Terms and Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </p>

            <Link href="/">
              <a className="close-absolute mr-md-5 mr-xl-6 pt-5">
                <Icon icon="close-1" className="w-3rem h-3rem" />
              </a>
            </Link>
          </div>
        </Col>
        <Col md="4" lg="6" xl="7" className="d-none d-md-block">
          <div className="bg-cover h-100 mr-n3">
            <Image
              src={`/content/img/photo/sailboat.png`}
              alt=""
              className="bg-image"
              loading="eager"
              layout="fill"
              priority={true}
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup
