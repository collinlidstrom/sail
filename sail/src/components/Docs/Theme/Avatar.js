import Image from "../../CustomImage"
import React from "react"

import { Row, Col } from "reactstrap"

const Avatar = () => {
  return (
    <div id="avatar" className="docs-item element">
      <h5 className="text-uppercase mb-4">Avatar</h5>
      <div className="docs-desc">
        <p className="lead">
          Custom classes to format your user images. You can combine avatar
          classes with padding utility class to give to the image a nice white
          border.
        </p>
      </div>
      <div className="mt-5">
        <Row className="align-items-center text-center mb-5">
          <Col xs="auto">
            <div className="avatar mb-3 p-2 avatar-xxl ">
              <div className="position-relative overflow-hidden rounded-circle h-100">
                <Image
                  src="/content/img/avatar/avatar-0.jpg"
                  width={160}
                  height={160}
                  layout="fixed"
                  alt="Image"
                  loading="eager"
                />
              </div>
            </div>
            <code className="d-block">.avatar-xxl p-2</code>
          </Col>
          <Col xs="auto">
            <div className="avatar mb-3 avatar-xxl overflow-hidden">
              <Image
                src="/content/img/avatar/avatar-1.jpg"
                width={160}
                height={160}
                layout="fixed"
                alt="Image"
              />
            </div>
            <code className="d-block">.avatar-xxl</code>
          </Col>
          <Col xs="auto">
            <div className="avatar mb-3 avatar-xl overflow-hidden">
              <Image
                src="/content/img/avatar/avatar-2.jpg"
                width={112}
                height={112}
                layout="fixed"
                alt="Image"
              />
            </div>
            <code className="d-block">.avatar-xl</code>
          </Col>
          <Col xs="auto">
            <div className="avatar mb-3 avatar-lg overflow-hidden">
              <Image
                src="/content/img/avatar/avatar-3.jpg"
                width={80}
                height={80}
                layout="fixed"
                alt="Image"
              />
            </div>
            <code className="d-block">.avatar-lg</code>
          </Col>
          <Col xs="auto">
            <div className="avatar mb-3 overflow-hidden">
              <Image
                src="/content/img/avatar/avatar-4.jpg"
                width={48}
                height={48}
                layout="fixed"
                alt="Image"
              />
            </div>
            <code className="d-block">.avatar</code>
          </Col>
          <Col xs="auto">
            <div className="avatar mb-3 avatar-sm overflow-hidden">
              <Image
                src="/content/img/avatar/avatar-5.jpg"
                width={40}
                height={40}
                layout="fixed"
                alt="Image"
              />
            </div>
            <code className="d-block">.avatar-sm</code>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Avatar
