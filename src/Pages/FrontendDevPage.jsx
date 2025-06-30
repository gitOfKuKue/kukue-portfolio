import React from "react";
import Container from "../Components/Container";
import { useParams, Link } from "react-router-dom";
import portfolios from "../JavaScripts/portfolio";

const FrontendDevPage = () => {
  const { productId } = useParams();
  const projects = portfolios.webDevelopment.projects;

  const currentIndex = projects.findIndex((item) => item.id == productId);
  const selectedProject = projects[currentIndex];

  if (!selectedProject) {
    return (
      <Container className="py-20 text-center text-red-500">
        <h1 className="text-2xl font-bold">Project not found.</h1>
      </Container>
    );
  }

  const prevProjectId =
    currentIndex > 0 ? projects[currentIndex - 1].id : null;
  const nextProjectId =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1].id : null;

  return (
    <section className="py-10 bg-gray-50" id="frontend-web-dev-page">
      <Container className="max-w-6xl mx-auto px-4">
        <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          {/* Header */}
          <div className="mb-6 border-b border-dashed pb-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-iconic">
              {selectedProject.title}
            </h1>
            <p className="text-font-light text-base mt-2">
              {selectedProject.type}
            </p>
          </div>

          {/* Content */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Images */}
            <div className="space-y-4">
              {selectedProject.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${selectedProject.title} - ${idx + 1}`}
                  className="rounded-xl w-full object-cover shadow-md"
                />
              ))}
            </div>

            {/* Description */}
            <div className="text-font text-base leading-relaxed whitespace-pre-line mt-4 lg:mt-0">
              <p className="mb-4">{selectedProject.description}</p>
              {selectedProject.githublink && (
                <a
                  href={selectedProject.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2 bg-button border border-border text-font rounded-md transition"
                >
                  Go to GitHub
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10">
            {prevProjectId ? (
              <Link
                to={`/frontendWebDev/${prevProjectId}`}
                className="px-5 py-2 hover:bg-button border border-border text-font rounded-md  transition"
              >
                ← Previous
              </Link>
            ) : <div />}

            {nextProjectId ? (
              <Link
                to={`/frontendWebDev/${nextProjectId}`}
                className="px-5 py-2 hover:bg-button border border-border rounded-md  text-font transition"
              >
                Next →
              </Link>
            ) : <div />}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FrontendDevPage;
