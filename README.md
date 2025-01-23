# Quiz Master App

## Overview
Interactive quiz application built with Vite and React, fetching questions from OpenDB API.

## Technologies
- Vite
- React
- OpenDB API

## Prerequisites
- Node.js 18+
- pnpm/npm/yarn

## Setup
bash
# Create Vite project
npm create vite@latest quiz-master -- --template react-ts

# Install dependencies
    cd QuizApp
    npm install axios react-router-dom



## Quiz App Functionality

### 1. Question Fetching
- Fetch questions from OpenDB API
- Support multiple categories and difficulty levels
- Random question selection
- Handle API errors gracefully

### 2. Quiz Navigation
- Move between questions (next/previous)
- Track current question index
- Disable navigation based on quiz state
- Prevent revisiting answered questions (optional)

### 3. User Interaction
- Select answer for each question
- Time-based constraints
- Mark questions as answered
- Prevent changing answers after submission

### 4. Timer Mechanism
- Countdown timer for entire quiz
- Optional per-question time limit
- Auto-submit on timer expiration
- Visual time remaining indicator

### 5. Answer Tracking
- Store user's selected answers
- Compare with correct answers
- Calculate score in real-time
- Track unanswered questions

### 6. Result Analysis
- Total score calculation
- Percentage of correct answers
- Time taken to complete
- Breakdown by question category/difficulty
- Correct/incorrect answer visualization

### 7. Additional Features
- Restart quiz option 
- View correct answers after completion

 


   

## Key Scripts
json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}


## Environment Configuration
Create .env:

VITE_OPENDB_API_URL=https://opentdb.com/api.php


 

## API Integration
Axios-based API service for OpenDB questions

## Performance Optimizations
- Code splitting
- Lazy loading
- Memoization

## Deployment
- Vercel
