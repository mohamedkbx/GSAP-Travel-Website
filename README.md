# Project Documentation

# Travel Website

## Overview

This project is a dynamic and interactive web application that leverages modern JavaScript libraries to create smooth animations and seamless page transitions. The primary libraries used in this project are GSAP (GreenSock Animation Platform) and Barba.js.

## Libraries Used

### GSAP (GreenSock Animation Platform)

GSAP is a robust JavaScript library for creating high-performance animations that work in all major browsers. It provides a simple API for animating DOM elements, SVGs, and other web elements with precision and control.

**Key Features:**

- High-performance animations
- Cross-browser compatibility
- Rich set of easing functions
- Timeline-based animations

### Barba.js

Barba.js is a lightweight JavaScript library that helps in creating smooth transitions between pages in a web application. It enhances the user experience by providing a seamless navigation experience without full page reloads.

**Key Features:**

- Smooth page transitions
- Easy integration with existing projects
- Customizable transition effects
- Event hooks for advanced control

## Project Structure

The project is structured to separate concerns and maintain a clean codebase. The main components include:

- **HTML**: The structure of the web pages.
- **CSS**: Styling and layout of the web pages.
- **JavaScript**: Logic for animations and page transitions.

## Key Components

### Animations

Animations are handled using GSAP. Various elements on the page are animated to enhance the user experience. Examples include:

- Fade-in effects
- Slide-in animations
- Scaling and rotation effects

### Page Transitions

Page transitions are managed using Barba.js. The library intercepts link clicks and performs AJAX requests to fetch new content, then animates the transition between the old and new content.

**Example Transitions:**

- Fade transitions
- Slide transitions
- Custom animations defined using GSAP

## Usage

To use this project, ensure you have the necessary libraries included in your project. You can include GSAP and Barba.js via CDN or by installing them through npm/yarn.

**CDN Example:**
