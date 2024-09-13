import * as React from "react";
import resume from '../images/resume.png';

function Index(props) {

    const highlightColor = (e) => {                
        const id = e.currentTarget.id;
        document.getElementById(`${id}`).classList.add('selected-poly');
     
    }

    const highlightColorReset = (e) => {
        const elements = ["github-icon", "projects-icon", "about-icon", "resume-icon"];
        const id = e.currentTarget.id;
        document.getElementById(`${id}`).classList.remove('selected-poly');
                          
    }

    const handleIconHighlight = (e) => {
        const id = e.currentTarget.previousSibling.id;
        document.getElementById(`${id}`).classList.add('selected-poly');
    }



    const openLink = (e) => {
        const urls = {
            github: "https://github.com/awolfden",
            resume: "resume",
            about: "about",
            projects: "projects"            
        }

        let url = e.currentTarget.id
        switch (url) {
          case "github-poly":            
            url = urls.github;
            break;
          case "resume-poly":
            url = urls.resume;
            break;
          case "about-poly":
            url = urls.about;
            break; 
          case "projects-poly":
            url = urls.projects;
            break;
          default:
            console.log("no url found")
        }

        if(url === urls.github){
          window.open(url, "_blank");
        } else {
          props.updatePage(url)
        }

    }

    const Legend = () => {
        return <div className="flex width-25">
            <p className="py-10 mt-0 pl-0"><span style={{color: "#e76f50"}}>&#9632;</span> resume</p>
            <p className="py-10 mt-0"><span style={{color: "#264653"}}>&#9632;</span> about</p>
            <p className="py-10 mt-0"><span style={{color: "#e9c46a"}}>&#9632;</span> projects</p>
            <p className="py-10 mt-0"><span style={{color: "#2a9d8f"}}>&#9632;</span> github</p>
        </div>
        
    }

    const SvgBackground = (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366.03 621.01"
          style={{minWidth: "1170px"}}
          {...props}
        >
          
          <g 
            id="github-poly"
            onMouseEnter={highlightColor}
            onMouseLeave={highlightColorReset}
            onClick={openLink}
            >
            <polyline
              points="497.03 428 885.03 2 1364.03 2 1364.03 424 497.03 428"
              style={{
                fill: "#2a9d8f",
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}        
            />
          </g>
          <g 
            id="github-icon"
                onMouseEnter={handleIconHighlight}
                onClick={openLink}
            >
            <g
              id="e"
              style={{
                opacity: 0.4,
              }}
            >
              <g>
                <path d="M915.24,342h-5.89c-.25-.04-.5-.09-.75-.11-4.01-.23-7.99-.64-11.93-1.41-7.94-1.55-15.42-4.31-22.4-8.38-9.73-5.68-17.85-13.18-24.54-22.22-6.02-8.13-10.15-17.14-12.36-27.01-.96-4.3-1.55-8.64-1.78-13.04-.03-.61-.15-1.22-.23-1.82,0-1.92,0-3.84,0-5.76,.08-.59,.19-1.17,.22-1.76,.16-3.11,.51-6.2,1.03-9.28,1.07-6.3,2.93-12.35,5.61-18.15,3.48-7.53,8.16-14.23,13.83-20.26,5.73-6.09,12.15-11.29,19.47-15.34,10.66-5.9,22.13-8.78,34.27-9.09,5.58-.14,11.13,.18,16.63,1.14,7.02,1.23,13.74,3.37,20.08,6.62,13.2,6.78,23.68,16.57,31.56,29.1,7.18,11.41,10.64,23.96,10.93,37.41,.13,6.12-.21,12.19-1.4,18.21-1.57,7.91-4.33,15.37-8.4,22.34-5.07,8.69-11.64,16.09-19.46,22.38-12.29,9.91-26.35,15.24-42.09,16.2-.8,.05-1.6,.15-2.41,.23Zm65.44-77.86c.02-2.82-.33-7.25-1.02-11.29-1.31-7.62-3.88-14.79-7.77-21.47-3.91-6.72-8.88-12.56-14.67-17.72-11.51-10.25-24.96-15.88-40.35-16.81-5.3-.32-10.57-.09-15.82,.72-5.8,.9-11.39,2.53-16.74,4.95-6.79,3.07-12.84,7.24-18.28,12.31-5.57,5.18-10.32,11.01-14.02,17.67-4.93,8.86-7.5,18.4-8.04,28.49-.29,5.36-.03,10.7,.84,16.01,1.1,6.66,3.16,12.99,6.25,18.99,3.48,6.76,8.05,12.7,13.47,18.01,5.87,5.75,12.47,10.46,19.99,13.83,7.6,3.41,15.58,5.19,23.89,5.61,5.6,.28,11.17-.03,16.69-1.02,7.09-1.27,13.79-3.65,20.07-7.18,7.22-4.06,13.44-9.32,18.9-15.52,5.52-6.28,9.82-13.3,12.67-21.17,2.74-7.56,3.95-15.38,3.95-24.4Z" />
                <path d="M902.35,281.91c-.54-.06-1.09-.13-1.63-.19-3.01-.32-6-.81-8.94-1.56-4.06-1.03-7.87-2.63-11.34-5.02-4.1-2.83-6.71-6.73-8.2-11.43-.83-2.62-1.25-5.31-1.44-8.04-.21-2.97-.07-5.92,.37-8.87,.7-4.65,2.67-8.69,5.71-12.23,.17-.19,.33-.39,.5-.58,.01-.02,.02-.04,.06-.11-1.77-5.75-.99-11.41,.93-17.08,.91,.1,1.8,.17,2.68,.3,5.28,.77,10.03,2.82,14.29,6.01,.3,.23,.58,.29,.94,.19,3.5-.91,7.05-1.47,10.65-1.74,3.39-.25,6.78-.23,10.17,.05,3.17,.26,6.31,.72,9.42,1.41,.34,.08,.6,0,.89-.2,2.41-1.58,4.91-3.02,7.56-4.15,2.11-.91,4.35-1.36,6.62-1.63,.91-.11,1.82-.17,2.82-.26,.27,.93,.57,1.81,.78,2.72,.76,3.26,1.18,6.55,.92,9.9-.08,1.06-.26,2.12-.43,3.17-.05,.3-.03,.51,.18,.75,3.77,4.07,5.78,8.94,6.55,14.38,.75,5.29,.37,10.51-1.03,15.66-1.43,5.26-4.46,9.37-8.9,12.5-3.81,2.69-8.01,4.4-12.6,5.21-2.06,.36-4.13,.65-6.22,.79-.2,.01-.41,.06-.74,.1,.3,.17,.48,.27,.66,.38,1.09,.67,2.19,1.32,3.25,2.03,2.25,1.52,3.58,3.67,4.18,6.29,.31,1.35,.52,2.71,.5,4.11-.03,3.05-.02,6.1,.02,9.15,.04,2.54,.15,5.08,.25,7.61,.01,.26,.11,.54,.25,.76,.94,1.49,2.22,2.64,3.71,3.55,.15,.09,.3,.16,.44,.26,.65,.46,.63,1.35-.07,1.74-.29,.16-.64,.28-.97,.31-3.07,.25-5.83-.46-8.17-2.56-1.1-.99-1.61-2.22-1.74-3.65-.04-.49-.05-.98-.05-1.47,0-4.44,0-8.88,0-13.31,0-.49-.02-.98-.06-1.47-.11-1.21-.6-2.21-1.63-2.91-.56-.38-1.12-.77-1.86-.9-.02,.19-.06,.35-.06,.51,0,6.23,0,12.46,0,18.69,0,1.49,.07,2.98,.43,4.45,.18,.76,.48,1.45,.96,2.07,.68,.87,1.14,1.84,1.36,2.94-.29,.29-.67,.31-1.01,.25-1.8-.29-3.55-.72-5.09-1.75-1.03-.69-1.8-1.62-2.34-2.75-1.02-2.13-1.51-4.39-1.51-6.75,0-5.93,0-11.86,0-17.8,0-.25,0-.5,0-.79h-3.88v.77c0,5.87,0,11.74,0,17.6,0,2.18-.38,4.28-1.17,6.31-1.04,2.68-3,4.29-5.76,4.95-.68,.16-1.39,.22-2.08,.31-.48,.06-.87-.12-1.18-.5,.42-.71,.82-1.42,1.25-2.1,.92-1.46,1.31-3.1,1.54-4.77,.14-1.05,.18-2.13,.18-3.19,.02-5.91,0-11.82,0-17.73v-.79c-1.42,.53-2.52,1.23-2.98,2.63-.18,.56-.27,1.17-.28,1.76-.04,1.41-.02,2.82-.02,4.22,0,3.41,0,6.83,0,10.24,0,.64-.05,1.28-.15,1.91-.23,1.59-1.15,2.77-2.39,3.72-1.54,1.18-3.31,1.73-5.22,1.88-.68,.05-1.37,.04-2.05,0-.35-.02-.72-.11-1.04-.27-.77-.37-.88-1.21-.24-1.77,.37-.32,.78-.6,1.17-.89,.48-.36,.98-.69,1.42-1.09,1.27-1.15,2.03-2.56,2.14-4.29,.12-1.77-.05-3.54-.18-5.3-.13-1.74-.31-3.49-.11-5.24,0-.06-.02-.12-.04-.21-.11,.01-.21,.01-.31,.04-4.31,1.37-8.46,.84-12.48-1.09-.29-.14-.57-.3-.85-.43-1.66-.78-3.01-1.93-4.02-3.46-.83-1.26-1.73-2.5-2.43-3.83-1.24-2.33-2.91-4.31-4.8-6.11-.84-.79-1.71-1.54-2.57-2.31-.11-.1-.23-.19-.34-.29-.39-.41-.41-.77-.03-1.17,.5-.53,1.11-.88,1.84-.94,1.15-.1,2.25,.12,3.29,.61,1.66,.78,2.92,2.05,4.1,3.41,.91,1.05,1.79,2.12,2.7,3.16,1.18,1.34,2.54,2.47,4.07,3.38,1.44,.86,2.98,1.45,4.67,1.63,1.72,.19,3.37-.08,4.94-.74,.86-.36,1.67-.85,2.5-1.28,.28-.14,.45-.36,.54-.67,.57-1.86,1.7-3.34,3.21-4.52,.6-.47,1.29-.82,1.98-1.15,1-.48,2.03-.88,3.04-1.32v-.13Z" />
              </g>
            </g>
          </g>
          <g 
            id="projects-poly"
            onMouseEnter={highlightColor}
            onMouseLeave={highlightColorReset}
            onClick={openLink}
          >
            <polyline
              points="495.03 428 323.03 2 884.03 2 495.03 428"
              style={{
                fill: "#e9c46a",
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
          </g>
          <g 
            id="projects-icon"
            onMouseEnter={handleIconHighlight}
            onClick={openLink}
            >
            <g
              style={{
                opacity: 0.5,
              }}
            >
              <rect
                x={490.38}
                y={98.63}
                width={124.65}
                height={103.37}
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
              <line
                x1={490.38}
                y1={122.96}
                x2={613.51}
                y2={122.96}
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
              <line
                x1={505.58}
                y1={110.79}
                x2={505.58}
                y2={110.79}
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
              <line
                x1={520.78}
                y1={110.79}
                x2={520.78}
                y2={110.79}
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
              <line
                x1={535.98}
                y1={110.79}
                x2={535.98}
                y2={110.79}
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
              <polyline
                points="528.54 143.2 511.66 163.12 528.54 183.04"
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
              <polyline
                points="573.82 183.04 590.71 163.12 573.82 143.2"
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
              <line
                x1={558.57}
                y1={140.63}
                x2={543.15}
                y2={184.33}
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
            </g>
          </g>
          <g 
            id="about-poly"
            onMouseEnter={highlightColor}
            onMouseLeave={highlightColorReset}
            onClick={openLink}
            >
            <polyline
              points="495.03 428 2.03 197.69 2.03 2 324.03 2 495.03 428 495.03 428"
              style={{
                fill: "#264653",
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
          </g>
          <g 
            id="about-icon"
            onMouseEnter={handleIconHighlight}
            onClick={openLink}
            >
            <g
              style={{
                opacity: 0.5,
              }}
            >
              <circle
                cx={256.72}
                cy={159.43}
                r={30.43}
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
              <path
                d="M281.17,179.59c12.55,8.06,20.86,22.13,20.86,38.15v15.4h-90.61v-15.4c0-16.23,8.53-30.47,21.36-38.47"
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
            </g>
          </g>
          <g 
            id="resume-poly"
            onMouseEnter={highlightColor}
            onMouseLeave={highlightColorReset}
            onClick={openLink}
            >
            <polygon
              points="495.03 428.01 2 618.1 2.02 197.68 495.03 428.01"
              style={{
                fill: "#e76f51",
                stroke: "#000",
                strokeMiterlimit: 10,
                strokeWidth: 4,
              }}
            />
          </g>        
          <g 
            id="resume-icon"
            onMouseEnter={handleIconHighlight}
            onClick={openLink}
            >
            <g
              style={{
                opacity: 0.5,
              }}
            >
              <polyline
                points="171.03 405.16 171.03 474.17 92.9 474.17 92.9 370 135.87 370"
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
              <polyline
                points="135.87 370 135.87 405.16 171.03 405.16 135.87 370"
                style={{
                  fill: "none",
                  stroke: "#231f20",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 6,
                }}
              />
            </g>
          </g>
          <g id="circle">
            <g>
              <circle
                id="l"
                cx={495.4}
                cy={435.38}
                r={98.88}
                style={{
                  fill: "#fff",
                  stroke: "#000",
                  strokeMiterlimit: 10,
                  strokeWidth: 11,
                }}          
              />
              <polygon
                id="m"
                points="446.36 415.99 434.3 382.31 478.03 398.9 523.78 403.42 531.32 410.96 570.03 408.45 564.5 443.13 500.65 459.22 490.1 508.99 479.54 488.88 472.5 496.92 465.47 468.27 456.42 477.82 443.85 454.7 422.23 468.77 434.8 441.12 424.75 447.16 446.36 415.99"
              />
              <polygon
                id="n"
                points="503.17 409.96 523.78 418 505.59 418 503.17 409.96"
                style={{
                  fill: "#fff",
                }}
              />
            </g>
          </g>
        </svg>
      );

    return <div class="App">
        <SvgBackground class="App"/>
        <div className="flex flex-right width-100 bottom-125">
            <div className="width-50 text-left">
                <h1>Adam Wolfman</h1>
                <h2>Developer | Solutions Engineer</h2>                
                <Legend></Legend>
            </div>
        </div>
        
    </div>
}


export default Index;
