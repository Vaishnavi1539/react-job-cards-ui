
import Card from './assets/components/card'

    const App=()=>{
   const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlq1-rUuRFvy3mZ29s_BxzGfMqk76z-KtnsA&s",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWXIPNdXbKSE0eC4wiiIMmO7aTUjuws_4hw&s",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMa2pjI5h329WbryrSFFS6-B37dK2X552Ig&s",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHPyUgCEL64IDo5eElnEFljn7RYcMay4iMg&s",
    company: "Meta",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    company: "Netflix",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    company: "Microsoft",
    datePosted: "6 days ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEu8tfOJpA-vMjPqyI2gEyaDjTaI7tSJFzQ&s",
    company: "Nvidia",
    datePosted: "4 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.YLeheJp5UZzXnt8MQ6s0wAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$62/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.NrzoDmsiIjk5US-qXc_towHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Uber",
    datePosted: "1 day ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.7C44ooS1Q50v15DfaQGkOwHaH-?rs=1&pid=ImgDetMain&o=7&rm=3",
    company: "Airbnb",
    datePosted: "2 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/042/148/631/non_2x/spotify-logo-spotify-social-media-icon-free-png.png",
    company: "Spotify",
    datePosted: "2 days ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Remote"
},
{
    brandLogo: "https://freepnglogo.com/images/all_img/facebook-logo.png",
    company: "Facebook",
    datePosted: "3 days ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$45/hr",
    location: "Remote"
}
];

console.log(jobs);
return (
  <div className='parent'>
    {jobs.map(function(elem,idx){
     
        return <div key={idx}>
          <Card  company={elem.company}
         post={elem.post} 
        tag1={elem.tag1} 
        datePosted={elem.datePosted} 
        tag2={elem.tag2} 
        brandLogo={elem.brandLogo} 
        pay={elem.pay}/>
          </div>  
      })}
      </div>
)
  }
export default App