import React from "react";
import { Card, CardContent } from "./components/ui/card";
import ModelViewer           from './ModelViewer'

export default function App() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={`${import.meta.env.BASE_URL}bg-video.mp4`} type="video/mp4" />
      </video>
      <div className="relative min-h-screen bg-neutral-900 text-white p-8 rounded-2xl z-1">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2 text-neutral-100">Shiresoft</h1>
          <p className="text-lg text-neutral-400">
            We build worlds from scratch, with heart and stubborn pixels.
          </p>
        </header>

        <div className="relative z-10">
          <main className="grid gap-5 max-w-4xl mx-auto">
            <Card className="bg-neutral-800 text-left shadow-lg border border-neutral-700 rounded-2xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-neutral-100 mb-2">Who We Are</h2>
                <p className="text-neutral-300">
                  Shiresoft is an independent software and game development studio founded by a group of passionate developers and creatives.
                  Our journey began in 2020 with a shared love for gaming, coding, design, and storytelling.
                </p>
                <p className="mt-4 text-neutral-300">
                  Team Members:
                  <ul className="list-disc list-inside mt-1">
                    <li>Sam – Generalist 3D Artist</li>
                    <li>Marchino – Generalist Programmer</li>
                    <li>Artic – Generalist Game Designer</li>
                  </ul>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 shadow-lg border border-neutral-700 rounded-2xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-neutral-100 mb-2">Our Core Values</h2>
                <ul className="list-none list-inside space-y-1 text-neutral-300">
                  <li>Passion-Driven Creation</li>
                  <li>Continuous Growth</li>
                  <li>Collaborative Spirit</li>
                  <li>Player-Focused Design</li>
                  <li>Creative Authenticity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800 shadow-lg border border-neutral-700 rounded-2xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-neutral-100 mb-2">Our Mission</h2>
                <p className="text-neutral-300">
                  To build a profitable and sustainable game development studio that supports its members creatively and financially,
                  while offering part-time services to stay independent.
                </p>
              </CardContent>
            </Card>

            <Card className="text-left bg-neutral-800 shadow-lg border border-neutral-700 rounded-2xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-neutral-100 mb-2">Manifesto</h2>
                <ol className="list-decimal list-inside space-y-1 text-neutral-300">
                  <li>We Are Dreamers Who Do</li>
                  <li>Our Games Are a Reflection of Us</li>
                  <li>Small Team, Big Vision</li>
                  <li>Failure is Part of the Process</li>
                  <li>We're Building a Future We Believe In</li>
                  <li>Community Over Competition</li>
                  <li>Make It Worth It</li>
                  <li>Keep It Fun, Keep It Real</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="bg-neutral-800 border border-neutral-700 shadow-lg rounded-2xl">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-neutral-100">The Star of Our Project</h2>
                <ModelViewer />
                <p className="text-neutral-400 text-sm">Preview of our main character model. All rights reserved</p>
              </CardContent>
            </Card>
          </main>
          <footer className="mt-12 text-center text-sm text-neutral-600">
            © {new Date().getFullYear()} Shiresoft©. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
);
}