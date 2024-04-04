import React from 'react'

const AddPlaces: React.FC = () => {
  return (
    <div className='addPlace_block'>
        <div id="project-input">
      <form>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
        </div>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <textarea id="description"></textarea>
        </div>
        <div className="form-control">
          <label htmlFor="people">People</label>
          <input type="number" id="people" step="1" min="0" max="10" />
        </div>
        <button type="submit">ADD PROJECT</button>
      </form>
    </div>
    </div>
  )
}

export default AddPlaces
