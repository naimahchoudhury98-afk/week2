# week2
Week 2 Submission

What requirements did you achieve?

I built an accessible and responsive image gallery using HTML, CSS, and JavaScript. I implemented responsive design principles using a mobile-first approach and added media queries to ensure the layout adapts across different screen sizes. The gallery works on both mobile and desktop views, with a clear visual change between the two.

I used JavaScript arrays and objects to store image data and dynamically generated thumbnails and the main image using DOM manipulation. Event handlers were added to allow users to switch between images using thumbnail clicks, buttons, and keyboard arrow keys.

Accessibility considerations were included throughout the project. All images have appropriate alt text, ARIA attributes such as aria-label and aria-live were added to improve screen reader support, and keyboard navigation was implemented to ensure the gallery can be used without a mouse. 

 If so, what was it that you found difficult about these tasks?

The most challenging part of this assignment was managing layout changes across different screen sizes without overcomplicating the CSS. I initially struggled with elements becoming misaligned or cut off when applying media queries, particularly when thumbnails changed orientation on desktop. It took me a long time to figure where i was going wrong

I also found debugging JavaScript difficult at times, especially when small syntax errors or mismatched IDs caused features like buttons or keyboard navigation to stop working. Understanding how different parts of the code depended on one another required careful step-by-step testing.

 Additional reflections

One area I would appreciate feedback on is my approach to responsive design, particularly whether my media query usage is clear and appropriate for the assignment expectations.

External resources such as MDN documentation, class notes, and examples discussed during workshops were especially helpful. I also relied on browser developer tools to inspect elements, test responsive layouts, and debug JavaScript errors.

Some common bugs I encountered included incorrect query selectors, mismatched ID and class names, and logic errors when tracking the current image index. These were resolved by using console logging, testing one change at a time, and breaking the problem down into smaller steps rather than trying to fix everything at once.

What went really well was gradually building the project feature by feature. Once the core gallery logic was working, adding enhancements like keyboard navigation, ARIA attributes, and image captions felt manageable and rewarding. If I were to do this again, I would plan the responsive layout earlier to reduce the amount of CSS refactoring later on.