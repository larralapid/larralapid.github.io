"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Loader2,
} from "lucide-react"
import ProjectCard from "@/components/project-card"
import SkillBadge from "@/components/skill-badge"
import ExperienceCard from "@/components/experience-card"
import CertificationCard from "@/components/certification-card"
import TestimonialCard from "@/components/testimonial-card"
import GitHubRepoCard from "@/components/github-repo-card"
import { getRecentRepos, type GitHubRepo } from "@/lib/github"

// GitHub username to fetch repositories from
const GITHUB_USERNAME = "yourusername" // Replace with your GitHub username

export default function Home() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRepos() {
      try {
        setLoading(true)
        const recentRepos = await getRecentRepos(GITHUB_USERNAME)
        setRepos(recentRepos)
        setError(null)
      } catch (err) {
        setError("Failed to load GitHub repositories")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  return (
    <main className="min-h-screen bg-black text-white flex justify-center py-10 px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-[350px_1fr] gap-6">
        {/* Sidebar */}
        <div className="bg-[#1e1e1e] rounded-lg p-6 flex flex-col items-center h-fit sticky top-10">
          <div className="bg-[#242424] rounded-lg p-4 mb-4">
            <Image src="/avatar.png" alt="Richard hanrick" width={150} height={150} className="rounded-lg mx-auto" />
          </div>

          <h1 className="text-2xl font-bold mt-2 mb-1">Richard hanrick</h1>
          <div className="bg-[#242424] text-sm px-4 py-1 rounded-full mb-4">Web developer</div>

          {/* Bio */}
          <p className="text-gray-300 text-sm text-center mb-6">Building digital products, brands, and experiences.</p>

          <div className="w-full border-t border-[#333] my-4"></div>

          {/* Contact Info */}
          <div className="w-full space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#242424] p-2 rounded-lg">
                <Mail size={20} className="text-yellow-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400">EMAIL</p>
                <p className="text-sm">richard@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#242424] p-2 rounded-lg">
                <Phone size={20} className="text-yellow-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400">PHONE</p>
                <p className="text-sm">+1 (213) 352-2795</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#242424] p-2 rounded-lg">
                <Calendar size={20} className="text-yellow-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400">BIRTHDAY</p>
                <p className="text-sm">June 23, 1982</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#242424] p-2 rounded-lg">
                <MapPin size={20} className="text-yellow-500" />
              </div>
              <div>
                <p className="text-xs text-gray-400">LOCATION</p>
                <p className="text-sm">
                  Sacramento,
                  <br />
                  California, USA
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="w-full">
            <h3 className="text-lg font-medium mb-3">Social Links</h3>
            <div className="grid grid-cols-3 gap-3">
              <a
                href="#"
                className="bg-[#242424] p-2 rounded-lg hover:bg-yellow-500 transition-colors flex justify-center"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-[#242424] p-2 rounded-lg hover:bg-yellow-500 transition-colors flex justify-center"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-[#242424] p-2 rounded-lg hover:bg-yellow-500 transition-colors flex justify-center"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#242424] p-2 rounded-lg hover:bg-yellow-500 transition-colors flex justify-center"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="bg-[#242424] p-2 rounded-lg hover:bg-yellow-500 transition-colors flex justify-center"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-[#242424] p-2 rounded-lg hover:bg-yellow-500 transition-colors flex justify-center"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* About Me Section */}
          <section className="bg-[#1e1e1e] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              About Me
              <div className="w-12 h-1 bg-yellow-500 mt-2"></div>
            </h2>
            <p className="text-gray-300 mb-4">
              I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print
              media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
            </p>
            <p className="text-gray-300">
              My job is to build your website so that it is functional and user-friendly but at the same time
              attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to
              use. My aim is to bring across your message and identity in the most creative way. I created web design
              for many famous brand companies.
            </p>
          </section>

          {/* Skills Section */}
          <section className="bg-[#1e1e1e] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">
              Skills
              <div className="w-12 h-1 bg-yellow-500 mt-2"></div>
            </h2>
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="HTML" />
              <SkillBadge name="CSS" />
              <SkillBadge name="JavaScript" />
              <SkillBadge name="TypeScript" />
              <SkillBadge name="React" />
              <SkillBadge name="Next.js" />
              <SkillBadge name="Node.js" />
              <SkillBadge name="Express" />
              <SkillBadge name="MongoDB" />
              <SkillBadge name="PostgreSQL" />
              <SkillBadge name="Git" />
              <SkillBadge name="Figma" />
              <SkillBadge name="Tailwind CSS" />
              <SkillBadge name="Redux" />
              <SkillBadge name="GraphQL" />
              <SkillBadge name="Docker" />
            </div>
          </section>

          {/* GitHub Repositories Section (Replacing "What I'm Doing") */}
          <section className="bg-[#1e1e1e] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">
              Recent GitHub Projects
              <div className="w-12 h-1 bg-yellow-500 mt-2"></div>
            </h2>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-yellow-500" />
              </div>
            ) : error ? (
              <div className="bg-[#242424] rounded-lg p-6 text-center">
                <p className="text-red-400">{error}</p>
                <p className="text-gray-400 mt-2 text-sm">Please check your GitHub username and internet connection.</p>
              </div>
            ) : repos.length === 0 ? (
              <div className="bg-[#242424] rounded-lg p-6 text-center">
                <p className="text-gray-400">No public repositories found.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {repos.map((repo) => (
                  <GitHubRepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            )}
          </section>

          {/* Experience Section */}
          <section className="bg-[#1e1e1e] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">
              Experience
              <div className="w-12 h-1 bg-yellow-500 mt-2"></div>
            </h2>
            <div className="space-y-6">
              <ExperienceCard
                position="Senior Frontend Developer"
                company="Tech Solutions Inc."
                duration="2020 - Present"
                description="Lead the frontend development team, implementing modern web applications using React, Next.js, and TypeScript. Improved site performance by 40% and implemented CI/CD pipelines."
              />
              <ExperienceCard
                position="Web Developer"
                company="Digital Creations"
                duration="2017 - 2020"
                description="Developed responsive websites and web applications for various clients. Worked with JavaScript, React, and Node.js to create dynamic user interfaces."
              />
              <ExperienceCard
                position="UI/UX Designer"
                company="Creative Studio"
                duration="2015 - 2017"
                description="Designed user interfaces for web and mobile applications. Created wireframes, prototypes, and visual designs using Figma and Adobe XD."
              />
            </div>
          </section>

          {/* Projects Section */}
          <section className="bg-[#1e1e1e] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">
              Projects
              <div className="w-12 h-1 bg-yellow-500 mt-2"></div>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard."
                technologies={["React", "Node.js", "MongoDB", "Stripe"]}
                image="/project-1.jpg"
                demoLink="#"
                repoLink="#"
              />
              <ProjectCard
                title="Task Management App"
                description="A task management application with drag-and-drop functionality, team collaboration, and real-time updates."
                technologies={["Next.js", "TypeScript", "Firebase", "Tailwind CSS"]}
                image="/project-2.jpg"
                demoLink="#"
                repoLink="#"
              />
              <ProjectCard
                title="Portfolio Website"
                description="A responsive portfolio website with dark mode, animations, and contact form."
                technologies={["HTML", "CSS", "JavaScript", "GSAP"]}
                image="/project-3.jpg"
                demoLink="#"
                repoLink="#"
              />
              <ProjectCard
                title="Weather App"
                description="A weather application that shows current weather and forecast for any location."
                technologies={["React", "OpenWeather API", "Styled Components"]}
                image="/project-4.jpg"
                demoLink="#"
                repoLink="#"
              />
            </div>
          </section>

          {/* Certification Section */}
          <section className="bg-[#1e1e1e] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">
              Certifications
              <div className="w-12 h-1 bg-yellow-500 mt-2"></div>
            </h2>
            <div className="space-y-6">
              <CertificationCard
                title="AWS Certified Developer"
                organization="Amazon Web Services"
                date="2023"
                credentialLink="#"
              />
              <CertificationCard
                title="Professional Frontend Developer"
                organization="Meta"
                date="2022"
                credentialLink="#"
              />
              <CertificationCard
                title="Full Stack Web Development"
                organization="Udacity"
                date="2021"
                credentialLink="#"
              />
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="bg-[#1e1e1e] rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-6">
              Testimonials
              <div className="w-12 h-1 bg-yellow-500 mt-2"></div>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <TestimonialCard
                avatar="/testimonial-1.png"
                name="Daniel Lewis"
                text="Richard was hired to create a corporate identity. We were very pleased with the work done."
              />
              <TestimonialCard
                avatar="/testimonial-2.png"
                name="Jessica Miller"
                text="Richard was hired to create a corporate identity. We were very pleased with the work done."
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
