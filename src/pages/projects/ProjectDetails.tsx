import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './projectDetails.css'

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const [markdown, setMarkdown] = useState<string>('')

  const markdownPath = `/data/projects/${slug}.md`

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await fetch(markdownPath)
        if (!response.ok) {
          throw new Error('Error al cargar el contenido')
        }
        const text = await response.text()
        setMarkdown(text)
      } catch (error) {
        console.error(error)
      }
    }

    loadMarkdown()
  }, [markdownPath])

  return (
    <div className='project-page'>
      <div className='markdown-content'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

export default ProjectPage
