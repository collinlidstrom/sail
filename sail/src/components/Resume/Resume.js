const ResumeParser = require('resume-parser');

import "./files"


const Resume = (props) => (
  <div id="resumeData">
    <ResumeParser fileName={props.filename}/>
  </div>
);


Resume.parseResumeFile = function(filename) {
   const fileName = './files/clidstrom-resume.docx';
  // From file to file
  ResumeParser
    .parseResumeFile(fileName, './files/compiled') // input file, output dir
    .then(file => {
      console.log("Yay! " + file);
    })
    .catch(error => {
      console.error(error);
    });
  return {
    bpi: data.bpi
  };
}

Resume.parseResumeUrl = function(url) {
  // From URL
  ResumeParser
    .parseResumeUrl('http://www.mysite.com/resume.txt') // url
    .then(data => {
      console.log('Yay! ', data);
    })
    .catch(error => {
      console.error(error);
    });
    return {
      bpi: data.bpi
    };
  }

export default ResumeParser;