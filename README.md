

## Screen Components

### ChapterScreen
- **Description**: Main screen showing chapter information and available lessons.
- **Key Components**: 
  - AppHeader
  - ChapterCard
  - ProgressPath
  - LessonCard (multiple)
  - BottomNavBar

### LessonScreen
- **Description**: Screen showing lesson content with interactive elements.
- **Key Components**: 
  - AppHeader (with back button)
  - QuestionPrompt
  - ChoiceCard (multiple)
  - FeedbackCard
  - PrimaryButton
  - LessonProgressIndicator

### ComparisonScreen
- **Description**: Screen comparing different investment approaches.
- **Key Components**: 
  - NavHeader
  - CharacterComparisonCard (multiple)
  - ComparisonResult
  - TimeperiodSelector
  - PrimaryButton

### CalculationScreen
- **Description**: Screen for compounding interest calculations.
- **Key Components**: 
  - PageHeader
  - InputValueCard (multiple)
  - ResultDisplay
  - ToggleButtonGroup
  - PrimaryButton

### StockMarketScreen
- **Description**: Screen showing stock market behavior over time.
- **Key Components**: 
  - AppHeader
  - TimelineToggle
  - StockChart
  - InsightCard
  - PrimaryButton

### QuizIntroScreen
- **Description**: Introduction screen before starting a quiz.
- **Key Components**: 
  - AppHeader
  - QuizIntro
  - CenteredIllustration
  - PrimaryButton

### QuizQuestionScreen
- **Description**: Screen displaying individual quiz questions.
- **Key Components**: 
  - QuizNavigationHeader
  - QuizQuestion
  - QuizOptionItem (multiple)
  - PrimaryButton

### LessonCompletionScreen
- **Description**: Screen shown after completing a lesson.
- **Key Components**: 
  - ScreenContainer
  - CenteredIllustration
  - PrimaryButton (Next lesson)

## Navigation & Layout Components

### AppHeader
- **Props**: 
  - `title`: String - Main header title
  - `subtitle`: String - Optional subtitle text
  - `hasBackButton`: Boolean - Whether to show back navigation
  - `backgroundColor`: String - Background color of header
- **Description**: Appears at the top of most screens with consistent styling, optionally including back navigation.

### ScreenContainer
- **Props**: 
  - `backgroundColor`: String - Background color of the screen
  - `padding`: Number/Object - Padding values for the container
- **Description**: Wrapper component for consistent screen layouts and styling.

### BottomNavBar
- **Props**: 
  - `activeTab`: String - Current active tab identifier
  - `onTabChange`: Function - Handler for tab change events
- **Description**: Persistent bottom navigation with home, middle, and profile icons.

### LessonProgressIndicator
- **Props**: 
  - `currentPosition`: String - Current position indicator (e.g., "Ch-1-L-1-P-3")
- **Description**: Shows current progress through a lesson sequence.

### QuizNavigationHeader
- **Props**: 
  - `quizId`: String - Quiz identifier
  - `chapterId`: String - Chapter identifier
  - `lessonId`: String - Lesson identifier
- **Description**: Special header for quiz screens with navigation context.

## Content Display Components

### ChapterCard
- **Props**: 
  - `chapterNumber`: Number - Chapter number
  - `title`: String - Chapter title (e.g., "Investing Basics")
  - `icon`: Element/Component - Icon representing the chapter
- **Description**: Card displaying chapter information on the main screen.


### ProgressPath
- **Props**: 
  - `steps`: Array - Array of step objects with completed status
  - `currentStep`: Number - Current step in the progress
- **Description**: Visual path with milestone icons showing progress through a chapter.


### QuestionPrompt
- **Props**: 
  - `question`: String - Main question text
  - `subtitle`: String - Additional instruction or context for the question
- **Description**: Displays a learning question with supporting text.

