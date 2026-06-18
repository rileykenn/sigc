'use client';

import { motion } from 'framer-motion';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const posts = [
  {
    date: '2 days ago',
    text: '🏆 Congratulations to David Mitchell on winning the Sunday Medal with a net 65! Great round Dave, drinks are on you at the clubhouse! 🍻⛳',
    likes: 34,
    comments: 8,
    shares: 2,
  },
  {
    date: '5 days ago',
    text: '🦘 Our resident kangaroos were out in force today enjoying the sunshine on the 5th fairway. Just another day at Sussex Inlet Golf Club! Don\'t forget to give them right of way 😄',
    likes: 67,
    comments: 12,
    shares: 15,
  },
  {
    date: '1 week ago',
    text: '📋 Reminder: The Sussex Open is coming up on June 1st! 18 holes of stroke play, open to all. Get your entries in at the pro shop or call us on (02) 4441 2259. Spots filling fast! 🏌️‍♂️',
    likes: 45,
    comments: 6,
    shares: 9,
  },
];

function PostCard({ post, index }: { post: typeof posts[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
    >
      {/* Post Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2]">
            <FacebookIcon size={16} />
            <style>{`.facebook-avatar svg { fill: white; }`}</style>
            <span className="sr-only">SIGC</span>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">Sussex Inlet Golf Club</div>
            <div className="text-xs text-gray-400">{post.date} · 🌏</div>
          </div>
        </div>
        <MoreHorizontal size={16} className="text-gray-300" />
      </div>

      {/* Post Text */}
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        {post.text}
      </p>

      {/* Engagement Stats */}
      <div className="flex items-center justify-between text-xs text-gray-400 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-1">
          <span className="flex items-center justify-center w-4.5 h-4.5 rounded-full bg-[#1877F2] text-white">
            <ThumbsUp size={9} fill="white" />
          </span>
          <span>{post.likes}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{post.comments} comments</span>
          <span>{post.shares} shares</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-2">
        {[
          { icon: ThumbsUp, label: 'Like' },
          { icon: MessageCircle, label: 'Comment' },
          { icon: Share2, label: 'Share' },
        ].map((action) => {
          const Icon = action.icon;
          return (
            <button key={action.label} className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium text-gray-500 hover:bg-gray-50 transition-colors">
              <Icon size={14} />
              {action.label}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

export default function FacebookFeed() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-4">
              Social
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 tracking-tight mb-4">
              Follow the Action
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-6 max-w-md">
              Stay connected with the latest comp results, club news, and wildlife sightings from the course.
            </p>
            <a
              href="https://www.facebook.com/SussexInletGolfClub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#1877F2] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#166FE5] hover:shadow-lg hover:shadow-blue-500/20"
            >
              <span className="text-white"><FacebookIcon size={18} /></span>
              Follow on Facebook
            </a>

            {/* Page Stats */}
            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold text-navy-900">1.2K</div>
                <div className="text-xs text-gray-400">Followers</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-navy-900">856</div>
                <div className="text-xs text-gray-400">Likes</div>
              </div>
              <div className="w-px h-8 bg-gray-200" />
              <div>
                <div className="text-2xl font-bold text-navy-900">4.8</div>
                <div className="text-xs text-gray-400">Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Mock Feed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Feed Header */}
            <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1877F2] text-white">
                  <FacebookIcon size={14} />
                </div>
                <span className="text-sm font-semibold text-gray-700">Recent Posts</span>
              </div>
              <a
                href="https://www.facebook.com/SussexInletGolfClub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#1877F2] hover:underline"
              >
                View Page →
              </a>
            </div>

            {posts.map((post, i) => (
              <PostCard key={i} post={post} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
