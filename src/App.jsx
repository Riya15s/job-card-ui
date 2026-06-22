
import React from 'react'
import Card from './components/Card'


const App = () => {
 const jobOpenings = [
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.7s6PmGrvogwjBlfiIsCrugHaFj?pid=Api&P=0&h=180",
    companyName: "Google",
    datePosted: "5 days ago",
    post:"i0S Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/022/100/812/non_2x/microsoft-logo-transparent-free-png.png",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
     post:"Machine Learning Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://applescoop.org/image/story/76316045115487008-10311484136811093.jpeg",
    companyName: "Apple",
    datePosted: "1 week ago",
     post:"AI Research Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    salary: "$135/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.jkX_YbI1YbpNvd8E4TBbRQHaEK?pid=Api&P=0&h=180",
    companyName: "Meta",
    datePosted: "3 days ago",
     post:"Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    salary: "$145/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&P=0&h=180",
    companyName: "Amazon",
    datePosted: "10 days ago",
     post:"GPU programmer",
    tag1: "Contract",
    tag2: "Mid Level",
    salary: "$110/hr",
    location: "Mumbai, India"
  },

  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.2LCUUptpN_wCdmF0NrGa2gHaD4?pid=Api&P=0&h=180",
    companyName: "Uber",
    datePosted: "2 days ago",
     post:"Database Administrator",
    tag1: "Full Time",
    tag2: "Mid Level",
    salary: "$115/hr",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.ltcARXwmibVo14TP4mWIpgHaEK?pid=Api&P=0&h=180",
    companyName: "Salesforce",
    datePosted: "8 days ago",
     post:" Developer",
    tag1: "Hybrid",
    tag2: "Senior Level",
    salary: "$125/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.CH_Ljw5hpxU03HXEuOC1pAHaHa?pid=Api&P=0&h=180",
    companyName: "LinkedIn",
    datePosted: "10 weeks ago",
     post:"i0S Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    salary: "$100/hr",
    location: "Chennai, India"
  }
];
console.log(jobOpenings);

  return (
    <div className='parent'> 
    {jobOpenings.map(function(elem,idx){
       
      return <div>
        <Card company={elem.companyName}  datePosted={elem.datePosted} tag1={elem.tag1} post={elem.post} tag2={elem.tag2} brandLogo={elem.brandLogo} salary={elem.salary } location={elem.location}/>

  </div>
    })}
  </div>
  )
}

export default App








