import Project from "../Project"; 

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="row">
        <Project 
          name="codeMingle"
          image="/assets/codeMingle.jpeg"
          github="https://github.com/DariaPressley/codemingle"
          deployed="https://murmuring-taiga-79602-011f1c7742f6.herokuapp.com/"
        />
        <Project 
          name="singalong"
          image="/assets/singalong.png"
          github="https://github.com/adamywfong/singalong"
          deployed="https://adamywfong.github.io/singalong/"
        />
        <Project 
          name="Tech Talkers"
          image="/assets/tech-talkers.jpeg"
          github="https://github.com/adamywfong/tech-blog"
          deployed="https://tech-talkers-e85792de0744.herokuapp.com/"
        />
        <Project 
          name="Note Taker"
          image="/assets/note-taker.jpeg"
          github="https://github.com/adamywfong/note-taker"
          deployed="https://fierce-spire-82930-4aa67cc276ab.herokuapp.com/"
        />
        <Project 
          name="Weather Dashboard"
          image="/assets/weather-dashboard.jpeg"
          github="https://github.com/adamywfong/weather-dashboard"
          deployed="https://adamywfong.github.io/weather-dashboard/"
        />
        <Project 
          name="Code Quiz"
          image="/assets/code-quiz.jpeg"
          github="https://github.com/adamywfong/code-quiz"
          deployed="https://adamywfong.github.io/code-quiz/"
        />
      </div>
    </div>
  );
}
