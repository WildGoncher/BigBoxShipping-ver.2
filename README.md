## A production-ready web platform for a maritime container shipping company, demonstrating practical skills in modern frontend development

## Technical Stack

- React 19 + TypeScript
- Tailwind CSS 4
- Vite for tooling
- Controlled component architecture

## What I Built

- Complete component library (Button, Card, Input, Select)
- Design system with custom colors and glassmorphism
- Responsive layouts with Tailwind
- Type-safe components with strict TypeScript

## Key Features

- Controlled state management (no prop drilling)
- Expandable card system with smooth animations
- Variant-based component system
- Mobile-first responsive design

## Architecture Highlights

// Controlled component pattern
interface CardProps {
isOpen: boolean; // Parent-controlled state
onToggle: () => void;
}

// Discriminated unions for variants
type ButtonVariant = 'primary' | 'secondary' | 'hero';

## Clean Structure

src/
├── components/ui/ # Reusable components
├── pages/Home/ # Main page
└── data/ # Static content

## What This Shows

- Ability to build production-ready interfaces
- Clean component architecture
- TypeScript proficiency
- Modern CSS with Tailwind
- Problem-solving with controlled patterns