### FeedbackCard
- **Props**: 
  - `message`: String - Feedback message text
  - `type`: String - Feedback type (positive/negative)
  - `backgroundColor`: String - Background color of the card
- **Description**: Displays feedback based on user choices.

### ResultDisplay
- **Props**: 
  - `label`: String - Description label (e.g., "Returns received")
  - `value`: String/Number - Result value to display
  - `backgroundColor`: String - Background color of the display
- **Description**: Shows calculation results or important values.

### ComparisonResult
- **Props**: 
  - `subjectName`: String - Name of the primary subject
  - `resultAmount`: String/Number - Result amount to display
  - `comparedToName`: String - Name of the comparison subject
- **Description**: Displays comparison results between two subjects.

### StockChart
- **Props**: 
  - `data`: Array - Chart data points
  - `companyName`: String - Name of the company
  - `companyLogo`: Element - Company logo component/image
  - `timeRange`: String - Time period of the chart
  - `lineColor`: String - Color of the chart line (red/green)
- **Description**: Visual chart showing stock price trends over time.

### InsightCard
- **Props**: 
  - `message`: String - Insight message text
  - `icon`: Element - Icon (e.g., lightbulb)
- **Description**: Highlights important learning insights with visual emphasis.

### CenteredIllustration
- **Props**: 
  - `image`: Element - Illustration component/image
  - `size`: Object - Width and height dimensions
  - `animation`: Object - Optional animation properties
- **Description**: Displays a centered illustration or image with optional animation.

### QuizIntro
- **Props**: 
  - `title`: String - Quiz title text
  - `subtitle`: String - Description of the quiz
  - `illustration`: Element - Quiz-related illustration
- **Description**: Introduction screen for quiz sections.

### QuizQuestion
- **Props**: 
  - `questionText`: String - The question text
  - `highlightedTerms`: Array - Terms to be highlighted in the question
- **Description**: Displays formatted quiz questions with highlighted key terms.

## Interactive Input Components

### LessonCard
- **Props**: 
  - `title`: String - Lesson title
  - `actionType`: String - Type of action (start/review)
  - `onActionClick`: Function - Handler for card action
- **Description**: Card for starting or reviewing lessons.

### CharacterComparisonCard
- **Props**: 
  - `name`: String - Character name
  - `avatar`: Element - Character avatar image
  - `actionText`: String - Description of character's action
  - `amount`: String/Number - Amount value
  - `isTotal`: Boolean - Whether to show total amount
  - `backgroundColor`: String - Background color of the card
- **Description**: Card displaying character information for comparisons.


### ChoiceCard
- **Props**: 
  - `icon`: Element - Icon representing the choice
  - `title`: String - Main choice text
  - `subtitle`: String - Supporting information
  - `isSelected`: Boolean - Whether the choice is selected
  - `onSelect`: Function - Handler for selection changes
- **Description**: Selectable card for making choices in lessons.

### InputValueCard
- **Props**: 
  - `label`: String - Input label (e.g., "%", "₹")
  - `value`: String/Number - Current input value
  - `suffix`: String - Optional suffix text (e.g., "Lakh")
  - `onChange`: Function - Handler for value changes
- **Description**: Input card for numerical values with formatting.

### TimeperiodSelector
- **Props**: 
  - `options`: Array - Time period options
  - `selectedOption`: String/Number - Currently selected option
  - `onSelectionChange`: Function - Handler for selection changes
- **Description**: Selector for different time periods in calculations.

### ToggleButtonGroup
- **Props**: 
  - `options`: Array - Array of option objects
  - `selectedOption`: String/Number - Currently selected option
  - `onSelectionChange`: Function - Handler for selection changes
- **Description**: Group of toggle buttons for selecting from multiple options.

### TimelineToggle
- **Props**: 
  - `options`: Array - Timeline options (e.g., short/long term)
  - `activeOption`: String - Currently active option
  - `onToggle`: Function - Handler for option toggle
