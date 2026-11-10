import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListing from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs" 

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListing />
      <ViewAllJobs />    
    </>
    
  )
}

export default HomePage