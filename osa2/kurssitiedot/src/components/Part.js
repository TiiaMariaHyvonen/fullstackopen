import React from 'react'

const Part = ({content, exercises}) => {
    return(
      <div>
        <p>
          {content} {exercises}
        </p>
      </div>
    )
  }

  export default Part