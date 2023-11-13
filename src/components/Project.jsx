function Project({name,image,github,deployed}) {
  return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="image-container">
          <p className="project-links centered">
            <a href={deployed}>{name}</a>
            <a href={github}>
              <img src='src/assets/github-mark.svg' className="p-logo" alt="GitHub logo" />
            </a>
          </p>
          <img className="project-image" src={image} />
        </div>
      </div>
  )

}

export default Project;