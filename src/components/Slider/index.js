import React, { useState } from "react"
import "./index.scss"
import { Typography } from "antd"
import Bermuda from "../../images/coronavirus.svg"

const testimonials = [
  {
    user: "Jacob Jose",
    company: "Adobe",
    comment:
      "Spălați-vă cât mai des pe mâini cu apă și săpun sau folosiți o soluție dezinfectantă pe bază de alcool",
    avatar: Bermuda,
  },
  {
    user: "Jackline Red",
    company: "Microsoft",
    comment:
      "Spălați-vă cât mai des pe mâini cu apă și săpun sau folosiți o soluție dezinfectantă pe bază de alcool",
    avatar: Bermuda,
  },
  {
    user: "Jeremy Lee",
    company: "Disney",
    comment: "Used by trusted brand and thousands of designers worldwide",
    avatar:
      "https://images.unsplash.com/photo-1572631382901-cf1a0a6087cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80",
  },
  {
    user: "Kate Wisley",
    company: "Adobe",
    comment: "Used by trusted brand and thousands of designers worldwide",
    avatar:
      "https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixlib=rb-1.2.1&auto=format&fit=crop&w=734&q=80",
  },
  {
    user: "Harry Ben",
    company: "CodePen",
    comment: "Used by trusted brand and thousands of designers worldwide",
    avatar:
      "https://images.unsplash.com/photo-1556630820-200f321dce4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=624&q=80",
  },

  // {
  //   user: "Michael Thompson",
  //   company: "Netflix",
  //   comment: "Used by trusted brand and thousands of designers worldwide",

  //   avatar:
  //     "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=964&q=80",
  // },
]

const SliderItem = ({ index, avatar, current, position, title }) => {
  // const [classNames, setClassNames] = React.useState('slider-item');

  //   React.useEffect(()=>{

  //     if(position===450){
  //       let tempClassNames = classNames;
  //       setClassNames(tempClassNames += " slide--current")
  //     }

  //     else if(position===-150){
  //       setTimeout(()=>{
  //          let tempClassNames = classNames;
  //          setClassNames(tempClassNames += " slide--first")
  //       }, 1000)
  //     } else {
  //       setClassNames('slider-item')
  //     }
  //   }, [position])
  let classNames = "slider-item"

  if (position === 0) classNames += " slide--current"
  else if (position === 1200) classNames += " slide--first"

  const wrapperTransform = {
    transform: `translateX(${position}px)`,
  }

  return (
    <div className="slider-item-wrapper" style={wrapperTransform}>
      <li className={classNames}>
        <img src={avatar} />
        <Typography.Title className="slider-item-title" level="2">
          {title}
        </Typography.Title>
      </li>
    </div>
  )
}

const SliderControl = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className="button">
      >
    </button>
  )
}

const SliderContent = ({ user, company, comment }) => {
  const [userState, setUser] = React.useState(comment)
  const [className, setClass] = React.useState("show")

  React.useEffect(() => {
    setClass("hide")

    setTimeout(() => {
      setUser(comment)
      setClass("show")
    }, 400)
  }, [comment])

  return (
    <>
      <Typography.Title level="4">Recomandări</Typography.Title>
      <div className="hidden">
        <p className={className}>{userState}</p>
      </div>
      {/* <p>{company}</p> */}
      {/* <p>{comment}</p> */}
    </>
  )
}
const Carousel = () => {
  const slidesSize = testimonials.length

  const [current, setCurrent] = React.useState(1)
  const [sliders, setSliders] = React.useState(testimonials)
  const [positions, setPositions] = React.useState([
    ...[-300, 0, 300, 600, 1200],
  ])
  const handleNextSlide = () => {
    const next = current + 1
    const currentNew = next === slidesSize ? 0 : next
    let newPositions = positions.slice()

    // newPositions.push(newPositions.shift())
    newPositions.unshift(newPositions.pop())

    setPositions(newPositions)
    setCurrent(currentNew)
  }

  const handleSlideClick = index => current !== index && setCurrent(index)

  const currentTestimonial = sliders[current]

  return (
    <div className="grid">
      <div className="flex-container slider-content">
        <SliderContent
          user={currentTestimonial.user}
          company={currentTestimonial.company}
          comment={currentTestimonial.comment}
        />
      </div>
      <div className="flex-container">
        <ul className="slider-wrapper">
          {sliders.map((testimonial, index) => (
            <SliderItem
              key={index}
              avatar={testimonial.avatar}
              title={testimonial.user}
              index={index}
              current={current}
              handleClick={handleSlideClick}
              position={positions[index]}
            />
          ))}
        </ul>
        <SliderControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextSlide}
        />
      </div>
    </div>
  )
}

export default Carousel
