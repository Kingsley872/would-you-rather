import React from 'react'

const Avatar = (props) => (
  <div>
    <img
      src={props.avatar}
      alt={`Avatar of ${props.author}`}
      className="avatar"
    />
  </div>
)

export default Avatar
