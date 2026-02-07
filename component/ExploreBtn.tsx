'use client'

import Image from "next/image"

const ExploreBtn = () => {
  return (
    <div>
        <button type="button" id="explore-btn" className="mx-auto mt-3">
        <a href="#events">
            Explore More
            <Image src="/icons/arrow-down.svg" alt="Downward Arrow" width={16} height={16} className="inline-block ml-2" />
        </a>
        </button>
    </div>
  )
}

export default ExploreBtn