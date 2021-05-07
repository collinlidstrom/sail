import React from "react"
import Link from "next/link"

import { Card, CardBody, CardTitle, CardText } from "reactstrap"
import Image from "./CustomImage"

const CardPoster = (props) => {
  const data = props.data
  return (
    <Card className="card-poster gradient-overlay hover-animate mb-4 mb-lg-0">
      <Link href={data.link}>
        <a className="tile-link" />
      </Link>
      {/* Loading eager set for IE compatibility */}
      <Image
        src={`/content/${data.img}`}
        layout="fill"
        className="bg-image"
        alt="Card image"
        loading="eager"
        sizes="(max-width: 776px) 100vw, 776px"
      />
      <CardBody className="card-body overlay-content">
        <CardTitle tag="h6" className="card-title text-shadow text-uppercase">
          {data.title}
        </CardTitle>
        <CardText className="card-text text-sm">{data.subtitle}</CardText>
      </CardBody>
    </Card>
  )
}

export default CardPoster
