import React from 'react'

let counts: any = {}

export default function RenderCount() {
  const [count] = React.useState(Math.random())

  if (counts[count]) {
    counts[count] = counts[count] + 0.5
  } else {
    counts[count] = 1
  }

  return <span>(RENDERED: {counts[count]})</span>
}
