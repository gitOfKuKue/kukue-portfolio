import React, { useEffect } from "react";
import Container from "../Components/Container";
import { useParams, Link } from "react-router-dom";
import portfolios from "../JavaScripts/portfolio";

const ContentWritingPage = () => {
  const { productId } = useParams();
  const projects = portfolios.contentWriting.projects;

  const currentIndex = projects.findIndex((item) => item.id == productId);
  const selectedProject = projects[currentIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productId]);

  if (!selectedProject) {
    return (
      <Container className="py-20 text-center text-red-500">
        <h1 className="text-2xl font-bold">Content project not found.</h1>
      </Container>
    );
  }

  const prevProject =
    currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <section className="py-10 bg-gray-50" id="content-writing-page">
      <Container className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
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

            {/* Text Content */}
            <div className="text-font text-base leading-relaxed whitespace-pre-line mt-4 lg:mt-0">
              <p className="mb-4">{selectedProject.description}</p>

              <div className="border border-gray-300 rounded-md p-4 overflow-y-auto max-h-[400px] bg-gray-50 whitespace-pre-line">
                {selectedProject.content}
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                {selectedProject.pdf && (
                  <a
                    href={selectedProject.pdf}
                    download
                    className="px-5 py-2 bg-button text-font border border-border rounded-md hover:bg-border transition"
                  >
                    Download PDF
                  </a>
                )}

                {selectedProject.postLink && (
                  <a
                    href={selectedProject.postLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border text-border border-border rounded-md hover:bg-button hover:text-font transition"
                  >
                    View on Facebook
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-10">
            {prevProject ? (
              <Link
                to={`/contentWriting/${prevProject.id}`}
                className="px-5 py-2 hover:bg-button border border-border text-font rounded-md  hover:text-font transition"
              >
                ← Previous
              </Link>
            ) : <div />}

            {nextProject ? (
              <Link
                to={`/contentWriting/${nextProject.id}`}
                className="px-5 py-2 hover:bg-button border border-border text-font rounded-md transition"
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

export default ContentWritingPage;
