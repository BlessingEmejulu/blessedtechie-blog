"use client";

import Typewriter from 'typewriter-effect';

export default function TypewriterEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'Community Manager',
          'UI/UX Designer',
          'Open Source Contributor',
          'Solution Provider'
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}