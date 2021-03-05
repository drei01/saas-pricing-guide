import Img from "gatsby-image"
import { Link } from "gatsby-plugin-modal-routing"
import PropTypes from "prop-types"
import React from "react"
import { Feature } from "."

export const Card = (props) => {
  const { Name, LogoUrl, Description, FreePeriod, slug } = props

  return (
    <div className="bg-white dark:bg-blue-900 h-full shadow-sm rounded-md overflow-hidden hover:bg-blue-100 dark:hover:bg-blue-800">
      <Link to={`/${slug}`} state={{ navigation: {} }} asModal>
        <div className="bg-blue-300 h-32 relative">
          <img
            src={LogoUrl}
            alt={Name}
            class="object-cover min-w-full h-full opacity-10"
          />
          <img src={LogoUrl} alt={Name} class="absolute bottom-0" />
        </div>
        <div className="p-5 pb-1">
          <h1 className="text-2xl text-blue-500 dark:text-blue-300 font-bold leading-snug">
            {Name}
          </h1>
          <p className="text-base text-blue-900 dark:text-blue-400 mb-5 font-medium">
            {Description}
          </p>
          <Feature label="Free Period" value={FreePeriod} />
        </div>
      </Link>
    </div>
  )
}

Card.propTypes = {
  country: PropTypes.string.isRequired,
  image: PropTypes.shape({
    localFiles: PropTypes.array,
  }).isRequired,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    current: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string),
  }),
  slug: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}

Card.defaultProps = {
  navigation: {},
}
