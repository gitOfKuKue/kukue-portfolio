import React from "react";
import defaultProfile from "../assets/feedback-profiles/user.png";

const FeedbackCard = ({ feedback, number }) => {
  const whenFormatting = (day, month, year) => {
    const now = new Date();
    const inputDate = new Date(year, month - 1, day); // Month is 0-indexed
    const diffTime = now - inputDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return "Today";
    if (diffDays === 1) return "1 day ago";
    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return months === 1 ? "1 month ago" : `${months} months ago`;
    }
    const years = Math.floor(diffDays / 365);
    return years === 1 ? "1 year ago" : `${years} years ago`;
  };

  const splittedTime = feedback.time.split(".");

  return (
    <div className="w-full border border-border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex justify-between items-center px-5 py-3 border-b border-border text-sm md:text-base bg-gray-50">
        <span>
          <strong>{number}.</strong> {feedback.name}'s feedback
        </span>
        <span>{feedback.time}</span>
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
        {/* Avatar */}
        <div className="w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border border-border">
          <img
            src={feedback.image === "#" ? defaultProfile : feedback.image}
            alt="User profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Feedback Content */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-lg md:text-xl font-bold">{feedback.name}</h2>
          <p className="text-gray-500 text-sm mb-1">
            {whenFormatting(splittedTime[0], splittedTime[1], splittedTime[2])}
          </p>
          {/* Rating Placeholder */}
          <div className="mb-2 text-yellow-500">★★★★★</div>
          <p className="text-gray-700 text-sm md:text-base line-clamp-4 sm:line-clamp-none text-justify">
            {feedback.feedback}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-5 py-3 border-t border-border text-xs sm:text-sm bg-gray-50 gap-2 sm:gap-0">
        <span>{feedback.email === "#" ? "INFO@mail.com" : feedback.email}</span>
        <span className="font-semibold text-gray-700">FEEDBACK</span>
        <span>{feedback.phone === "#" ? "PHONE NO" : feedback.phone}</span>
      </div>
    </div>
  );
};

export default FeedbackCard;
