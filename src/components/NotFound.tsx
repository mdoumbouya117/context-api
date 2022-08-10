import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {

  return (
    <div>
        <h1>Not found!</h1>
        <p>Sorry we can't find that page!</p>
        <Link to={"/"}>Back to Home</Link>
    </div>
  )
}
