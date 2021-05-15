import React from "react"
import Link from "next/link"

import { Card, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap"
import Image from "../components/CustomImage"

const CardTeam = (props) => {
  const data = props.data
  return (
    <Card className="border-0 hover-animate bg-transparent">
      <Link href={data.link}>
        <a className="position-relative">
          <div className="card-img-top team-img">
            <Image
              src={`/content/img/avatar/${data.img}`}
              alt={data.title}
              width={408}
              height={504}
              layout="responsive"
              className="img-fluid"
              sizes="(max-width:576px) 100vw, (max-width:1199px) 30vw, 350px"
            />
          </div>
          <div className="team-circle false" />
        </a>
      </Link>
      <CardBody className="team-body text-center">
        <CardTitle tag="h6">{data.title}</CardTitle>
        <CardSubtitle tag="p" className="text-muted text-xs text-uppercase">
          {data.content}
        </CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default CardTeam
