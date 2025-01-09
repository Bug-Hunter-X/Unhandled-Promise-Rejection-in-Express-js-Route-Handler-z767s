# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within route handlers.  Unhandled rejections can lead to application crashes without informative error messages.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The `bug.js` example uses an asynchronous operation (`someAsyncOperation`) within a route handler. However, it lacks proper error handling, resulting in the promise rejection being swallowed.

## Solution

The `bugSolution.js` file demonstrates how to properly handle the promise rejection using `.catch()`, logging the error to the console, and sending a suitable error response to the client.