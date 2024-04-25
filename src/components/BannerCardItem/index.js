import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={`reusable-banner-card ${className}`}>
      <div>
        <h1 className="main-heading">{headerText}</h1>
        <p className="desc">{description}</p>
        <button className="show-more-btn">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
