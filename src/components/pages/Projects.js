import { useLocation } from "react-router-dom"

import Message from "../layout/Message"
import Container from "../layout/Container.js"
import LinkButton from "../layout/LinkButton"
import Loading from "../layout/Loading"

import styles from './Projects.module.css'
import ProjecCard from "../project/ProjectCard"
import { useState, useEffect } from "react"


function Projects() {
  const [projects, setProjects] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    }).then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))
    }, 1200)
  }, [])
  
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>My Projects</h1>
        <LinkButton to="/newproject" text="Create Project" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        {projects.length > 0 &&
        projects.map((project) =>(
          <ProjecCard 
            id={project.id}  
            name={project.name}
            budget={project.budget}
            category={project.category.name}
            key={project.id}
          />
        ))}
        {!removeLoading && <Loading />}
        {!removeLoading && projects.length === 0 && (
          <h2>No records</h2>
        )}
      </Container>
    </div>
  )

}

export default Projects