![logo](minervajs-slider.png "Minerva.JS")

# Minerva.js

Minerva.JS is a Simple and Elegant Carousel Slider. It is a super lightweight carousel component written in React, designed to be easy to use and highly customizable.

## Features

- Lightweight and fast
- Supports both text and image-based content
- Customizable styles and controls
- Auto-slide functionality with configurable duration
- Fully responsive and accessible

---

## Installation

You can install the library through `npm`:

```bash
npm install @misterzik/minerva.js
```

Alternatively, you can download the zip file and install it in your project.

---

## Usage

### Import the Component

To use the carousel, import it into your React project:

```tsx
import { Carousel } from "@misterzik/minerva.js/carousel";
```

### Initialize the Component

Initialize the carousel component by passing the required props:

```tsx
<Carousel
  data={[
    {
      imgUrl: "https://example.com/image1.jpg",
      alt: "Image 1",
      textContent: true,
      text: "Welcome to Minerva.JS",
      style: "custom-style",
    },
    {
      imgUrl: "https://example.com/image2.jpg",
      alt: "Image 2",
      imgContent: true,
    },
  ]}
  controls={{
    enabled: true,
    styled: "arrows",
    customStyle: "custom-controls",
  }}
  widthSize={"500px"}
  heightSize={"300px"}
  duration={30}
/>
```

---

## Application Properties Interface

### `data`

The `data` prop is used to populate and build the slider. Each item in the array represents a slide.

Example:

```tsx
[
  {
    imgUrl: "https://example.com/image.jpg", // Image URL
    alt: "Minerva JS Plugin", // Alt text for accessibility
    textContent: true, // Enable text content
    text: "Simple and Elegant Carousel", // Text to display
    style: "mn-it", // Custom style for the slide
  },
];
```

---

### `controls`

The `controls` prop is used to enable navigation controls (arrows or dots) and auto-slide functionality.

Example:

```tsx
{
  enabled: true, // Enable controls
  styled: "arrows", // Style type: "arrows" or "dots"
  customStyle: "custom-controls" // Custom CSS class for controls
}
```

---

### `widthSize`

The `widthSize` prop sets the width of the carousel container. You can pass a value in pixels or percentages.

Example:

```tsx
widthSize={"500px"}
```

---

### `heightSize`

The `heightSize` prop sets the height of the carousel container. You can pass a value in pixels or percentages.

Example:

```tsx
heightSize={"300px"}
```

---

### `duration`

The `duration` prop sets the duration of each slide when using auto-slide functionality. Pass a number in seconds.

Example:

```tsx
duration={30} // 30 seconds per slide
```

---

## Accessibility

Minerva.JS is designed with accessibility in mind. It includes ARIA attributes and supports keyboard navigation for a better user experience.

---

## Development

### Scripts

- **Build**: `npm run build` - Builds the library for production.
- **Watch**: `npm run watch` - Watches for changes and rebuilds automatically.
- **Build Library**: `npm run build:lib` - Builds the library for distribution.

---

## More Information

For more details, visit the [Minerva.JS Documentation](http://misterzik.github.io/minerva.js/).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
