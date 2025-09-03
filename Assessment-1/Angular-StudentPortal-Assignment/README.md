# Angular Student Portal Assignment

A complete Angular application for managing student information with features including registration, listing, and editing student details.

## Features

1. **Student Registration**
   - Angular Reactive Forms with validation
   - Form fields: Name, Email, Age, Department
   - Real-time validation with error messages

2. **Student List**
   - PrimeNG DataTable displaying all registered students
   - Click on a row to view/edit student details
   - PrimeNG Dialog for editing student information

3. **Navigation**
   - PrimeNG Menubar for easy navigation between pages
   - Responsive design for all screen sizes

## Technical Implementation

- Angular 17+ with standalone components
- PrimeNG UI components
- Reactive Forms for form handling and validation
- Angular Signals for state management
- Responsive design with custom SCSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200`

## Project Structure

- `src/app/components/` - Application components
  - `navigation/` - Top navigation bar
  - `student-registration/` - Student registration form
  - `student-list/` - Student listing with edit functionality
- `src/app/models/` - Data models
- `src/app/services/` - Services for data management

## Routes

- `/register` - Student Registration page
- `/students` - Student List page
