import React from "react"
import { useSelector } from "react-redux"

const Home = () => {
  const items = useSelector((state) => state.items)

  let itemList = items.map((item) => {
    return (
      <>
        <div key={item.id}>
          <div>
            <span>{item.title}</span>
            <span to="/">
              {" "}
              <i>add</i>
            </span>
          </div>
          <div>
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      </>
    )
  })

  return (
    <div>
      {itemList}
    </div>
  )
}

export default Home
