import githubMark from '../assets/github-mark.svg'

export default function Footer() {
  return (
    <div className='justify-content-center'>
      <a href="https://github.com/adamywfong">
        <img src={githubMark} className="logo" alt="github logo" />
      </a>
      <a href="https://www.linkedin.com/in/adam-fong-83062a73/">
        <img src='src/assets/LinkedIn.png' className="logo" alt="LinkedIn logo" />
      </a>
      <a href="https://www.facebook.com/adam.y.w.fong/">
        <img src="src/assets/FacebookPrimary.png" className="logo" alt="Facebook logo"/>
      </a>
    </div>
  )

}