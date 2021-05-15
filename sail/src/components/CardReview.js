import React from "react"

import { Media } from "reactstrap"

import Stars from "./Stars"
import Image from "./CustomImage"

const CardReview = (props) => {
  const data = props.data
  return (
    <Media className="d-block d-sm-flex review">
      <div className="text-md-center mr-4 mr-xl-5">
        <div className="d-block p-2 mb-2 avatar avatar-xl">
          <div className="position-relative overflow-hidden h-100 rounded-circle">
            {/* Loading eager set for IE compatibility */}
            <Image
              src={`/content/img/avatar/${data.avatar}`}
              alt={data.title}
              layout="fixed"
              width={96}
              height={96}
            />
          </div>
        </div>

        <span className="text-uppercase text-muted text-sm">{data.date}</span>
      </div>
      <Media body>
        <h6 className="mt-2 mb-1">{data.title}</h6>
        <div className="mb-2">
          <Stars size="xs" color="text-primary" stars={data.stars} />
        </div>
        <p className="text-muted text-sm">{data.content}</p>
      </Media>
    </Media>
  )
}

export default CardReview
