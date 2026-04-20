/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Hero from './components/Hero';
import VideoCard from './components/VideoCard';
import VideoModal from './components/VideoModal';
import About from './components/About';
import Contact from './components/Contact';
import BackgroundEffects from './components/BackgroundEffects';
import { PROJECTS, BRAND_PROJECTS } from './constants';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-bg-base text-white font-sans lg:h-screen lg:overflow-hidden p-6 md:p-12 lg:p-16 relative">
      <BackgroundEffects />
      
      <div className="max-w-[1600px] mx-auto h-full grid grid-cols-1 md:grid-cols-[380px_1fr] gap-16 md:gap-24 relative z-10">
        {/* Sidebar */}
        <aside className="flex flex-col justify-start h-full space-y-12 md:overflow-y-auto md:pr-4 scrollbar-none">
          <Hero />
          <div className="flex flex-col gap-12 mt-8 md:mt-12">
            <About />
            <Contact />
          </div>
        </aside>

        {/* Video Showcase Section */}
        <section className="h-full md:overflow-y-auto pr-0 md:pr-4 scrollbar-none">
          <div className="flex flex-col gap-24">
            {/* Featured Section */}
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-white/20" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Editorial Showcase</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 grid-flow-row-dense">
                {PROJECTS.map((project, index) => (
                  <VideoCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                    onOpen={setSelectedProject}
                  />
                ))}
              </div>
            </div>

            {/* Brands / Vertical Section */}
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-white/20" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Brand Collaborations</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 grid-flow-row-dense">
                {BRAND_PROJECTS.map((project, index) => (
                  <VideoCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                    onOpen={setSelectedProject}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Playback Modal */}
        <VideoModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </main>
  );
}
