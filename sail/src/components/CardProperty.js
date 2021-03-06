import React from "react"
import Link from "next/link"

import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import Image from "./CustomImage"
import Icon from "./Icon"

const CardProperty = (props) => {
  const data = props.data
  return (
    <Card className="h-100 border-0 shadow">
      <div className="card-img-top overflow-hidden gradient-overlay">
        <Image
          src={`/content/${data.img}`}
          width={1350}
          height={900}
          layout="responsive"
          alt={data.title}
          loading={props.eager ? "eager" : "lazy"}
          className="img-fluid"
          sizes="(max-width:576px) 100vw, (max-width:991px) 50vw, 280px"
        />
        <Link href={data.link}>
          <a className="tile-link" />
        </Link>
        <div className="card-img-overlay-top text-right">
          <a href="#" className="card-fav-icon position-relative z-index-40">
            <Icon icon="heart-1" className="text-white" />
          </a>
        </div>
      </div>
      <CardBody className="d-flex align-items-center">
        <div className="w-100">
          <CardTitle tag="h6">
            <Link href={data.link}>
              <a className="text-decoration-none text-dark">{data.title}</a>
            </Link>
          </CardTitle>
          <CardSubtitle className="text-sm text-secondary mb-2" tag="p">
            <i className="fa fa-map-marker text-secondary opacity-4 mr-1" />
            {data.location}
          </CardSubtitle>
          <p className="text-sm text-muted text-uppercase">{data.type}</p>
          <p className="card-text d-flex justify-content-between text-gray-800 text-sm">
            <span className="mr-1">
              <i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />
              {data.meters} m<sup>2</sup>
            </span>
            <span className="mr-1">
              <i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />
              {data.bedrooms}
            </span>
            <span className="mr-1">
              <i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />
              {data.bathrooms}
            </span>
            <span>
              <i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />
              {data.price}
            </span>
          </p>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardProperty
