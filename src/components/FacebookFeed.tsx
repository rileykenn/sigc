'use client';

import { motion } from 'framer-motion';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const posts = [
  {
    date: '2 days ago',
    text: 'Congratulations to David Mitchell on winning the Sunday Medal with a net 65! Great round Dave, drinks are on you at the clubhouse!',
    likes: 34, comments: 8, shares: 2,
  },
  {
    date: '5 days ago',
    text: 'Our resident kangaroos were out in force today enjoying the sunshine on the 5th fairway. Just another day at Sussex Inlet Golf Club. Remember to give them right of way!',
    likes: 67, comments: 12, shares: 15,
  },
  {
    date: '1 week ago',
    text: 'Reminder: The Sussex Open is coming up on June 1st! 18 holes of stroke play, open to all. Get your entries in at the pro shop or call us on (02) 4441 2259.',
    likes: 45, comments: 6, shares: 9,
  },
];

export default function FacebookFeed() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <p className="text-gold-500 uppercase tracking-[0.2em] text-sm font-medium mb-4">Social</p>
            <h2 className="font-serif italic text-4xl text-green-900 mb-4">Follow the Action</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Stay connected with the latest comp results, club news, and wildlife sightings from the course.
            </p>
            <a
              href="https://www.facebook.com/SussexInletGolfClub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-green-800 text-green-800 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-green-800 hover:text-white transition-colors"
            >
              Follow on Facebook
            </a>
          </motion.div>

          {/* Posts */}
          <div className="lg:col-span-3 space-y-4">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-cream rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center text-white text-xs font-bold">SI</div>
                  <div>
                    <p className="text-sm font-semibold text-green-900">Sussex Inlet Golf Club</p>
                    <p className="text-xs text-gray-400">{post.date}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.text}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><ThumbsUp size={12} /> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageCircle size={12} /> {post.comments}</span>
                  <span className="flex items-center gap-1"><Share2 size={12} /> {post.shares}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
