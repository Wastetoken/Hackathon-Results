import React from 'react';
import { createRoot } from 'react-dom/client';
import { Component } from './horizon-hero-section';

const root = document.getElementById('hero-root');
if (root) {
  createRoot(root).render(<Component />);
}