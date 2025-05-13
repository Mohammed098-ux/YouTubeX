// 


import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { FaHistory, FaRegPauseCircle, FaCogs, FaPlus } from "react-icons/fa";
import { MdOutlineShortText } from "react-icons/md";
import { motion } from "framer-motion";
import Icon from "../components/common/Icon";
// Import your CSS module or styles here
import "../styles/HistoryPage.css"

const dummyData = [
  {
    title: "Wrestling is just different 💪",
    thumbnail: "https://i.ytimg.com/vi/xyz123/hqdefault.jpg",
  },
  {
    title: "Life Hack #mma #ufc",
    thumbnail: "https://i.ytimg.com/vi/abc456/hqdefault.jpg",
  },
  {
    title: "MEETING MY SISTER'S BOYFRIEND 🤣",
    thumbnail: "https://i.ytimg.com/vi/def789/hqdefault.jpg",
  },
  {
    title: "How to speak like the 1% elite",
    thumbnail: "https://i.ytimg.com/vi/RzX5MeWGRSk/hqdefault.jpg",
  },
  {
    title: "100 Game Changing startups to build in 2025",
    thumbnail: "https://i.ytimg.com/vi/RSox9FBBJGg/hqdefault.jpg",
  },
  {
    title: "How I'd Learn ML/AI FAST If I Had to Start Over",
    thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
  },
];

const HistoryPage: React.FC = () => {
  return (
    <div className="history-container">
      {/* Header */}
      <header className="history-header">
        <div>
          <h1>Watch History</h1>
          <p>Today</p>
        </div>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search watch history"
            className="search-input"
          />
          <div className="right-options">
            <span>Clear all watch history</span>
            <span>Pause watch history</span>
            <span>Manage all history</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="history-content">
        {/* Video Grid */}
        <div className="video-grid">
          {dummyData.map((video, index) => (
            <motion.div
              key={index}
              className="video-card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="thumbnail"
              />
              <div className="video-info">
                <p className="video-title" title={video.title}>
                  {video.title}
                </p>
                {/* @ts-ignore */}
                <FiMoreVertical size={20} className="video-menu" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="history-sidebar">
          <ul>
            <li>
              {/* @ts-ignore */}
              <FaHistory size={20} /> Clear all history
            </li>
            <li>
              {/* @ts-ignore */}
              <FaRegPauseCircle size={20} /> Pause watch history
            </li>
            <li>
              {/* @ts-ignore */}
              <FaCogs size={20} /> Manage all history
            </li>
            <hr />
            <li>
              {/* @ts-ignore */}
              <MdOutlineShortText size={20} /> Comments
            </li>
            <li>
              {/* @ts-ignore */}
              <MdOutlineShortText size={20} /> Posts
            </li>
            <li>
              {/* @ts-ignore */}
              <MdOutlineShortText size={20} /> Live Chat
            </li>
          </ul>
        </aside>

        {/* FAB */}
        <motion.button
          className="fab-button"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          {/* @ts-ignore */}
          <FaPlus size={20} />
        </motion.button>
      </div>
    </div>
  );
};

export default HistoryPage;