- **Description**: Toggle switch between different timeline views.

### QuizOptionItem
- **Props**: 
  - `text`: String - Option text
  - `isSelected`: Boolean - Whether the option is selected
  - `isCorrect`: Boolean - Whether the option is correct
  - `onSelect`: Function - Handler for selection
  - `showResult`: Boolean - Whether to show correct/incorrect status
- **Description**: Individual selectable option in a quiz question.

## Action Components

### PrimaryButton
- **Props**: 
  - `text`: String - Button text
  - `isActive`: Boolean - Whether the button is active/enabled
  - `width`: Number/String - Button width
  - `onPress`: Function - Handler for button press
- **Description**: Primary action button with consistent styling.

### SecondaryButton
- **Props**: 
  - `text`: String - Button text
  - `onPress`: Function - Handler for button press
- **Description**: Secondary/alternative action button with distinct styling.

## Modal Components

### WarningModal
- **Props**: 
  - `title`: String - Modal title
  - `message`: String - Warning message
  - `icon`: Element - Warning icon
  - `primaryAction`: String - Primary action button text
  - `secondaryAction`: String - Secondary action button text
  - `onPrimaryPress`: Function - Handler for primary action
  - `onSecondaryPress`: Function - Handler for secondary action
- **Description**: Modal for warnings or confirmations with multiple actions.


Assumption

```
src/
├── components/
│   ├── navigation/
│   │   ├── AppHeader.js
│   │   ├── BottomNavBar.js
│   │   ├── LessonProgressIndicator.js
│   │   ├── QuizNavigationHeader.js
│   │   └── index.js
│   ├── layout/
│   │   ├── ScreenContainer.js
│   │   ├── GradientBackground.js
│   │   └── index.js
│   ├── content/
│   │   ├── ChapterCard.js
│   │   ├── ProgressPath.js
│   │   ├── QuestionPrompt.js
│   │   ├── FeedbackCard.js
│   │   ├── ResultDisplay.js
│   │   ├── ComparisonResult.js
│   │   ├── StockChart.js
│   │   ├── InsightCard.js
│   │   ├── CenteredIllustration.js
│   │   ├── QuizIntro.js
│   │   ├── QuizQuestion.js
│   │   └── index.js
│   ├── inputs/
│   │   ├── LessonCard.js
│   │   ├── CharacterComparisonCard.js
│   │   ├── ChoiceCard.js
│   │   ├── InputValueCard.js
│   │   ├── TimeperiodSelector.js
│   │   ├── ToggleButtonGroup.js
│   │   ├── TimelineToggle.js
│   │   ├── QuizOptionItem.js
│   │   └── index.js
│   ├── actions/
│   │   ├── PrimaryButton.js
│   │   ├── SecondaryButton.js
│   │   └── index.js
│   └── modals/
│       ├── WarningModal.js
│       └── index.js
├── screens/
│   ├── ChapterScreen.js
│   ├── LessonScreen.js
│   ├── ComparisonScreen.js
│   ├── CalculationScreen.js
│   ├── StockMarketScreen.js
│   ├── QuizIntroScreen.js
│   ├── QuizQuestionScreen.js
│   ├── LessonCompletionScreen.js
│   └── index.js
├── theme/
│   ├── colors.js
│   ├── typography.js
│   ├── spacing.js
│   ├── animations.js
│   └── index.js
├── context/
│   ├── LessonContext.js
│   ├── QuizContext.js
│   ├── ProgressContext.js
│   └── index.js
├── hooks/
│   ├── useLesson.js
│   ├── useQuiz.js
│   ├── useCalculation.js
│   └── index.js
├── utils/
│   ├── calculations.js
│   ├── formatters.js
│   ├── quizHelpers.js
│   ├── validators.js
│   └── analytics.js
└── data/
    ├── lessons.js
    ├── chapters.js
    ├── quizzes.js
    └── stockData.js
```
