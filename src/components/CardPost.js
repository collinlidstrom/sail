import React from "react"
import Link from "next/link"
import Image from "./CustomImage"

import { Card, CardBody } from "reactstrap"

const CardPost = (props) => {
  const post = props.data
  return (
    <Card className="border-0 h-100 shadow">
      <Link href={`/blog/${post.slug}`}>
        <a className="">
          <Image
            src={`/content/${post.img}`}
            alt="..."
            width={1080}
            height={720}
            layout="intrinsic"
            className="img-fluid card-img-top"
            loading={props.eager ? "eager" : "lazy"}
            sizes="(max-width:576px) 100vw, 350px"
          />
        </a>
      </Link>
      <CardBody>
        <a
          href="#"
          className="text-uppercase text-muted text-sm letter-spacing-2"
        >
          {post.category}
        </a>
        <h5 className="my-2">
          <Link href={`/blog/${post.slug}`}>
            <a className="text-dark">{post.title}</a>
          </Link>
        </h5>
        <p className="text-gray-500 text-sm my-3">
          <i className="far fa-clock mr-2" />
          {post.date}
        </p>
        <p className="my-2 text-muted text-sm">{post.content}</p>
        <Link href={`/blog/${post.slug}`}>
          <a className="pl-0 btn btn-link">
            Continue reading <i className="fa fa-long-arrow-alt-right" />
          </a>
        </Link>
      </CardBody>
    </Card>
  )
}

export default CardPost
