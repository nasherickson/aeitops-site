"use client";

import React from 'react';
import Image from 'next/image';

export default function AeClearTest() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center justify-center gap-8">
      {/* Background wolf image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wolf-bg.png"
          alt="Wolf Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Background AE logo */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10">
        <Image
          src="/ae-logo.png"
          alt="AE Logo Background"
          width={800}
          height={800}
          className="object-contain"
          priority
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold">AE-Clear Plugin Showcase</h1>

        {/* AE-OUTLINE Debug */}
        <div className="w-64 h-32 ae-outline flex items-center justify-center bg-black/30 border-2 border-blue-400 border-dashed">
          <p>ae-outline (debug)</p>
        </div>

        {/* AE-CLEAR */}
        <div className="w-64 h-32 ae-clear flex items-center justify-center bg-black/30">
          <p>ae-clear</p>
        </div>

        {/* AE-BLUR */}
        <div className="w-64 h-32 ae-blur flex items-center justify-center bg-black/30">
          <p>ae-blur</p>
        </div>
      </div>
    </div>
  );
}