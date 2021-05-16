const ResumeParser = require('resume-parser');

// From file to file
ResumeParser
  .parseResumeFile('./files/resume.doc', './files/compiled') // input file, output dir
  .then(file => {
    console.log("Yay! " + file);
  })
  .catch(error => {
    console.error(error);
  });

// From URL
ResumeParser
  .parseResumeUrl('http://www.mysite.com/resume.txt') // url
  .then(data => {
    console.log('Yay! ', data);
  })
  .catch(error => {
    console.error(error);
  });