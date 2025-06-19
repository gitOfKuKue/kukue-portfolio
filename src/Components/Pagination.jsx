import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Pagination({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  totalItems,
  className,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      className={`flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 ${className}`}
    >
      <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between w-full">
        <div className="xs:mb-2 md:mb-0">
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {(currentPage - 1) * itemsPerPage + 1}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(currentPage * itemsPerPage, totalItems)}
            </span>{" "}
            of <span className="font-medium">{totalItems}</span> results
          </p>
        </div>
        <div className="">
          <nav
            className="isolate flex justify-between items-center -space-x-px rounded-md"
            aria-label="Pagination"
          >
            {/* Prev Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-sm text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>

            <div className="xs:hidden md:block">
              {/* Page Numbers */}
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => setCurrentPage(number)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 ${
                    number === currentPage
                      ? "bg-iconic text-white z-10"
                      : "text-font hover:bg-gray-50"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
              }
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-sm text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
